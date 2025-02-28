import { Component, OnInit } from '@angular/core';

import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-validator',
  standalone: false,
  templateUrl: './validator.component.html',
  styleUrl: './validator.component.scss'
})
export class ValidatorComponent implements OnInit {
  validatorForm!: FormGroup;
  constructor(private fb: FormBuilder) {}

  passwordMatchValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const password = control.get('password')?.value;
      const confirmPassword = control.get('confirmPassword')?.value;
  
      if (password && confirmPassword && password !== confirmPassword) {
        return { passwordMismatch: 'Passwords do not match' };
      }

      if (password && !confirmPassword || !password && confirmPassword) {
        return { passwordMismatch: 'One field is empty'}
      }
      return null;
    };
  }

  ngOnInit(): void {
    this.validatorForm = new FormGroup(
      {
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        confirmPassword: new FormControl('', Validators.required),
      },
      { validators: this.passwordMatchValidator() }
    );
  }

  get passwordMismatch(): boolean {
    return this.validatorForm.errors?.['passwordMismatch'] && this.validatorForm.touched;
  }

  checkError(): void {
    console.log(this.validatorForm.errors);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  standalone: false,
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent implements OnInit {

  submittedData: any = null;
  formSubmitted = false;

  // This is a small form, so let's use FormGroup.
  contactForm!: FormGroup;
  constructor(private fb: FormBuilder) {}
  
  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  submitForm() {
    if (this.contactForm.valid) {
      // console.log("Form submitted:", this.contactForm.value);
      this.submittedData = this.contactForm.value;
      this.formSubmitted = true; 
      this.contactForm.reset();
    }
  }
}

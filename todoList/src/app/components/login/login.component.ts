import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements AfterViewInit {
  constructor(private authService: AuthService, private router: Router ) {}
  @ViewChild('usernameInput') usernameInput!: ElementRef;
  @ViewChild('passwordInput') passwordInput!: ElementRef;

  ngAfterViewInit(): void {
    this.usernameInput.nativeElement.focus();
  }

  loginClick(): void {
    const username = this.usernameInput?.nativeElement.value;
    const password = this.passwordInput?.nativeElement.value;
    // console.log(username + ' ' + password)
    this.authService.login(username, password);

    if (this.authService.loggedIn()) {
      this.router.navigate(['/todo'])
    }
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  // constructor(private router: Router) {}

  // navigateToDirectory() {
  //   this.router.navigate(['/'], { replaceUrl: true }).then(() => {
  //     console.log('Navigated to Directory');
  //   });
  // }

  // isActive(path: string): boolean {
  //   return this.router.url === path;
  // }
}

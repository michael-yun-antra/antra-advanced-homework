import { Component } from '@angular/core';
import { HideAfter5SecsDirective } from './directives/hide-after5-secs.directive';

@Component({
  selector: 'app-root',
  imports: [HideAfter5SecsDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Homework1';
}

import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { TodoComponent } from './components/todo/todo.component';
import { authGuard } from './guards/auth.guard';
import { loginGuard } from './guards/login.guard';

export const routes: Routes = [
      { path: 'login', component: LoginComponent, canActivate: [loginGuard]},
      { path: 'todo', component: TodoComponent, canActivate: [authGuard]},
      { path: '', redirectTo: 'login', pathMatch: 'full'},
];

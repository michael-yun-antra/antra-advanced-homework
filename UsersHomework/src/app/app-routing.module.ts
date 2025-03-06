import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectoryComponent } from './pages/directory/directory.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

const routes: Routes = [
  // { path: '', component: DirectoryComponent },
  { path: '', component: DirectoryComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
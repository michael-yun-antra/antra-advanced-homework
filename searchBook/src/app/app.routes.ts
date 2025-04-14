import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomePageComponent},
    { path: 'wishlist', component: WishlistComponent},
    { path: '**', redirectTo: 'home'}
];

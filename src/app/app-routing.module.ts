import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './component/profile/profile.component';
import { CartComponent } from './component/cart/cart.component';
import { AboutComponent } from './component/about/about.component';
import { HomeComponent } from './component/home/home.component';
import { ContactComponent } from './component/contact/contact.component';
import { Page404Component } from './component/page404/page404.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';
import { ItemDetailsComponent } from './component/item-details/item-details.component';
import {AuthGuard} from "./shared/auth.guard";
import {SecureInnerPagesGuard} from "./shared/secure-inner-pages.guard";
import {AuthComponent} from "./component/auth/auth.component";


const routes: Routes = [
  {path: '', redirectTo: 'Home', pathMatch: 'full'},
  {
    path: 'Home',
    children: [
      {path: '', component: HomeComponent},
      {path: 'About-Us', component: AboutComponent},
      {path: 'Contact', component: ContactComponent},
      {path: 'Cart', component: CartComponent, canActivate:[AuthGuard]},
      {path: 'Wishlist', component: WishlistComponent, canActivate:[AuthGuard]},
      {path: 'authentication', component: AuthComponent, canActivate:[SecureInnerPagesGuard]},
    ],
  },
  {
    path: 'Shop',
    children: [
      {path: '', component: Page404Component},
      {path: 'Products/:id', component: ItemDetailsComponent},
    ]
  },
  {path: 'My-Account', component: ProfileComponent, canActivate:[AuthGuard]},
  {path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

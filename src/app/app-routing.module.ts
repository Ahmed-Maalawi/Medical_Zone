import { CartComponent } from './component/cart/cart.component';
import { AboutComponent } from './component/about/about.component';
import { HomeComponent } from './component/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './component/contact/contact.component';
import { Page404Component } from './component/page404/page404.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [
  {path: '', redirectTo: 'Home', pathMatch: 'full'},
  {
    path: 'Home',
    children: [
      {path: '', component: HomeComponent},
      {path: 'About-Us', component: AboutComponent},
      {path: 'Contact', component: ContactComponent},
      {path: 'Cart', component: CartComponent},
      {path: 'Wishlist', component: WishlistComponent},
      {path: 'Login', component: LoginComponent},
    ],
  },
  {path: 'My-Account', component: LoginComponent},
  {path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

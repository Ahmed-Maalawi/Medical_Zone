import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { CartComponent } from './component/cart/cart.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { Page404Component } from './component/page404/page404.component';
import { ItemDetailsComponent } from './component/item-details/item-details.component';
import { ProfileComponent } from './component/profile/profile.component';
// import {authReducer} from "../store/reducers/auth.reducer";
import { AuthComponent } from './component/auth/auth.component';
import {authReducer} from "../store/reducers/auth.reducer";
import {EffectsModule} from "@ngrx/effects";
import {AuthEffects} from "../store/effects/auth.effects";
// import {EffectsModule} from "@ngrx/effects";
// import {AuthEffects} from "../store/effects/auth.effects";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CartComponent,
    WishlistComponent,
    AboutComponent,
    ContactComponent,
    Page404Component,
    ItemDetailsComponent,
    ProfileComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ auth: authReducer}),
    EffectsModule.forRoot([AuthEffects])
  ],
  providers: [
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

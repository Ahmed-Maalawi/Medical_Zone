import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "../services/auth.service";
import {Store} from "@ngrx/store";
import * as fromAuth from './../../store/reducers/auth.reducer';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _AuthService:AuthService, private _Router:Router, private _Store:Store){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token = this._Store.select(fromAuth.selectToken);
    if(token !== null) {
      window.alert('Access Denied, Login is Required to Access This Page!');
      this._Router.navigate(['/Home/Login']);
    }
    return true;
  }

}

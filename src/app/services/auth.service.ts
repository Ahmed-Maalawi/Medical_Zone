import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";
import {FormGroup} from "@angular/forms";
import {Observable} from "rxjs";
import {User} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient: HttpClient, private _CookieService:CookieService) { }

  user: User|null = null;

  Login(LoginData:object): Observable<any>
  {
    return this._HttpClient.post('https://medicazone.online/api/auth/login', LoginData)
  }

  Register(RegisterData:object): Observable<any>
  {
    return this._HttpClient.post('https://medicazone.online/api/auth/register', RegisterData)
  }

  logout(): void
  {
    this._CookieService.delete('token')
  }

  isLogin(): boolean
  {
    return this._CookieService.check('token')
  }
}

import { CookieService } from 'ngx-cookie-service';
import { isEmpty, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private _HttpClient: HttpClient, private _CookieService:CookieService) { }


 Login(Login:FormGroup): Observable<any> 
 {
   return this._HttpClient.post('https://medicazone.online/api/auth/login', Login)
 }


 Register(Register:FormGroup): Observable<any> 
 {
   return this._HttpClient.post('https://medicazone.online/api/auth/register', Register)
 }

 isLogin(): boolean
 {  
   return this._CookieService.check('token')
 }

 getUserData(token: string): Observable<any>
 {
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  });
  
  const requestOptions = { headers: headers };
    
  return this._HttpClient.get('https://medicazone.test/api/auth/user-profile', requestOptions);
 }

 logout(): void
 {
   this._CookieService.delete('token')
 }
}

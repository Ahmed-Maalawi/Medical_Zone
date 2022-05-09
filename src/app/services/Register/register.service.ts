import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private _HttpClient: HttpClient) { }


 Login(Login:FormGroup): Observable<any> 
 {
   return this._HttpClient.post('https://medicazone.online/api/auth/login', Login)
 }


 Register(Register:FormGroup): Observable<any> 
 {
   return this._HttpClient.post('https://medicazone.online/api/auth/register', Register)
 }
}

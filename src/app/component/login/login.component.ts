import { CookieService } from 'ngx-cookie-service';
import { RegisterService } from './../../services/Register/register.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private _RegisterService:RegisterService,
    private _CookieService:CookieService,
    private _Router:Router
    ) { }

  registerError: any[] = [];
  ngOnInit(): void {
  }

  LoginError:string = '';

  loginForm= new FormGroup({

    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null,  Validators.required),

  });


  RegisterForm= new FormGroup({

    name: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [Validators.minLength(6), Validators.maxLength(100), Validators.required]),
    password_confirmation: new FormControl(null, [Validators.required]),

  });

  onLogin(LoginData:FormGroup): void
  {
    this._RegisterService.Login(LoginData.value)
    .subscribe(
      (response) => {
        if(response.status ) {
          console.log(response.access_token);
          this._CookieService.set('token', response.access_token);
          this.LoginError = '';
          this._Router.navigate(['/Home']);

        }
      },
      (error) => {
        this.LoginError = error.error.error;
        console.log(this.LoginError);
      }
    )
  }

  onRegister(RegisterData:FormGroup): void
  {
    this._RegisterService.Register(RegisterData.value)
    .subscribe( (response) => {
      console.table(response)
      if(response.message == 'success'){
        localStorage.setItem('token',response.access_token)
      }
    },
    (error) => {
      this.registerError = error.error.error;
      console.log(this.registerError);
    });

  }

}

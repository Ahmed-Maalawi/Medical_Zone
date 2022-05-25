import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {AuthService} from "../../services/auth.service";
import {User} from "../../models/user.model";
import * as AuthActions from './../../../store/actions/auth.actions';



@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(
    private _AuthService: AuthService,
    private _CookieService: CookieService,
    private _Router: Router,
    private _Store: Store
  ) {}

  ngOnInit(): void {}

  currentUser: User | null = null;
  registerError: any[] = [];

  loginForm = new FormGroup({

    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, Validators.required),

  });

  RegisterForm = new FormGroup({

    name: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [Validators.minLength(6), Validators.maxLength(100), Validators.required]),
    password_confirmation: new FormControl(null, [Validators.required]),

  });

  async onLogin(LoginData: FormGroup): Promise<any> {

    const credentials = {
      email: LoginData.value.email,
      password: LoginData.value.password,
    };

    this._Store.dispatch(AuthActions.loginRequest({ credentials }));

    console.log(this.currentUser)

  }

  async onRegister(RegisterData:FormGroup): Promise<any> {

    const credentials = {
      name: RegisterData.value.name,
      email: RegisterData.value.email,
      password: RegisterData.value.password,
      password_confirmation: RegisterData.value.password_confirmation,
    }

    // this._Store.dispatch(AuthActions.RegisterRequest({ credentials }));

    console.log(credentials)

  }

  LoginError: any = '';

}

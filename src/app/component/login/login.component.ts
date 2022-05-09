import { RegisterService } from './../../services/Register/register.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _RegisterService:RegisterService) { }

  ngOnInit(): void {
  }

  registerError:string = '';

  loginForm= new FormGroup({

    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null,  Validators.required),

  });


  RegisterForm= new FormGroup({

    name: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [Validators.minLength(3), Validators.maxLength(100), Validators.required]),
    password_confirmation: new FormControl(null, [Validators.minLength(3), Validators.maxLength(100), Validators.required]),
    accept: new FormControl(null, Validators.required)

  });

  onLogin(LoginData:FormGroup): void
  {
    this._RegisterService.Login(LoginData.value)
    .subscribe(
      (response) => {
        if(response.status ) {
          console.log(response.access_token);
          this.registerError = '';
        }
      },
      (error) => {
        this.registerError = error.error.error;
        console.log(this.registerError)
      }
    )
  }

  onRegister(RegisterData:FormGroup): void
  {
    console.table(RegisterData.value);

  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  loginForm= new FormGroup({

    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [Validators.minLength(3), Validators.maxLength(100), Validators.required]),

  });


  RegisterForm= new FormGroup({

    name: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [Validators.minLength(3), Validators.maxLength(100), Validators.required]),
    accept: new FormControl(null, Validators.required)

  });

  onLogin(LoginData:FormGroup): void
  {
  
  }

  onRegister(RegisterData:FormGroup): void
  {

  }
}

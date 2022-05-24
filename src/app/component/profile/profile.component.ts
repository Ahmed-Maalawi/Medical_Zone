import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {User} from "../../models/user.model";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User|null = null;

  constructor(private _AuthService:AuthService)
  {

  }


  ngOnInit(): void {
    this.user = this._AuthService.user;
    console.log(this.user)
  }

  logoutBtn(): void
  {
    this._AuthService.logout();
  }
}

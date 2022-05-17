import { Component, OnInit } from '@angular/core';
import {RegisterService} from "../../services/Register/register.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:any;

  constructor(private _RegisterService:RegisterService)
  {

  }


  ngOnInit(): void {
    this.user = this._RegisterService.currentUser;
    console.log(this.user)
  }

}

import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import * as fromAuth from "../../../store/reducers/auth.reducer";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user$ = this._store.select(fromAuth.selectUser);
  constructor(private _AuthService:AuthService, private _store:Store<fromAuth.State>)
  {
    console.log(this.user$)
  }


  ngOnInit(): void {

  }

  logoutBtn(): void
  {
    this._AuthService.logout();
  }
}

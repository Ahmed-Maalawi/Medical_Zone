import { CategoryService } from './../../services/Category/category.service';
import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Category} from "../../models/category.model";
import {Store} from "@ngrx/store";
import * as fromAuth from './../../../store/reducers/auth.reducer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  categories: Array<Category> = [];

  CurrentUser$ = this._Store.select(fromAuth.selectUser);



  constructor(private CategoryService:CategoryService, private _AuthService:AuthService, private _Store:Store<fromAuth.State>)
  {
    this.getCategories();

    console.log(this.CurrentUser$);
  }

  ngOnInit(): void {
  }

  getCategories(): void
  {
    this.CategoryService.getAllCategory()
    .subscribe(
      res => {
        this.categories = res.data.items;
      },
      (error) => {console.log(error)}
    )
  }

  islogin(): boolean
  {
    return this._AuthService.isLogin();
  }

  logout():void
  {
    this._AuthService.logout();
  }

}

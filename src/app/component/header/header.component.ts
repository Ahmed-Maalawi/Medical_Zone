import { CategoryService } from './../../services/Category/category.service';
import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Category} from "../../models/category.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  categories: Array<Category> = [];

  CurrentUser$ = null;
  constructor(private CategoryService:CategoryService, private _AuthService:AuthService)
  {
    this.getCategories();
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

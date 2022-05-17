import { CategoryService } from './../../services/Category/category.service';
import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/Register/register.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  categories:any;

  constructor(private CategoryService:CategoryService, private _RegisterService:RegisterService) 
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
    return this._RegisterService.isLogin();
  }

  logout():void
  {
    this._RegisterService.logout();
  }

}

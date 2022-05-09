import { CategoryService } from './../../services/Category/category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  categories:any;

  constructor(private CategoryService:CategoryService) 
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

}

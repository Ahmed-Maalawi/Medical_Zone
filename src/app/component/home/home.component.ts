import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/Home/home.service';
import {Product} from "../../models/product.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Deals: Product[] = [];
  brands: any[] = [];
  hotDeals: Product[] = [];
  featured: Product[] = [];
  sliders: any[] = [];
  sec1: Product[] = [];
  sec2: Product[] = [];
  sec3: Product[] = [];
  Blog: Product[] = [];


  constructor(private _HomeService: HomeService) {
    // this.getDeals();
    this.getFeatured();
   this.getBrands();
    // this.getDeals();

    _HomeService.getDealsHot().subscribe(
      (response) => { this.hotDeals = response.data.items}
    );

    _HomeService.getSliders().subscribe(
      (response) => {this.sliders = response.data.items;}
    );

    _HomeService.getFeatured().subscribe(
      (response) => {this.featured = response.data.items;}
    );

    _HomeService.getFirstSection().subscribe(
      (response) => {this.sec1 = response.data.items;}
    );

    _HomeService.getSectSection().subscribe(
      (response) => {this.sec2 = response.data.items;}
    );

    _HomeService.getTherdtSection().subscribe(
      (response) => {this.sec3 = response.data.items;}
    );

    _HomeService.Blog().subscribe(
      (response) => {this.Blog = response.data.values;}
      );

      

  }

  ngOnInit(): void {

  }
  calcDiscount(selling: any, discount: any): number
  {

    return Math.floor(( selling / discount )  / 100 * 100);
  }
  getFeatured(): void
  {
    this._HomeService.getFeatured()
    .subscribe(
      (response) => {
        this.featured = response.data.items.slice(0,10);
      },
      (error) => {

      }
    )
  }

  getDiscount(): void
  {

  }

  getBrands():void
  {
    this._HomeService.getBrands()
    .subscribe(
      (response) => {
        this.brands = response.data.items;
      },
      (error) => {
        console.log(error.error.error)
      }
    )
  }

  // getFirst(): void
  // {
  //   this._HomeService.getFirstSection()
  //   .subscribe(
  //     (response) => {
  //       this.sec1 = response.data.items;
  //     }
  //   )
  // }


  // getDeals(): void
  // {
  //   this._HomeService.getDealsHot()
  //   .subscribe(
  //     (response) => {this.Deals = response.data.items.slice(0, 3); console.log(this.Deals)},
  //     (error) => {console.log(error)}
  //   );
  // }



}

import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/Home/home.service';
Observable
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // featured: any;
  Deals: any;

  hotDeals: any[] = [];
  sliders: any[] = [];
  featured: any[] = [];
  
  constructor(private _HomeService: HomeService) {
    // this.getDeals();
    this.getFeatured();
   
    // this.getDeals();

    _HomeService.getDealsHot().subscribe(
      (response) => { this.hotDeals = response.data.items});

    _HomeService.getSliders().subscribe(
      (response) => {this.sliders = response.data.items;});
   
      _HomeService.getFeatured().subscribe(
        (response) => {this.featured = response.data.items;});


  }


  getFeatured(): void
  {
    this._HomeService.getFeatured()
    .subscribe(
      (response) => {
        this.featured = response.data.items.slice(0,10);
        console.log(this.featured)
      },
      (error) => {

      }
    )
  }

  getDiscount(): void
  {
    
  }
  ngOnInit(): void {

  }

  // getDeals(): void
  // {
  //   this._HomeService.getDealsHot()
  //   .subscribe(
  //     (response) => {this.Deals = response.data.items.slice(0, 3); console.log(this.Deals)},
  //     (error) => {console.log(error)}
  //   );
  // }



}

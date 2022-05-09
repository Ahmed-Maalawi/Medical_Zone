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

  Deals: any;
  constructor(private _HomeService: HomeService) {
    this.getDeals();
   }

  ngOnInit(): void {}

  getDeals(): void
  {
    this._HomeService.getDealsHot()
    .subscribe(
      (response) => {this.Deals = response.data.items.slice(0, 3); console.log(this.Deals)},
      (error) => {console.log(error)}
    );
  }
}

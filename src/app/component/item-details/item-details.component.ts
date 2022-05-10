import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemDetailsService } from 'src/app/services/item-details.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
  currentProduct: any;
  AllAtributes: any;
  constructor(private _ActivatedRoute: ActivatedRoute, private _ItemDetailsService: ItemDetailsService) { }

  ngOnInit(): void {
    this.getProduct();
    this.AllAtributes['product'] = this.currentProduct;
    this.AllAtributes['brandInfo'] = this.getCategory(this.currentProduct.category_id);
  }


  getProduct(): void
  {
    let id = this._ActivatedRoute.snapshot.params['id'];
    this._ItemDetailsService.getProductDetails(id)
    .subscribe((res) => {
      this.currentProduct = res.data.items[0];
      console.log(this.currentProduct)
      this.getCategory(this.currentProduct.category_id);
    },
    (error) => {console.log(error);}
    );
  }
  getCategory(id: number):void
  {
    
  }   
}

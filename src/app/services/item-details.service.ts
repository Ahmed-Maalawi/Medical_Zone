import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemDetailsService {

  constructor(private _HttpClient:HttpClient) { }

  getProductDetails(id: number): Observable<any>
  {
    return this._HttpClient.get(`http://medicazone.online/api/zone/product-details/${id}`)
  }
}



import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private _HttpClient: HttpClient) { }


  getDealsHot(): Observable <any>
  {
    return this._HttpClient.get('https://medicazone.online/api/zone/hotdeals');
  }

  getFeatured(): Observable <any>
  {
    return this._HttpClient.get('https://medicazone.online/api/zone/featured')
  }

  getDiscount(): Observable <any>
  {
    return this._HttpClient.get('https://medicazone.online/api/zone/discount')
  }

  getSliders(): Observable<any>
  {
    return this._HttpClient.get('https://medicazone.online/api/zone/sliders')
  }

  getBrands(): Observable<any>
  {
    return this._HttpClient.get('https://medicazone.online/api/zone/getBrands')
  }

  getFirstSection(): Observable<any>
  {
    return this._HttpClient.get('http://medicazone.online/api/zone/getByCategory/11')
  }
  getSectSection(): Observable<any>
  {
    return this._HttpClient.get('http://medicazone.online/api/zone/getByCategory/8')
  }
  getTherdtSection(): Observable<any>
  {
    return this._HttpClient.get('http://medicazone.online/api/zone/getByCategory/13')
  }
  Blog(): Observable<any>
  {
    return this._HttpClient.get('http://medicazone.online/api/zone/blog/category/post/2')
  }


}

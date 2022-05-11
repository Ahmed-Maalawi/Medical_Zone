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

  getSliders(): Observable<any>
  {
    return this._HttpClient.get('https://medicazone.online/api/zone/sliders')
  }
  getFeatured(): Observable<any>
  {
    return this._HttpClient.get('https://medicazone.online/api/zone/featured')
  }
}

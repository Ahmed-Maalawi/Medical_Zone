import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _HttpClient: HttpClient) { }

  getAllCategory(): Observable<any> 
  {
    return this._HttpClient.get('https://medicazone.online/api/zone/getCategories')
  }
}

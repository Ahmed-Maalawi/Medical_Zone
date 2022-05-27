import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private _HttpClient:HttpClient) { }

  Blog(): Observable<any>
  {
    return this._HttpClient.get('https://medicazone.online/api/zone/blog')
  }
}

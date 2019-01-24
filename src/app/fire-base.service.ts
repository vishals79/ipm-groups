import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FireBaseService {

  constructor(private httpClient: HttpClient) { }
  test() {
    const params = new HttpParams();
    return this.httpClient.get('', {
      params: params
    });
  }
}

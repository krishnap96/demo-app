import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor(private http:HttpClient) { }

  getUserdetails() {
    return this.http.get<any>(`${environment.server}/products`)
      .toPromise()
      .then(result => result)
  }

  postUserdetails(obj) {
    return this.http.post<any>(`${environment.server}/products`,obj)
      .toPromise()
      .then(result => result)
  }
}

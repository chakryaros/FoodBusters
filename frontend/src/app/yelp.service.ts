import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YelpService {

  constructor(private http: HttpClient) { }

  //get all business in the city you pass
  getSearchBusiness(city: any): Observable<any> {
    return this.http.get('http://localhost:3000/business/' + city);
  
  }

  //get all business delail of each business by passing id of that business
  getBusinessDetail(id: any): Observable<any> {
    return this.http.get('http://localhost:3000/business/' + id);
  }

  //get all review detail of the business by the id
  getReviewDetail(id: any): Observable<any> {
    return this.http.get('http://localhost:3000/reviews/' + id);
  }

  //get all review detail of the business by the id
  getNightlife(city: any): Observable<any> {
    return this.http.get('http://localhost:3000/nightlife/' + city);
  }
  



}

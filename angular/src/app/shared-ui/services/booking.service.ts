import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  booking: string = "booking";
  constructor(private http: HttpClient, private apiService: ApiService) { }

  public razorPayCreateOrder(param?: object): Observable<any> {
    return this.apiService.post(`${this.booking}/razorPayCreateOrder`, param).pipe(
      map((data) => {
        return data;
      })
    );
  }

  public razorPayOrdayPayment(param: object):Observable<any> {
    return this.apiService.post(`${this.booking}/razorPayOrdayPayment`, param).pipe(
      map((data)=>{
        return data;
      })
    )
  }

  public razorPayRefundOrderPayment(param: object): Observable<any> {
    return this.apiService.post(`${this.booking}/razorPayRefundOrderPayment`, param).pipe(
      map((data) => {
        return data;
      })
    )
  }
  
  public getRazorPayOrderList(param?:object):Observable<any> {
    return this.apiService.post(`${this.booking}/getRazorPayOrderList`, param).pipe(
      map((data)=> {
        return data;
      })
    )
  }

  public orderStatusAndUploadVideo(param:object):Observable<any> {
    return this.apiService.post(`${this.booking}/orderStatusAndUploadVideo`, param).pipe(
      (data)=> {
        return data;
      }
    )
  }

}

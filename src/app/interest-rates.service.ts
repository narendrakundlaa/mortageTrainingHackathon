import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mortgage } from './models/mortage';


@Injectable({
  providedIn: 'root'
})
export class InterestRatesService {
  baseUrl = 'http://localhost:3000/';
  addMort = 'http://localhost:3000/check';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  constructor(private httpClient: HttpClient) { }

  getEmployees(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.baseUrl + 'OffersVariousBanks');
  }
  getMortgageTypes(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.baseUrl + 'mortgageTypes');
  }
  customerTypes(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.baseUrl + 'customerTypes');
  }
  MortgageCheck(employee: Mortgage): Observable<Mortgage> {
    const body = JSON.stringify(employee);
    return this.httpClient.post<Mortgage>(this.addMort, body, this.httpOptions);
  }
  getMortgageCheck(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.addMort);
  }
  deleteEmployee(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.addMort}/${id}`);
}
}

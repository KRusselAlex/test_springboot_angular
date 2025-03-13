import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  getCryptos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/cryptos`).pipe(
      catchError(error => {
        console.error('Error fetching cryptos:', error);
        return of([]);
      })
    );
  }

  getTopCryptos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/cryptos/top3`).pipe(
      catchError(error => {
        console.error('Error fetching top cryptos:', error);
        return of([]);
      })
    );
  }
}

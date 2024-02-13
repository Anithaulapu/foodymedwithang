import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  public apiUrl = 'http://localhost/foodymed_BE'; 

  post(endpoint: string, data: any): Observable<any> {
    const url = this.apiUrl + '/' + endpoint;
    return this.http.post(url, data);
  }
}

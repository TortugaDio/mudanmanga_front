import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginMudanscanlationService {

  private API_URL =environment.APIEndpoint; 
  constructor(private http: HttpClient) { }

  public login(user, pass): Observable<any> {
    return this.http.get(this.API_URL+'/users');
  }
}

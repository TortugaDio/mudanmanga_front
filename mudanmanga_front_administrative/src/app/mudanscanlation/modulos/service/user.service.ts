import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DtoUser } from '../domain/dto/DtoUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private API_URL = environment.APIEndpoint;
  constructor(private http: HttpClient) { }

  public registerUser(dto: DtoUser): Observable<any> {
    return this.http.post(this.API_URL + '/users', dto);
  }
}

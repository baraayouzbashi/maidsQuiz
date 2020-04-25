import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {API} from '../constants';
import {Observable} from 'rxjs';
import {UserResponse, UsersListResponse} from '../Interfaces';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private users = 'users';
  constructor(
    private http: HttpClient
  ) { }

  getUsersList = (page: number = 1 ): Observable<UsersListResponse> => {
    // pages are starting at index 1
    return this.http.get<UsersListResponse>(API + this.users, {
      params: new HttpParams().set('page', String(page))
    });
  }

  getUser = (id: string): Observable<UserResponse> => {
    return this.http.get<UserResponse>(API + this.users + '/'  + id );
  }


}

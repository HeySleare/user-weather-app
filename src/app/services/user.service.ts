import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RandomUserResponse } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  private apiUrl = 'https://randomuser.me/api/?results=10';
  constructor(private http: HttpClient) {}
  getUsers(): Observable<RandomUserResponse> {
    return this.http.get<RandomUserResponse>(this.apiUrl);
  }
}

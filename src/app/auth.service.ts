import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import {AuthData} from "./auth-data";
import {User} from "./user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;
  private baseUrl = 'http://127.0.0.1:8000';
  public token: string | null = null;

  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string): Observable<AuthData> {
    const url = `${this.baseUrl}/login/`;
    return this.http.post<AuthData>(url, { username: email, password });
  }


  logout() {
    this.token = null;
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
    this.loggedIn = false;
  }

  register(username: string, password: string, email: string, first_name: string, last_name: string) : Observable<any> {
    const url = `${this.baseUrl}/register`;
    return this.http.post(url, { username, email, password, first_name, last_name });
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  setToken(token: string): void {
    this.token = token;
    localStorage.setItem('token', token);
  }

  getToken(): string {
    const token = localStorage.getItem('token');
    return token !== null && token !== undefined ? token : '';
  }
}

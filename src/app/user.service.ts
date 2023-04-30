import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl: string = 'http://your-api-url.com/user';

  constructor(private http: HttpClient) { }

  getUserData(): Observable<User> {
    return this.http.get<User>(this.apiUrl);
  }

  deleteUser(): Observable<any> {
    return this.http.delete(this.apiUrl);
  }

  updateUserData(user: User): Observable<any> {
    return this.http.put(this.apiUrl, user);
  }
}

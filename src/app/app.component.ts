import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  constructor(private authService: AuthService) {}

  public get isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }
}

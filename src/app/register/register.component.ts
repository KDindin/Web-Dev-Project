import { Component } from '@angular/core';
import {AuthService} from "../auth.service";
import {dateTimestampProvider} from "rxjs/internal/scheduler/dateTimestampProvider";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registered: boolean = false;
  username: string = '';
  password: string = '';
  email: string = '';
  first_name: string = '';
  last_name: string = '';

  constructor(private authService: AuthService) {
  }

  register(){
    return this.authService.register(this.username, this.password, this.email, this.first_name, this.last_name).subscribe((data) =>{
      this.registered = true;
      this.username = data.username;
      this.password = data.password;
      this.email = data.email;
      this.first_name = data.first_name;
      this.last_name = data.last_name;
    });
  }

}

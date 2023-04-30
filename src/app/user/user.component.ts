import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user!: User;
  isEditing: boolean = false;
  errorMessage!: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData(): void {
    this.userService.getUserData().subscribe(
      (user: User) => {
        this.user = user;
      },
      (error: any) => {
        this.errorMessage = error.message;
      }
    );
  }

  deleteUser(): void {
    if (confirm("Are you sure you want to delete your account?")) {
      this.userService.deleteUser().subscribe(
        (response: any) => {
          // redirect to login page or do any other actions
        },
        (error: any) => {
          this.errorMessage = error.message;
        }
      );
    }
  }

  saveChanges(): void {
    this.userService.updateUserData(this.user).subscribe(
      (response: any) => {
        this.isEditing = false;
      },
      (error: any) => {
        this.errorMessage = error.message;
      }
    );
  }

  toggleEdit(): void {
    this.isEditing = !this.isEditing;
  }

  logout(): void {
    // call logout function from auth service or redirect to login page
  }
}

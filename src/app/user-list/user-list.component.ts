import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

//import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from "../filter.pipe";
@Component({
  selector: 'app-user-list',
  imports: [FormsModule, CommonModule, FilterPipe],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
  //providers: [UserService]  // injecting UserService to the component for accessing the data.  // HttpClientModule is used for making HTTP requests.  // FilterPipe is used for filtering the users based on the searchText.  // FormsModule and CommonModule are used for form controls and form validation.   // UserService is a service which provides methods to get users data.  // In this component, we subscribe to the getUsers method of the UserService to get the data and store it in the
})

export class UserListComponent implements OnInit  {
  users: any[] = [];
  searchText = '';
  constructor(private userService?: UserService) {}
  ngOnInit() {
    this.userService?.getUsers().subscribe(data => this.users = data);
    this.users.push({
      name: 'Arnold NG',
      phone: '1234567890',
      email: 'Q2l3V@example.com',
      website:' itc innovation.com',
    })
  }
}

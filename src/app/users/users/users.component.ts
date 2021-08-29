import { Component, OnInit } from '@angular/core';
import {User} from "../../models/User";
import {UserServiceService} from "../../services/user-service/user-service.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  _users: User[] = [];
  _usersSearch: User[] = [];
  inputValue = '';

  constructor(public userService: UserServiceService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  /**
   * Method to get all the users and put them into arrays
   */
  private getUsers() {
    this.userService.getUsers()
      .subscribe(users => {
        this._users = users;
        this._usersSearch = users;
      });
  }

  /**
   * Method to search an User in an input
   */
  searchInput() {
    this._usersSearch = [];
    for (let user of this._users) {
      if (user.name.toUpperCase().includes(this.inputValue.toUpperCase())){
        this._usersSearch.push(user)
      }
    }
  }

}

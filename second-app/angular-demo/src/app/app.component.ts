import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/user';
import { UserService } from './user.service';
import {of} from 'rxjs'
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  users: IUser[] | undefined;
  constructor(public userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers()
  }

  loadUsers() {
    this.users = undefined;
    console.log(this.users)
    console.log("????????///")
    this.userService.loadUsers().subscribe(users => this.users = users)
  }

  reloadButtonHandler() {
    this.loadUsers();
  }
}

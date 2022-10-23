import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IUser } from '../interfaces/user';

@Component({
  selector: 'app-user-list-items',
  templateUrl: './user-list-items.component.html',
  styleUrls: ['./user-list-items.component.scss'],
})
export class UserListItemsComponent implements OnInit {

  @Input( ) user: IUser | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}

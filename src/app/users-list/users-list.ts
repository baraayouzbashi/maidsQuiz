import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'users-list',
  templateUrl: './users-list.html',
  styleUrls: ['./users-list.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

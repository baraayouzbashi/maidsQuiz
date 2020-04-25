import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpService} from '../services/http.service';
import {Observable} from 'rxjs';
import {UsersListResponse} from '../Interfaces';

@Component({
  selector: 'users-list',
  templateUrl: './users-list.html',
  styleUrls: ['./users-list.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListComponent implements OnInit {

  constructor(
    private router: Router,
    private httpService: HttpService
  ) { }

  value = '';
  data$: Observable<UsersListResponse>;


  ngOnInit() {
    this.data$ = this.httpService.getUsersList();
  }

  goToUser = ({id}) => {
    this.router.navigate(['user', id]);
  };

  updatePage = ({pageIndex}) => {
    this.data$ = this.httpService.getUsersList(pageIndex + 1);
  };
}

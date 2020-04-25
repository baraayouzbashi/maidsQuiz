import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpService} from '../services/http.service';
import {Observable} from 'rxjs';
import {UserResponse, UsersListResponse} from '../Interfaces';
import {FormControl} from '@angular/forms';
import {debounceTime, finalize, startWith, switchMap, tap} from 'rxjs/operators';

@Component({
  selector: 'users-list',
  templateUrl: './users-list.html',
  styleUrls: ['./users-list.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListComponent implements OnInit {

  constructor(
    private router: Router,
    private httpService: HttpService,
    private cd: ChangeDetectorRef
  ) { }

  loading = false;
  data$: Observable<UsersListResponse>;

  searchInput = new FormControl();
  filteredUser: Observable<UserResponse>;

  ngOnInit() {
    this.data$ = this.httpService.getUsersList();
    this.filteredUser = this.searchInput.valueChanges
      .pipe(
        debounceTime(500),
        startWith(''),
        tap(() => {
          this.loading = true;
          this.cd.detectChanges();
        }),
        switchMap(value => this.httpService.getUser(value).pipe(
          finalize(() => {
            this.loading = false;
            this.cd.detectChanges();
          })
          )
        ),
      );
  }

  goToUser = ({id}) => {
    this.router.navigate(['user', id]);
  };

  updatePage = ({pageIndex}) => {
    this.data$ = this.httpService.getUsersList(pageIndex + 1);
  };
}

import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Location} from '@angular/common';
import {HttpService} from '../services/http.service';
import {Observable} from 'rxjs';
import {UserResponse} from '../Interfaces';

@Component({
  selector: 'user-details',
  templateUrl: './user-details.html',
  styleUrls: ['./user-details.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private httpService: HttpService
  ) { }

  id;
  data$: Observable<UserResponse>;

  ngOnInit() {
    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        const id = params.get('id');
        this.id = id;
        this.data$ = this.httpService.getUser(id);
      }
    );
  }

  goBack = () => {
    this.location.back();
  }

}

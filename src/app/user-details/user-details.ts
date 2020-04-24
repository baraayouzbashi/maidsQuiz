import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'user-details',
  templateUrl: './user-details.html',
  styleUrls: ['./user-details.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) { }

  id;
  avatar = 'https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg';
  first_name = 'john';
  last_name = 'smith';
  email = 'some@one.com';
  ngOnInit() {
    this.route.paramMap.subscribe(
    (params: ParamMap) => {
       this.id = params.get('id');
    }
  );
  }

  goBack = () => {
    this.location.back();
  }

}

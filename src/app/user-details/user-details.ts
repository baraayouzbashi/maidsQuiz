import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'user-details',
  templateUrl: './user-details.html',
  styleUrls: ['./user-details.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }

  id;
  ngOnInit() {
    this.route.paramMap.subscribe(
    (params: ParamMap) => {
       this.id = params.get('id');
    }
  );
  }

}

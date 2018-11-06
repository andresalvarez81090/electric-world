import { Component, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

import { Festival } from './festival.component';
import { FestivalService } from '../services/festival.service';

@Component({
  templateUrl: 'app/templates/festival-detail.html',
})
export class FestivalDetailComponent implements OnInit {
  festival: Festival;

  constructor(
    private festivalService: FestivalService,
    private routeParams: RouteParams) {
  }

  ngOnInit() {
    let id = +this.routeParams.get('id');
    this.festivalService.getFestival(id.toString())
      .then(festival => this.festival = festival);
  }

  goBack() {
    window.history.back();
  }
}

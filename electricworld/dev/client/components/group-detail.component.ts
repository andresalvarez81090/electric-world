import { Component, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

import { Group } from './group.component';
import { GroupService } from '../services/group.service';

@Component({
  templateUrl: 'app/templates/group-detail.html',
})
export class GroupDetailComponent implements OnInit {
  group: Group;

  constructor(
    private groupService: GroupService,
    private routeParams: RouteParams) {
  }

  ngOnInit() {
    let id = +this.routeParams.get('id');
    this.groupService.getGroup(id.toString())
      .then(group => this.group = group);
  }

  goBack() {
    window.history.back();
  }
}

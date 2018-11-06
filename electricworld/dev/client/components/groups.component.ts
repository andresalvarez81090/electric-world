import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { Group } from './group.component';
import { GroupDetailComponent } from './group-detail.component';
import { GroupService } from '../services/group.service';


@Component({
	templateUrl: 'app/templates/groups.html',
	directives: [GroupDetailComponent]
})

export class GroupsComponent implements OnInit {
	groups: Group[];
	selectedGroup: Group;

	constructor(
		private router: Router,
		private groupService: GroupService) {}

	getGroups() {
		this.groupService.getGroups().then(groups => this.groups = groups);
	}

	ngOnInit() {
		this.getGroups();
	}

	onSelect(group: Group) { this.selectedGroup = group; }

	gotoDetail() {
		this.router.navigate(['GroupDetail', { id: this.selectedGroup.id }]);
	}
}
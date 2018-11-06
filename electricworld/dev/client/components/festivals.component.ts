import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { Festival } from './festival.component';
import { FestivalDetailComponent } from './festival-detail.component';
import { FestivalService } from '../services/festival.service';


@Component({
	templateUrl: 'app/templates/festivals.html',
	directives: [FestivalDetailComponent]
})

export class FestivalsComponent implements OnInit {
	festivals: Festival[];
	selectedFestival: Festival;

	constructor(
		private router: Router,
		private festivalService: FestivalService) {}

	getFestivals() {
		this.festivalService.getFestivals().then(festivals => this.festivals = festivals);
	}

	ngOnInit() {
		this.getFestivals();
	}

	onSelect(festival: Festival) { this.selectedFestival = festival; }

	gotoDetail() {
		this.router.navigate(['FestivalDetail', { id: this.selectedFestival.id }]);
	}
}
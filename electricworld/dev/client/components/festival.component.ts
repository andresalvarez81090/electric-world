import {Component} from '@angular/core';

interface Image {
	url: string;
}

interface Location {
	city: string;
	country: string;
}

@Component({

})

export class Festival {
	id: string;
  	name: string;
  	location: Location;
  	image: Image;
  	catagory: string;
  	startAt: Date;


	constructor (id: string, name: string, city: string, country: string, url: string, catagory: string, startAt: string){
		this.id = id;
		this.name = name;
		this.location = {city: city, country: country};
		this.image = {url: url};
		this.catagory = catagory;
		this.startAt = new Date(startAt);
	}
	
}

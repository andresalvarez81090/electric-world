import {Component} from '@angular/core';

@Component({

})

export class Group {
	id: string;
  	name: string;

	constructor (id: string, name: string){
		this.id = id;
		this.name = name;
	}
	
}

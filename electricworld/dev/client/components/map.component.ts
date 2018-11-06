import {Component, AfterViewInit} from '@angular/core';
import {StateService} from '../services/state.service';


declare let L: any;

@Component({
    selector: 'map',
    templateUrl: 'app/templates/map.html'
})

export class MapComponent implements  AfterViewInit {
    
    map: any;
    
    constructor(private _StateService: StateService) {

    }

    ngAfterViewInit(){

        // set up the map
        this.map = new L.map('map-container');
        
        // create the tile layer with correct attribution
        var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
        var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
        var osm = new L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 12, attribution: osmAttrib});
        
        // start the map in South-East England
        this.map.setView(new L.LatLng(51.3, 0.7),9);
        this.map.addLayer(osm);
        
    }
 
}
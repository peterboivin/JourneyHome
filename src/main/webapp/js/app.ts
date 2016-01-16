import {
  Component, 
  provide
} from 'angular2/core';

import {
  CORE_DIRECTIVES
} from 'angular2/common';

import {bootstrap} from 'angular2/platform/browser';

import {
  MapsAPILoader,
  NoOpMapsAPILoader,
  MapMouseEvent,
  ANGULAR2_GOOGLE_MAPS_PROVIDERS,
  ANGULAR2_GOOGLE_MAPS_DIRECTIVES
} from 'angular2-google-maps/core';

@Component({
  selector: 'app',
  directives: [ANGULAR2_GOOGLE_MAPS_DIRECTIVES],
  template: `
    <sebm-google-map
      [latitude]="lat"
      [longitude]="lng"
      [zoom]="zoom"
      (mapClick)="mapClicked($event)">

      <sebm-google-map-marker
        *ngFor="#m of markers"
        (markerClick)="clickedMarker(m.label)"
        [latitude]="m.lat"
        [longitude]="m.lng"
        [label]="m.label"></sebm-google-map-marker>

    </sebm-google-map>
`})
export class App {
  // google maps zoom level
  zoom: number = 8;
  
  // initial center position for the map
  lat: number = 51.673858;
  lng: number = 7.815982;
  
  clickedMarker(label: string) {
    window.alert(`clicked the marker: ${label || ''}`)
  }
  
  mapClicked($event: MapMouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng
    });
  }
  
  markers: marker[] = [
	  {
		  lat: 51.673858,
		  lng: 7.815982,
		  label: 'A'
	  },
	  {
		  lat: 51.373858,
		  lng: 7.215982,
		  label: 'B'
	  },
	  {
		  lat: 51.723858,
		  lng: 7.895982,
		  label: 'C'
	  }
  ]
}
// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
}

// ANGULAR2_GOOGLE_MAPS_PROVIDERS is required here
bootstrap(App, [
  ANGULAR2_GOOGLE_MAPS_PROVIDERS,
  // If you don't want to let angular2-google-maps load the Google Maps API script,
  // you can use the NoOpMapsAPILoader like this:
  // provide(MapsAPILoader, {useClass: NoOpMapsAPILoader})
])
  .catch(err => console.error(err));

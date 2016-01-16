var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('angular2/core');
var browser_1 = require('angular2/platform/browser');
var core_2 = require('angular2-google-maps/core');
var App = (function () {
    function App() {
        // google maps zoom level
        this.zoom = 8;
        // initial center position for the map
        this.lat = 51.673858;
        this.lng = 7.815982;
        this.markers = [
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
        ];
    }
    App.prototype.clickedMarker = function (label) {
        window.alert("clicked the marker: " + (label || ''));
    };
    App.prototype.mapClicked = function ($event) {
        this.markers.push({
            lat: $event.coords.lat,
            lng: $event.coords.lng
        });
    };
    App = __decorate([
        core_1.Component({
            selector: 'app',
            directives: [core_2.ANGULAR2_GOOGLE_MAPS_DIRECTIVES],
            template: "\n    <sebm-google-map\n      [latitude]=\"lat\"\n      [longitude]=\"lng\"\n      [zoom]=\"zoom\"\n      (mapClick)=\"mapClicked($event)\">\n\n      <sebm-google-map-marker\n        *ngFor=\"#m of markers\"\n        (markerClick)=\"clickedMarker(m.label)\"\n        [latitude]=\"m.lat\"\n        [longitude]=\"m.lng\"\n        [label]=\"m.label\"></sebm-google-map-marker>\n\n    </sebm-google-map>\n" })
    ], App);
    return App;
})();
exports.App = App;
// ANGULAR2_GOOGLE_MAPS_PROVIDERS is required here
browser_1.bootstrap(App, [
    core_2.ANGULAR2_GOOGLE_MAPS_PROVIDERS,
])
    .catch(function (err) { return console.error(err); });
//# sourceMappingURL=app.js.map
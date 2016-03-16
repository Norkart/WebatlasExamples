var L = require('leaflet');

var TileLayer = require('leaflet-webatlastile').WebatlasTileLayer;
var tileLayer = require('leaflet-webatlastile').webatlasTileLayer;

var map = L.map('map').setView([63.505, 10.09], 13);

var apikey = 'apikey';
var l = new tileLayer({
    mapType: TileLayer.Type.VECTOR,
    apikey: apikey
}).addTo(map);
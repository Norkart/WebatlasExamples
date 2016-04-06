var map = L.map('map').setView([63.505, 10.09], 13);

var apikey = 'apikey'; //This needs to be replaced with your API key!

var l = new L.TileLayer.Webatlas({
    mapType: L.TileLayer.Webatlas.Type.VECTOR,
    apikey: apikey
}).addTo(map);
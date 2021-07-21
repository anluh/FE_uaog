import mapStyles from './mapStyles.js';
const $ = require('jquery');
const locations = [
    ['Будівельників 11', 50.749033, 25.33373]
    ['Набережна 4', 50.745051, 25.315766],
    ];
const locationButtons = $('.js-location-button');

const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: new google.maps.LatLng(
        parseFloat(locationButtons[0].getAttribute('data-lat')), 
        parseFloat(locationButtons[0].getAttribute('data-lng'))),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: mapStyles
});


const infowindow = new google.maps.InfoWindow();
let marker, i;

for (i = 0; i < locationButtons.length; i++) {  
    marker = new google.maps.Marker({
        position: new google.maps.LatLng(
            parseFloat(locationButtons[i].getAttribute('data-lat')), 
            parseFloat(locationButtons[i].getAttribute('data-lng'))),
        map: map,
        icon: '../img/marker.svg'
    });

    google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
        infowindow.setContent(locationButtons[i].getAttribute('data-address'));
        infowindow.open(map, marker);
        }
    })(marker, i));
}

locationButtons.on('click', (e) => {
    map.setCenter(new google.maps.LatLng(
        parseFloat(e.target.getAttribute('data-lat')), 
        parseFloat(e.target.getAttribute('data-lng'))));
    locationButtons.removeClass('locations_button--active');
    $(e.target).addClass('locations_button--active');
})
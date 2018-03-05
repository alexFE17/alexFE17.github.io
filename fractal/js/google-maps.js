$(document).ready(function(){
    google.maps.event.addDomListener(window, 'load', init);

    function init() {
        var mapOptions = {
            zoom: 13,
            center: new google.maps.LatLng(52.148170, 4.487983)
        };

        var mapElement = document.getElementById('map');
        var map = new google.maps.Map(mapElement, mapOptions);
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(52.148170, 4.487983),
            map: map,
            title: 'Fox Chapel Executive Suites'
        });
    }
});

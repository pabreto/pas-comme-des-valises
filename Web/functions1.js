function initMap() {
 
   var map = new google.maps.Map(document.getElementById('map'), {
	zoom: 7,
    center: {lat: 41.591158, lng: 1.520862},
	 /*   center: {lat: 46.227638, lng: 2.213749}  /*France
	 center: {lat: 40.463667, lng: -3.74922} /* España
    center: {lat: 41.591158, lng: 1.520862} zoom: 7/* Catalunya */
  });
  
    // Instantiate a directions service.
    directionsService = new google.maps.DirectionsService,
    directionsDisplay = new google.maps.DirectionsRenderer({
      map: map
    })
  var departure = /** @type {!HTMLInputElement} */(
      document.getElementById('departure'));
	  
  var arrival = /** @type {!HTMLInputElement} */(
     document.getElementById('arrival'));
	  
 /* var types = document.getElementById('type-selector');*/
  var autocomplete = new google.maps.places.Autocomplete(departure);
  
  autocomplete.bindTo('bounds', map);
 
  var autocomplete_arrival = new google.maps.places.Autocomplete(arrival);
  autocomplete.bindTo('bounds', map);

  var infowindow = new google.maps.InfoWindow();
  var marker = new google.maps.Marker({
    map: map,
    anchorPoint: new google.maps.Point(0, -29)
  });
  
  var marker_arrival = new google.maps.Marker({
    map: map,
    anchorPoint: new google.maps.Point(0, -29)
  });

  autocomplete.addListener('place_changed', function() {
    infowindow.close(); 
    marker.setVisible(false);
    var place = autocomplete.getPlace();
    if (!place.geometry) {
      window.alert("Autocomplete's returned place contains no geometry");
      return;
    }

    // If the place has a geometry, then present it on a map.
    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
    } else {
      map.setCenter(place.geometry.location);
      map.setZoom(17);  // Why 17? Because it looks good.
    }
    marker.setIcon(/** @type {google.maps.Icon} */({
      url: place.icon,
      size: new google.maps.Size(71, 71),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(17, 34),
      scaledSize: new google.maps.Size(35, 35)
    }));
    marker.setPosition(place.geometry.location);
    marker.setVisible(true);

    var address = '';
    if (place.address_components) {
      address = [
        (place.address_components[0] && place.address_components[0].short_name || ''),
 //       (place.address_components[1] && place.address_components[1].short_name || ''),
 //       (place.address_components[2] && place.address_components[2].short_name || '')
      ].join(' ');
    }

 
 infowindow.setContent('<div><strong>' + place.name );
// infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + address);
   infowindow.open(map, marker); 
	
  });
   autocomplete_arrival.addListener('place_changed', function() {
   // infowindow.close(); 
    marker_arrival.setVisible(false);
    var place = autocomplete_arrival.getPlace();
    if (!place.geometry) {
      window.alert("Autocomplete's returned place contains no geometry");
      return;
    }

    // If the place has a geometry, then present it on a map.
    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
    } else {
      map.setCenter(place.geometry.location);
      map.setZoom(17);  // Why 17? Because it looks good.
    }
    marker_arrival.setIcon(/** @type {google.maps.Icon} */({
      url: place.icon,
      size: new google.maps.Size(71, 71),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(17, 34),
      scaledSize: new google.maps.Size(35, 35)
    }));
    marker_arrival.setPosition(place.geometry.location);
    marker_arrival.setVisible(true);

    var address_arrival = '';
    if (place.address_arrival_components) {
      address_arrival = [
        (place.address_arrival_components[0] && place.address_arrival_components[0].short_name || ''),
 //       (place.address_components[1] && place.address_components[1].short_name || ''),
 //       (place.address_components[2] && place.address_components[2].short_name || '')
      ].join(' ');
    }

 
 infowindow.setContent('<div><strong>' + place.name );
// infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + address);
   infowindow.open(map, marker_arrival); 
	
  });
 
  calculateAndDisplayRoute(directionsService, directionsDisplay, autocomplete, autocomplete_arrival);

 
}
 function calculateAndDisplayRoute(directionsService, directionsDisplay, autocomplete, autocomplete_arrival) {

  //function calculateAndDisplayRoute(directionsService, directionsDisplay, pointA, pointB) {
  directionsService.route({
    origin: autocomplete,
    destination: autocomplete_arrival,
	//origin: pointA,
    //destination: pointB,
    travelMode: google.maps.TravelMode.DRIVING
  }, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
    } else {
      window.alert('Directions request failed due to ' + status);
    }
  });
}
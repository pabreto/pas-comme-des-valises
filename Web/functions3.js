function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
	zoom: 7,
    center: {lat: 41.591158, lng: 1.520862},
	 /*   center: {lat: 46.227638, lng: 2.213749}  /*France
	 center: {lat: 40.463667, lng: -3.74922} /* España
    center: {lat: 41.591158, lng: 1.520862} zoom: 7/* Catalunya */
  
  
    // Instantiate a directions service.
    directionsService = new google.maps.DirectionsService,
    directionsDisplay = new google.maps.DirectionsRenderer({
      map: map
    }),
	});
	
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
  var marker_departure = new google.maps.Marker({
    map: map,
//    anchorPoint: new google.maps.Point(0, -29),
	position: autocomplete_departure
  });

  var marker_arrival = new google.maps.Marker({
    map: map,
   // anchorPoint: new google.maps.Point(0, -29),
	position: autocomplete_arrival
  });
  

  calculateAndDisplayRoute(directionsService, directionsDisplay, autocomplete, autocomplete_arrival);
  
  // Sets a listener on a radio button to change the filter type on Places
  // Autocomplete.
/*  function setupClickListener(id, types) {
    var radioButton = document.getElementById(id);
    radioButton.addEventListener('click', function() {
      autocomplete.setTypes(types);
    });
  }
*/
/*  setupClickListener('changetype-all', []);
*/
/*  setupClickListener('changetype-address', ['address']);*/
/*  setupClickListener('changetype-establishment', ['establishment']);
  setupClickListener('changetype-geocode', ['geocode']);
*/
}

  function calculateAndDisplayRoute(directionsService, directionsDisplay, autocomplete, autocomplete_arrival) {
  directionsService.route({
    origin: departure,
    destination: arrival,
    travelMode: google.maps.TravelMode.DRIVING
  }, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
    } else {
      window.alert('Directions request failed due to ' + status);
    }
  });
}
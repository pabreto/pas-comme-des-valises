function initMap() {
	
    if( language == "french" ){
		var center = {lat: 46.227638, lng: 2.213749};
		var zoom = 6;
	}
	else if ( language == "spanish" ){
		var center = {lat: 39.263667, lng: -3.74922};
		var zoom = 6;
	}
	else if ( language == "catalan" ){
		var center = {lat: 41.591158, lng: 1.520862};
		var zoom = 7;
	}
	else if ( language == "english" ){
		var center = {lat: 41.591158, lng: 1.520862};
		var zoom = 7;
	}
	   
   var map = new google.maps.Map(document.getElementById('map'), {
	zoom: zoom,
    center: center,
  });
	
  var departure = /** @type {!HTMLInputElement} */(
      document.getElementById('departure'));
	  
  var arrival = /** @type {!HTMLInputElement} */(
     document.getElementById('arrival'));
	  
  var autocomplete = new google.maps.places.Autocomplete(departure);
  autocomplete.bindTo('bounds', map);
 
  var autocomplete_arrival = new google.maps.places.Autocomplete(arrival);
//  var new_bounds = bounds.extend(marker_arrival.position);
 // autocomplete.bindTo('bounds', map);
 
		
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
	
 //   bounds.extend(marker.location) ;
//	map.fitBounds(bounds) ; 
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
    infowindow.close(); 
    marker_arrival.setVisible(false);
    var place = autocomplete_arrival.getPlace();
	var place2 = autocomplete.getPlace();

    if (!place.geometry) {
      window.alert("Autocomplete's returned place contains no geometry");
      return;
    }
/*
    // If the place has a geometry, then present it on a map.
    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
    } else {
      map.setCenter(place.geometry.location);
      map.setZoom(17);  // Why 17? Because it looks good.
    }
 */
// marker_arrival.setIcon(/** @type {google.maps.Icon} */({
/*
      url: place.icon,
      size: new google.maps.Size(71, 71),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(17, 34),
      scaledSize: new google.maps.Size(35, 35)
    }));
    marker_arrival.setPosition(place.geometry.location);
    marker_arrival.setVisible(false);
*/ 
 var address_arrival = '';
    if (place.address_arrival_components) {
      address_arrival = [
        (place.address_arrival_components[0] && place.address_arrival_components[0].short_name || ''),
 //       (place.address_components[1] && place.address_components[1].short_name || ''),
 //       (place.address_components[2] && place.address_components[2].short_name || '')
      ].join(' ');
    }

 
     marker.setVisible(false);

        infowindow.setContent('<div><strong>' + place.name );
// infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + address);
 //       infowindow.open(map, marker_arrival); 
    	var directionsDisplay = new google.maps.DirectionsRenderer({
          map: map
        });

        // Set destination, origin and travel mode.
        var request = {
          destination: place.geometry.location,
          origin: place2.geometry.location,
          travelMode: 'DRIVING'
        };

        // Pass the directions request to the directions service.

        var DirectionsService = new google.maps.DirectionsService();
		
        DirectionsService.route(request, function(response, status) {
          if (status == 'OK') {
            // Display the route on the map.
            directionsDisplay.setDirections(response);
	//		directionsDisplay.setOptions( { suppressMarkers: true } );
          }
        });	
  }); 
 // loadXMLFile();
}
function loadXML(xmlFile) {
    // load xml file
    if (window.XMLHttpRequest) {
       xhttp = new XMLHttpRequest();
    } else {    // IE 5/6
       xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xhttp.open("GET", xmlFile, false);
    xhttp.send();
    xmlDoc = xhttp.responseXML; 

    var uurloon = xmlDoc.getElementsByTagName("row")[0].childNodes[0].textContent;
 //   var setloon = xmlDoc.getElementsByTagName("setloon")[0].childNodes[0].textContent;
    console.log(uurloon); //give me "10 100"
}


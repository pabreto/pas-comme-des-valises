
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
	zoom: 7,
	center: {lat: 41.591158, lng: 1.520862}
	 /*   center: {lat: 46.227638, lng: 2.213749}  /*France
	 center: {lat: 40.463667, lng: -3.74922} /* España
    center: {lat: 41.591158, lng: 1.520862} zoom: 7/* Catalunya */
  });
          new AutocompleteDirectionsHandler(map);

}
     function AutocompleteDirectionsHandler(map) {
        this.map = map;
        this.originPlaceId = null;
        this.destinationPlaceId = null;
        this.travelMode = 'WALKING';
        var originInput = document.getElementById('departure');
        var destinationInput = document.getElementById('arrival');
        var modeSelector = document.getElementById('mode-selector');
        this.directionsService = new google.maps.DirectionsService;
        this.directionsDisplay = new google.maps.DirectionsRenderer;
        this.directionsDisplay.setMap(map);

        var originAutocomplete = new google.maps.places.Autocomplete(
            originInput);
        var destinationAutocomplete = new google.maps.places.Autocomplete(
            destinationInput);

        this.setupClickListener('changemode-walking', 'WALKING');
        this.setupClickListener('changemode-transit', 'TRANSIT');
        this.setupClickListener('changemode-driving', 'DRIVING');

        this.setupPlaceChangedListener(originAutocomplete, 'ORIG');
        this.setupPlaceChangedListener(destinationAutocomplete, 'DEST');

 }

      AutocompleteDirectionsHandler.prototype.setupClickListener = function(id, mode) {
        var radioButton = document.getElementById(id);
        var me = this;
        radioButton.addEventListener('click', function() {
          me.travelMode = mode;
          me.route();
        });
      };

      AutocompleteDirectionsHandler.prototype.setupPlaceChangedListener = function(autocomplete, mode) {
        var me = this;
        autocomplete.bindTo('bounds', this.map);
        autocomplete.addListener('place_changed', function() {
          var place = autocomplete.getPlace();
          if (!place.place_id) {
            window.alert("Please select an option from the dropdown list.");
            return;
          }
          if (mode === 'ORIG') {
            me.originPlaceId = place.place_id;
          } else {
            me.destinationPlaceId = place.place_id;
          }
          me.route();
        });

      };

      AutocompleteDirectionsHandler.prototype.route = function() {
        if (!this.originPlaceId || !this.destinationPlaceId) {
          return;
        }
        var me = this;
		var waypoints = new Array();
			waypoints[0] = new google.maps.LatLng(41.591158,1.520862); 
			waypoints[1] = new google.maps.LatLng(46.227638,2.213749); 
        this.directionsService.route({
          origin: {'placeId': this.originPlaceId},
          destination: {'placeId': this.destinationPlaceId},
/*		  waypoints:  [{location:waypoints[0]},
		  {location:waypoints[1]}],
		  optimizeWaypoints: true,
*/
          travelMode: this.travelMode
        }, function(response, status) {
          if (status === 'OK') {
            me.directionsDisplay.setDirections(response);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });
      };



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

function loadXMLDoc() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
//  xmlhttp.open("GET", xml, true);
  xmlhttp.open("GET", "../Docs/whc-fr.xml", true);

  xmlhttp.send();
}

function myFunction(xml) {
//  var x, i, xmlDoc, txt;
  var lon_musee, lat_musee, i, xmlDoc, txt;
  xmlDoc = xml.responseXML;
  txt = "";

//  x = xmlDoc.getElementsByTagName("longitude");
  lat_musee = xmlDoc.getElementsByTagName("latitude");
  lon_musee = xmlDoc.getElementsByTagName("longitude");
//  for (i = 0; i< lon_musee.length; i++) {
  for (i = 0; 0; i++) {
//	  txt += lat_musee[i].childNodes[0].nodeValue + "<br>"+ lat_musee[i].childNodes[0].nodeValue;
//      latLng = new google.maps.LatLng(lat_musee[i],lon_musee[i]);
//      latLng = new google.maps.LatLng(41.591158,1.520862);
	  var myLatLng = {lat: -25.363, lng: 131.044};

      marker = new google.maps.Marker({
//           position: latLng,
           position: myLatLng,
            setMap: map
          });  
 }
//  document.getElementById("demo").innerHTML = txt;
}


 //     
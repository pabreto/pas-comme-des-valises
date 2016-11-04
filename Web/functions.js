
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: {lat: -34.397, lng: 150.644}
  });
  var geocoder = new google.maps.Geocoder();

  document.getElementById('submit').addEventListener('click', function() {
    geocodeAddress(geocoder, map);
  });
}

function geocodeAddress(geocoder, resultsMap) {
  var address = document.getElementById('address').value;
  geocoder.geocode({'address': address}, function(results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
      resultsMap.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
        map: resultsMap,
        position: results[0].geometry.location
      });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}

	function dst(a,b){
		return dst
	}
	
	function  search_sites_in_circle(departure,arrival,interest){
		nb_sites=0
		for (site in interest_category){
			if (site in circle){ add site to selected_sites; nb_sites++ }
		}
	}

	function generate_sites_combinations(selected_sites,nb_stops){
		return "k nb_stops-uples of sites"
	}

	function generate_route(departure,arrival,list_nb_stops-uples){
		for ( array in list_nb_stops-uples ){
			if (length(route(array))<length(route(departure,arrival))+detour){
				return array
			}
		}
	}



	
	
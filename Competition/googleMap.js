var myLatlng = new google.maps.LatLng(42.3584,-71.091);

var map;
var markers = [];
function initialize() {
	var mapOptions = {
		center: myLatlng,
		zoom: 14
	};
	map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
	// To add the marker to the map, use the 'map' property
	markers = new google.maps.Marker({
	    position: myLatlng,
	    map: map,
	    animation: google.maps.Animation.DROP,
	    title:"Hello World!"
	});

	google.maps.event.addListener(map, 'click', function(event) {
		if($(".addPin").attr("id") === "pinEnabled")
	    addMarker(event.latLng);
	});
}
	
// Add a marker to the map and push to the array.
function addMarker(location) {
  var marker = new google.maps.Marker({
    position: location,
    map: map,
    draggable: true
  });
}

function toggleBounce() {

  if (marker.getAnimation() != null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
};

google.maps.event.addDomListener(window, 'load', initialize);


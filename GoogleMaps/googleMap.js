var myLatlng = new google.maps.LatLng(42.3584,-71.091);

var marker;
function initialize() {
	var mapOptions = {
		center: myLatlng,
		zoom: 14
	};
	var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
	// To add the marker to the map, use the 'map' property
	marker = new google.maps.Marker({
	    position: myLatlng,
	    map: map,
	    animation: google.maps.Animation.DROP,
	    draggable: true,
	    title:"Hello World!"
	});

	google.maps.event.addListener(marker, 'click', toggleBounce);
}
	
	

function toggleBounce() {

  if (marker.getAnimation() != null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
};

google.maps.event.addDomListener(window, 'load', initialize);
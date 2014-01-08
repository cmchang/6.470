var myLatlng = new google.maps.LatLng(42.3584,-71.091);

function initialize() {
	var mapOptions = {
		center: myLatlng,
		zoom: 14
	};
		var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
		// To add the marker to the map, use the 'map' property
		var marker = new google.maps.Marker({
		    position: myLatlng,
		    map: map,
		    draggable: true,
		    title:"Hello World!"
		});
	}
	google.maps.event.addDomListener(window, 'load', initialize);

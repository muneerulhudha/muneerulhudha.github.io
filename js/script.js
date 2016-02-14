//setting height of image to fit inside the div.
$(function(){
  $('.homePage').css({ height: ($(window).innerHeight() - 100) });
  $(window).resize(function(){
    $('.homePage').css({ height: ($(window).innerHeight() - 100) });
  });
});

function getLocation() {
	var x = document.getElementById("demo");
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    
    var x = document.getElementById("demo");
    x.innerHTML="Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;	
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

function getName() {
	if (typeof(Storage) !== "undefined") {
    	// Store
    	localStorage.setItem("name", "Muneer Hudha");
    	// Retrieve
    	document.getElementById("result").innerHTML = localStorage.getItem("name");
	} else {
    	document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
	}
}
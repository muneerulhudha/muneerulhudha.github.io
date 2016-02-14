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
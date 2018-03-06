var apikey = "AIzaSyC3OCGB-0aKZqu3bwSBaHCmNnvakMGbZ3M"

// function to generate map and location in connect area

function initMap() {
    var uluru = {lat: 35.227165, lng: -80.846342};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 18,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }


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

// These three functions will point button click for rollovers to actual pages of companies 
  function gojoClick() {
    window.open('https://www.gojo.com/en');
  }

  function fifthClick() {
    window.open('https://www.53.com/content/fifth-third/en.html');
  }

  function chhnClick() {
    window.open('https://www.thechristhospital.com');
  }

// Lazy Load images to improve load time
  window.addEventListener('load', function(){
    var allimages= document.getElementsByTagName('img');
    for (var i=0; i<allimages.length; i++) {
        if (allimages[i].getAttribute('data-src')) {
            allimages[i].setAttribute('src', allimages[i].getAttribute('data-src'));
        }
    }
}, false)


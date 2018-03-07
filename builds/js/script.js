

// function to generate map and location in connect area

initMap =() => {
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


  gojoClick = () => {
    window.open('https://www.gojo.com/en');
  }

  fifthClick = () => {
    window.open('https://www.53.com/content/fifth-third/en.html');
  }

  chhnClick = () => {
    window.open('https://www.thechristhospital.com');
  }

  clear = () => {
   var clear = document.getElementById("fname")
    console.log(clear.nodeValue())
  }
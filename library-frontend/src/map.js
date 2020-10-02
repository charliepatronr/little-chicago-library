
const BASE_URL = "http://localhost:3000"
const BOOKS_URL = `${BASE_URL}/books`
const LIBRARIES_URL = `${BASE_URL}/libraries`


let map;
let libraryArr = []
let libObj = []
let obj
function initMap() {

    fetch(LIBRARIES_URL)
    .then(response => response.json())
    .then(response => { 
        libraryInfo(response)
    });

    var icon = {
        url: './assets/library_icon.png', // url
        scaledSize: new google.maps.Size(45, 75), // scaled size
        origin: new google.maps.Point(0,0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    };

    const libraryInfo = (libraries) => {
        let obj
        for(let element in libraries){
            const {id, lat, location, long, name} = libraries[element]
            obj = {
                id: id, 
                name: name,
                lat: lat, 
                long: long, 
                location: location,
                // img_url: img_url
            }
            libObj.push(obj)
        }
        for (let i = 0; i < libObj.length; ++i) {
            const marker = new google.maps.Marker({
              position: {
                lat: libObj[i].lat,
                lng: libObj[i].long,
              },
              map: map,
              libraryId: libObj[i].id,
              libraryName: libObj[i].name, 
              location: libObj[i].location, 
              animation: google.maps.Animation.DROP,
              icon: icon,
            //   imgUrl: libObj[i].img_url
            });
            addClickListeners(marker);
          }
    }

    map = new google.maps.Map(document.getElementById("map"), {
            center: {
                lat: 41.9764997,
                lng: -87.6679161
            },
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP, 
            styles: [
                {
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#f5f5f5"
                    }
                  ]
                },
                {
                  "elementType": "labels.icon",
                  "stylers": [
                    {
                      "visibility": "off"
                    }
                  ]
                },
                {
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#616161"
                    }
                  ]
                },
                {
                  "elementType": "labels.text.stroke",
                  "stylers": [
                    {
                      "color": "#f5f5f5"
                    }
                  ]
                },
                {
                  "featureType": "administrative.land_parcel",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#bdbdbd"
                    }
                  ]
                },
                {
                  "featureType": "poi",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#eeeeee"
                    }
                  ]
                },
                {
                  "featureType": "poi",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#757575"
                    }
                  ]
                },
                {
                  "featureType": "poi.business",
                  "stylers": [
                    {
                      "visibility": "off"
                    }
                  ]
                },
                {
                  "featureType": "poi.park",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#e5e5e5"
                    }
                  ]
                },
                {
                  "featureType": "poi.park",
                  "elementType": "labels.text",
                  "stylers": [
                    {
                      "visibility": "off"
                    }
                  ]
                },
                {
                  "featureType": "poi.park",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#9e9e9e"
                    }
                  ]
                },
                {
                  "featureType": "road",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#ffffff"
                    }
                  ]
                },
                {
                  "featureType": "road.arterial",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#757575"
                    }
                  ]
                },
                {
                  "featureType": "road.highway",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#dadada"
                    }
                  ]
                },
                {
                  "featureType": "road.highway",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#616161"
                    }
                  ]
                },
                {
                  "featureType": "road.local",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#9e9e9e"
                    }
                  ]
                },
                {
                  "featureType": "transit.line",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#e5e5e5"
                    }
                  ]
                },
                {
                  "featureType": "transit.station",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#eeeeee"
                    }
                  ]
                },
                {
                  "featureType": "water",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#c9c9c9"
                    }
                  ]
                },
                {
                  "featureType": "water",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#9e9e9e"
                    }
                  ]
                }
            ]
    });


 

  function addClickListeners(marker){
      
    const infowindow = new google.maps.InfoWindow({
        content: `<b>Little Library name:</b> ${marker.libraryName}<br><br>
        <b>Location:</b> ${marker.location}` 
        ,
      });
      
      marker.addListener("click", () => {
        infowindow.open(marker.get("map"), marker);
      })
      marker.addListener('dblclick', ()=>{
        googleMapsRendering(marker.libraryId)
      });
  }


}

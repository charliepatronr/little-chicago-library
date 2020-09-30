
const BASE_URL = "http://localhost:3000"
const BOOKS_URL = `${BASE_URL}/books`
const LIBRARIES_URL = `${BASE_URL}/libraries`


let map;
let librariesInfo;
function initMap() {
    

    fetch(LIBRARIES_URL)
    .then(response => response.json())
    .then(response => { 
        mapMarker(response)
        // Object.assign(librariesInfo, response)
        // librariesInfo = [...response]
        librariesInfo = JSON.stringify(response)
    });

    const mapMarker = () => {
        
    }

    console.log(librariesInfo)
    for(let element in librariesInfo){
        console.log(element)
    }


    const libraries = [{lat:41.96819 , long:-87.67666 }, {lat:41.97013 , long:-87.67136}, {lat:41.97587 , long:-87.67134}, {lat:41.98189 , long:-87.67109}, {lat:41.979329 , long:-87.66644
    }, {lat:41.97776 , long:-87.66443}, {lat:41.97721 , long:-87.6639}, {lat:41.97602 , long:-87.65759}]

    map = new google.maps.Map(document.getElementById("map"), {
            center: {
                lat: 41.9764997,
                lng: -87.6679161
            },
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
    });


  for (let i = 0; i < libraries.length; ++i) {
    const marker = new google.maps.Marker({
      position: {
        lat: libraries[i].lat,
        lng: libraries[i].long,
      },
      map: map,
      library_id: 1
    });
    addClickListeners(marker);
  }

  function addClickListeners(marker){
      
    const infowindow = new google.maps.InfoWindow({
        content: 'secretMessage',
      });
      marker.addListener("click", () => {
        infowindow.open(marker.get("map"), marker);
      })
      marker.addListener('dblclick', ()=>{
          console.log(marker.library_id)
      });
  }


}

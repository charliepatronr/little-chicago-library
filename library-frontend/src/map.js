
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
              location: libObj[i].location
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
            mapTypeId: google.maps.MapTypeId.ROADMAP
    });


 

  function addClickListeners(marker){
      
    const infowindow = new google.maps.InfoWindow({
        content: `Little Library name: ${marker.libraryName}
        Location: ${marker.location}` 
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

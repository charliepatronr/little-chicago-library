const BASE_URL = "http://localhost:3000"
const BOOKS_URL = `${BASE_URL}/books`
const LIBRARIES_URL = `${BASE_URL}/libraries`

const renderCatalog = () => {
    let mapToggle = true 
    let button = document.querySelector('#toggle-map-catalog');
    let libraryCatalog = document.querySelector('#library-catalog')
    console.log(button)
    let mapContainer = document.querySelector('#map-container')
    button.addEventListener('click', () => {
        mapToggle = !mapToggle
        if (mapToggle){
            mapContainer.style.display = "block";
            libraryCatalog.style.display ='none'

        }
        else {
            mapContainer.style.display = "none";
            libraryCatalog.style.display ='block'
        }
    });
}

const main = () =>{
    renderCatalog()
}

main()
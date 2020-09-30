const BASE_URL = "http://localhost:3000"
const BOOKS_URL = `${BASE_URL}/books`
const LIBRARIES_URL = `${BASE_URL}/libraries`

// const main = () =>{
//     renderCatalog()
//     addClickListener()
// }

// const addClickListener = () => {
//   let myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
//     keyboard: false
//   })
//   const libraryCatalog = document.querySelector('#library-catalog')
//   libraryCatalog.addEventListener('click', e => {
//   console.log(e);
//   myModal.toggle()
//   })
// }

// const renderCatalog = () => {
//     let mapToggle = true 
//     let button = document.querySelector('#toggle-map-catalog');
//     let libraryCatalog = document.querySelector('#library-catalog')
//     let mapContainer = document.querySelector('#map-container')
//     button.addEventListener('click', () => {
//         mapToggle = !mapToggle
//         if (mapToggle){
//             mapContainer.style.display = "block";
//             libraryCatalog.style.display ='none'
//         }
//         else {
//             mapContainer.style.display = "none";
//             libraryCatalog.style.display ='block'
//         }
//     });
// }


// main()

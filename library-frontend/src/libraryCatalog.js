
const landingButtons = document.querySelector(".landing-page-buttons")
const allLibrariesCatalog = document.querySelector('.libraries-catalog')
const individuaLibraryCatalog = document.getElementById('main-individual-library')
const mapContainer = document.querySelector('#map-container')

// listeners 


const landingPageListeners = () => {
    landingButtons.addEventListener('click', (e)=> {
        //refactor to use include 
        if( e.target.className.split(' ')[3] ==='toggle-map-catalog'){
            mapContainer.style.display = "none";
            individuaLibraryCatalog.style.display ='none'
            allLibrariesCatalog.style.display = "block";
            fetchEntireCatalog()
            addModalListeners()
        }
        // else if (e.target.className ==='toggle-map-individual-library') {
        //     mapContainer.style.display = "none";
        //     allLibrariesCatalog.style.display = "none";
        //     individuaLibraryCatalog.style.display ='block'
        //     //have to put fetch library here because the library we are fetching is dependant on 
        //     //the library the user clicks which each time fetches a library with certain id
        //     // however this causes buttons and images console.log to increase every time
        //     fetchCatalogLibrary()
        // }
    });
}



const addListeners = () => {
    let container = document.getElementById('main-individual-library')
    container.addEventListener('click', (e) => {
        if(e.target.className == 'image-link'){
            productModal(e)
        }
        else if (e.target.className ==='library'){
            libraryInfo(e)
        }
        else if (e.target.className === 'toggle-map'){
            renderMap(e)
        }
        else if (e.target.className === 'donate-book'){
            donateBook(e)
        }
        else if (e.target.className === 'return-book'){
            returnBook(e)
        }
        else if (e.target.className === 'adopt-book'){
            adoptBook(e)
        }
        
    });
}

const addModalListeners = () => {
  let myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
    keyboard: false
  })
  const libraryCatalog = document.querySelector('#library-catalog')
  libraryCatalog.addEventListener('click', e => {
  console.log(e.target);
  myModal.toggle()
  })
}



//fetch requests

const fetchCatalogLibrary = (libraryId) => {
    fetch(LIBRARIES_URL+`/${libraryId}`)
    .then(response => response.json())
    .then(response => { 
        renderIndivCatalog(response);
        renderLibraryInfo(response);
        renderButtons(response)
        addListeners();
    });
}


const fetchEntireCatalog = () => {
    const bookCatalogRow = document.getElementById('book-catalog-row')
    fetch(LIBRARIES_URL)
    .then(response => response.json())
    .then(response => { 
        let bookCards = ''
        response.forEach(library => {
            library.books.forEach(book => {
                bookCards += 
                `<div class="col-6 col-sm-6 col-md-2">
                <!-- <a href=""> -->
                <div class="book-card" data-id= ${book.id}>
                  <div class="book-cover">
                    <img src='${book.img_url}' style='width: 152px'><img>
                  </div>
                  <div class="book-text-info">
                    <div class="author">
                     ${book.author}
                    </div>
                    <div class="title">
                      ${book.title}
                    </div>
                  </div>
                </div>
                <!-- </a> -->
              </div>`
            });
        })
        bookCatalogRow.innerHTML = bookCards
        // renderIndivCatalog(response);
        // addListeners();
    });
}



// FUNCTIONS


//rendering

const googleMapsRendering = (libraryId) => {
    mapContainer.style.display = "none";
    allLibrariesCatalog.style.display = "none";
    individuaLibraryCatalog.style.display ='block'
    fetchCatalogLibrary(libraryId)    

}
const renderLibraryInfo = (library) => {
    let libInfo = document.querySelector(".library-info-container")
    let libDiv =
    `<div class= "library-information" data-id= "${library.id}">
        <div class="library-name">
            <p> Name: ${library.name}</p>
        </div>
        <div class= "library-location">
            <p> Location: ${library.location}</p>
        </div>
        <div class= "library-num-of-books">
            <p>Number of Books: ${library.book_logs.length}</p>
        </div>
    </div>`
    libInfo.innerHTML = libDiv
}

const renderIndivCatalog = (library) => {
    let catalogContainer = document.getElementById('ind-book-catalog-row')
    console.log(catalogContainer)
    let catalog = ''
    library.books.forEach(book => {
        let bookLog = library.book_logs.find(element => element.book_id === book.id)
       catalog += `
    <div class="col-6 col-sm-6 col-md-2">
        <div class="book-card" data-id= ${book.id}>
            <div class="book-cover">
                <img src='${book.img_url}' class='image-link'style='width: 152px'><img>
            </div>
            <div class="book-text-info">
                <div class="author">
                    ${book.author}
                </div>
                <div class="title">
                    ${book.title}
                    ${bookLog.available}
                </div>
            </div>
        </div>
    </div>`
    });
    
    catalogContainer.innerHTML = catalog
    debugger
    console.log(catalogContainer)
}


const renderDonationForm = (e) => {

}

const renderButtons = (library) => {
    let buttonWrapper = document.querySelector(".button-wrapper")
    let buttons = 
    `<button class='donate-book' data-id=${library.id}>Donate</button>
    <button class='return-book' data-id=${library.id}>Return book</button>
    <button class='toggle-map'>Return to Map</button>`
    buttonWrapper.innerHTML = buttons
}

//NAVIGATION BETWEEN PAGES 


const productModal = (e) => {
    console.log(e.target)
}


const libraryInfo = (e) => {
    console.log(e.target)

}

const renderMap = (e) => {
    mapContainer.style.display = "block";
    landingButtons.style.display ='block'
    individuaLibraryCatalog.style.display ='none'
    allLibrariesCatalog.style.display = "none";
    console.log(e.target)

}





//book actions
// EVERY TIME I GO FROM THE MAP PAGE TO THE LIBRARY THE BUTTONS CONSOLE LOG MULTIPLIES WHY? IS IT BECAUSE OF EVENT LISTENERS???
const donateBook = (e) => {
    console.log(e.target, 'entered event')
    renderDonationForm();
}


const returnBook = (e) => {
    console.log(e.target, 'entered event')
}

const adoptBook = (e) => {
    console.log(e.target, 'entered event')
}
        


const main = () =>{
    landingPageListeners()
    fetchEntireCatalog()
    
}


main()
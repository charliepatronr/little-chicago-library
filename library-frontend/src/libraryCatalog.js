
const landingButtons = document.querySelector(".landing-page-buttons")
const allLibrariesCatalog = document.querySelector('.libraries-catalog')
const individuaLibraryCatalog = document.getElementById('main-individual-library')
const mapContainer = document.querySelector('#map-container')
const completelibraryCatalog = document.querySelector('#library-catalog')
let myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
    keyboard: false
    })
const modal = document.getElementById('modal-dialog')



// listeners 


const landingPageListeners = () => {
    landingButtons.addEventListener('click', (e)=> {
        //refactor to use include 
        if( e.target.className.split(' ')[3] ==='toggle-map-catalog'){
            mapContainer.style.display = "none";
            individuaLibraryCatalog.style.display ='none'
            allLibrariesCatalog.style.display = "block";
            fetchEntireCatalog()
            completelibraryListeners()
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
            renderDonationForm(e)
        }
        else if (e.target.className === 'return-book'){
            returnBook(e)
        }
        else if (e.target.className === 'adopt-book'){
            adoptBook(e)
        }
        else if (e.target.className === 'adopt-book'){
            adoptBook(e)
        }
        
    });
}

const completelibraryListeners = () => {
  completelibraryCatalog.addEventListener('click', e => {
    if(e.target.className === 'image-link'){
        productModal(e)
    }
  });
}

const modalListeners = () => {

    modal.addEventListener('click', (e) =>{
        if (e.target.className.includes('check-out-book') ){
            checkOutBook(e)
        }
        else if (e.target.className.includes('adopt-book') ){
            adoptBook(e)
        }
        else if (e.target.className.includes('edit-book') ){
            editBook(e)
        }
    });
}



//fetch requests

const fetchCatalogLibrary = (libraryId) => {
    fetch(LIBRARIES_URL+`/${libraryId}`)
    .then(response => response.json())
    .then(response => { 
        renderIndivCatalog(response);
        renderLibraryInfo(response);
        renderButtons(response)
        
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
                    <img class="image-link" src='${book.img_url}' style='width: 152px'><img>
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


const renderMap = (e) => {
    mapContainer.style.display = "block";
    landingButtons.style.display ='block'
    individuaLibraryCatalog.style.display ='none'
    allLibrariesCatalog.style.display = "none";
    console.log(e.target)  
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
}


// const renderDonationForm = (e) => {
    

// }

const renderButtons = (library) => {
    let buttonWrapper = document.querySelector(".button-wrapper")
    let buttons = 
    `<button class='donate-book' data-id=${library.id}>Donate</button>
    <button class='return-book' data-id=${library.id}>Return book</button>
    <button class='toggle-map'>Return to Map</button>`
    buttonWrapper.innerHTML = buttons
}

const customizeModal = (e, bookId) =>{
    console.log(e.target)
    fetch(BOOKS_URL+`/${bookId}`)
    .then(response => response.json())
    .then(book => {
        let modalContent = 
        `<div class="modal-content">
        <div class="modal-header">
          <div class="col-6">
            <h5 class="modal-title" id="exampleModalLabel">${book.title}</h5>
            <h5 class="modal-author" id="exampleModalLabel">${book.author}</h5>
          </div>
          <div class="col-6">
            <button type="button" class="btn-close d-block d-sm-block d-md-none float-right" data-dismiss="modal" aria-label="Close"></button>
          </div>
        </div>
        <div class="modal-body text-center">
          <img class="img-fluid" src='${book.img_url}' style='width: 300px'><img>
          <br><br>
          <p>“${book.description}”</p>
        </div>
        <div class="modal-footer text-center">
          <div class="col-12">
            <button type="button" class="btn btn-primary adopt-book" data-id="${book.id}">ADOPT</button>
          </div>
          <div class="col-12">
            <button type="button" class="btn btn-primary check-out-book" data-id="${book.id}">CHECK OUT</button>
          </div>
          <div class="col-12">
            <button type="button" class="btn btn-primary edit-book" data-id="${book.id}">EDIT</button>
          </div>
        </div>
      </div>`
        modal.innerHTML = modalContent
        myModal.toggle()
    });

}

//NAVIGATION BETWEEN PAGES 


const productModal = (e) => {
    let bookId = e.target.parentElement.parentElement.dataset.id
    customizeModal(e, bookId)
 
}


const libraryInfo = (e) => {
    console.log(e.target)

}


//book actions

// EVERY TIME I GO FROM THE MAP PAGE TO THE LIBRARY THE BUTTONS CONSOLE LOG MULTIPLIES WHY? IS IT BECAUSE OF EVENT LISTENERS???
const donateBook = (e) => {
    console.log(e.target, 'entered event')
    // renderDonationForm(e);
}


const returnBook = (e) => {
    console.log(e.target, 'entered event')
}

const adoptBook = (e) => {
    console.log(e.target, 'entered event')
}

const checkOutBook = e => {
    console.log(e.target, 'entered event')
}
const editBook = e => {
    let bookId = e.target.dataset.id
    fetch(BOOKS_URL+`/${bookId}`)
    .then(response => response.json())
    .then(book => {
    let modalContent = 
    ` <div class="modal-content">
    <div class="modal-header">
      <div class="col-6">
        <h5 class="modal-title">Edit Book Info</h5>
      </div>
      <div class="col-6">
        <button type="button" class="btn-close d-block d-sm-block d-md-none float-right" data-dismiss="modal" aria-label="Close"></button>
      </div>
    </div>
    <div class="modal-body text-center">
    <!-- FORM BEGINS HERE -->
      <div class="mb-3">
        <label for="title" class="form-label">Book Title</label>
        <input type="text" class="form-control" id="title" value="${book.title}">
      </div>
      <div class="mb-3">
        <label for="author" class="form-label">Author</label>
        <input type="text" class="form-control" id="author" value="${book.author}">
      </div>
      <div class="mb-3">
        <label for="genre" class="form-label">Genre</label>
        <input type="text" class="form-control" id="genre" placeholder="Genre" value="${book.genre}">
      </div>
      <div class="mb-3">
        <label for="img_url" class="form-label">img_url</label>
        <input type="text" class="form-control" id="img_url" value="${book.img_url}">
      </div>
      <div class="mb-3">
        <label for="description" class="form-label">Thoughts on this book?</label>
        <textarea class="form-control" id="description" placeholder="About this Book" rows="3"> ${book.description}</textarea>
      </div>
      <!-- FORM ENDS HERE -->
    </div>
    <div class="modal-footer text-center">
      <button type="button" class="btn btn-primary" data-id=${book.id}>SAVE</button>
    </div>
  </div>`
  debugger
  modal.innerHTML = modalContent
    
    });
}
        


const main = () =>{
    landingPageListeners();
    fetchEntireCatalog();
    modalListeners();
    addListeners();
}


main()
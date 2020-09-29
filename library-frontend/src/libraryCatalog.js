const BASE_URL = "http://localhost:3000"
const BOOKS_URL = `${BASE_URL}/books`
const LIBRARIES_URL = `${BASE_URL}/libraries`

const fetchCatalogLibrary = () => {
    fetch(LIBRARIES_URL)
    .then(response => response.json())
    .then(response => { 
        renderCatalog(response)
    });
}

const renderCatalog = (libraries) => {
    let catalogContainer = document.querySelector('.library-catalog')
    let catalog = ''
    libraries.forEach(library => {
        console.log(library)
        library.books.forEach(book => {
            
        })
        debugger
    });
}

const main = () =>{
    fetchCatalogLibrary()
}

main()

const returnBookModal = () => {
    console.log('ENTERED RETURN EVENT IN SEPERATE FOLDER!!!!!!')
    const modal = document.getElementById('modal-dialog')
    modal.innerHTML = 
    `<div class="modal-content">
            <div class="modal-header">
                <div class="col-6">
                    <h5 class="modal-title">Return Book!</h5>
                </div>
                <div class="col-6">
                    <button type="button" class="btn-close d-block d-sm-block d-md-none float-right" data-dismiss="modal" aria-label="Close"></button>
                </div>
                </div>
                <div class="modal-body text-center">
                <!-- FORM BEGINS HERE -->
                <div class="mb-3">
                    <label for="title" class="form-label">Book Identifier!</label>
                    <input type="text" class="form-control" id="id" placeholder="Book Identifier">
                </div>
                <div class="mb-3">
                    <label for="title" class="form-label">Book Title</label>
                    <input type="text" class="form-control" id="title" placeholder="Book Title">
                </div>
                <div class="mb-3">
                    <label for="author" class="form-label">Author</label>
                    <input type="text" class="form-control" id="author" placeholder="Author">
                </div>
                <div class="mb-3">
                    <label for="genre" class="form-label">Genre</label>
                    <input type="text" class="form-control" id="genre" placeholder="Genre">
                </div>
                <div class="mb-3">
                    <label for="img_url" class="form-label">img_url</label>
                    <input type="text" class="form-control" id="img_url" placeholder="img_url">
                </div>
                <div class="mb-3">
                    <label for="description" class="form-label">Thoughts on this book?</label>
                    <textarea class="form-control" id="description" placeholder="About this Book" rows="3"></textarea>
                </div>
                <!-- FORM ENDS HERE -->
                </div>
                <div class="modal-footer text-center">
                <button type="button" class="btn btn-primary save" data-id="" data-action="return">Return</button>
                </div>
            </div>
        </div>
    </div>`
    myModal.toggle()
}


const returnBookFetch = (e, updateData) => {
    console.log('entered book return fetch')
    let newUpdatedData = updateData
    newUpdatedData.bookId = document.getElementById('id').value
    newUpdatedData.libraryId = document.querySelector(".library-information").dataset.id
    let newConfigObj = {
        method : 'PATCH',
        headers : {
            "Content-Type" : "application/json", 
            "Accept" : "application/json"
          },
        body : JSON.stringify(newUpdatedData)
    }
    fetch(BOOKS_URL+`/${newUpdatedData.bookId}`, newConfigObj)
    .then(response => response.json())
    .then(book => {
        let bookCard = document.querySelectorAll(`[data-book-id='${book.id}']`)[0]
        if(bookCard){
            bookCard.remove()
        }

        let catalogContainer = document.getElementById('ind-book-catalog-row')
        console.log(catalogContainer)
        let catalog = `
        <div class="col-6 col-sm-6 col-md-2">
            <div class="book-card" data-book-id= ${book.id} data-library-id = '${book.libraries[0].id}'>
                <div class="book-cover">
                    <img src='${book.img_url}' class='image-link'style='width: 152px'><img>
                </div>
                <div class="book-text-info">
                    <div class="author">
                        ${book.author}
                    </div>
                    <div class="title">
                        ${book.title}
                        ${book.book_logs[0].available}
                    </div>
                </div>
            </div>
        </div>`
        catalogContainer.innerHTML += catalog

        alert('Thank you for returning a book!')
        myModal.toggle()
    });
}



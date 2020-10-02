function renderDonationForm(e) {
        let libId = parseInt(e.target.dataset.id)
        let modalContent = 
        `<div class="modal-content">
            <div class="modal-header">
            <div class="col-6">
            <h5 class="modal-title">Donate Book</h5>
            </div>
            <div class="col-6">
            <button type="button" class="btn-close d-block d-sm-block d-md-none float-right" data-dismiss="modal" aria-label="Close"></button>
            </div>
            </div>
            <div class="modal-body text-center">
            <!-- FORM BEGINS HERE -->
            <div class="mb-3">
            <label for="title" class="form-label">Book Title</label>
            <input type="text" class="form-control" id="title" value=" ">
            </div>
            <div class="mb-3">
            <label for="author" class="form-label">Author</label>
            <input type="text" class="form-control" id="author" value=" ">
            </div>
            <div class="mb-3">
            <label for="genre" class="form-label">Genre</label>
            <input type="text" class="form-control" id="genre" placeholder="Genre" value=" ">
            </div>
            <div class="mb-3">
            <label for="img_url" class="form-label">img_url</label>
            <input type="text" class="form-control" id="img_url" value=" ">
            </div>
            <div class="mb-3">
            <label for="description" class="form-label">Thoughts on this book?</label>
            <textarea class="form-control" id="description" placeholder="About this Book" rows="3"></textarea>
            </div>
            <!-- FORM ENDS HERE -->
            </div>
            <div class="modal-footer text-center">
            <button type="button" class="btn btn-primary donate-btn save" id="donate-btn" data-id=${libId} data-action='donate'>DONATE!</button>
            </div>
        </div>`
        modal.innerHTML = modalContent
        myModal.toggle()
}

// MISSING AVAILABLE VALUE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//ITERATE THROUGH BOOK_LOGS IN RETURN JSON TO COMPARE THE BOOK ID WITH THE BOOK_LOG BOOK ID
//book.libraries[0].id
// book.book_logs[0].available
function donatePostBook(e, updateData){
    const reqObj = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(updateData)
    }
    fetch('http://localhost:3000/books', reqObj)
    .then(resp => resp.json())
    .then(book => {
        let catalogContainer = document.getElementById('ind-book-catalog-row')
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
                
                    </div>
                </div>
            </div>
        </div>`
        catalogContainer.innerHTML += catalog
        myModal.toggle()
    });


}

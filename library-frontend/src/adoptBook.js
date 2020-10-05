const displayAdoptModal = e => {
    let bookId = parseInt(e.target.dataset.bookId)
    let bookLogId = parseInt(e.target.dataset.booklog)
    let modalContent = 
    `<div class="modal-content">
        <div class="modal-header">
          <div class="col-6">
            <h5 class="modal-title">Sure you want to adopt this book?</h5>
          </div>
          <div class="col-6">
            <button type="button" class="btn-close d-block d-sm-block d-md-none float-right" data-dismiss="modal" aria-label="Close"></button>
          </div>
        </div>
        <div class="modal-body text-center">
          <img class="img-fluid" src='assets/book-pulp-fiction.gif' width ="100%" alt='John Travolta from Pulp Fiction reading a book in the bathroom'>
          <p>Yes, I am keeping this book.</p>
          <button type="button" class="btn btn-primary adopt-btn" id="adopt-btn" data-id=${bookId}  data-booklog=${bookLogId}>ADOPT</button> <br><br><br>
          <img class="img-fluid" src='assets/question-reading.gif' alt='A hand flips through the same blank page with question mark from a book over and over again'>
          <p>No, I'm probably returning this book soon.</p>
          <button type="button" class="btn btn-primary checkout-btn checkout-fetch-btn" id="checkout-btn" data-id=${bookId}  data-booklog=${bookLogId}>CHECK OUT</button>
        </div>
        <div class="modal-footer text-center">
        </div>
      </div>
    </div>
    </div>`

    modal.innerHTML = modalContent

  } //end of adoptModal


  const adoptBook = (e) => {
    bookLogId = parseInt(e.target.dataset.booklog)
    const reqObj = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({adopted: true})
    }
    fetch(`http://localhost:3000/book_logs/${bookLogId}`, reqObj)
      .then(res => res.json())
      .then(book_log => {
        let divsToUpdate = document.querySelectorAll(`[data-book-id='${book_log.book_id}']`)
        for(let i=0; i < divsToUpdate.length; i++){
          divsToUpdate[i].parentElement.classList.remove('adopted-false')
          divsToUpdate[i].parentElement.classList.add(`adopted-${book_log.adopted}`)
        }
        updateAdoptFrontend(book_log);
        });
  } 


  const updateAdoptFrontend = updatedBookLog => {
    modalContent = 
    `<div class="modal-content">
        <div class="modal-header">
          <div class="col-6">
            <h5 class="modal-title">Enjoy your new book!</h5>
          </div>
          <div class="col-6">
            <button type="button" class="btn-close d-block d-sm-block d-md-none float-right" data-dismiss="modal" aria-label="Close"></button>
          </div>
        </div>
        <div class="modal-body text-center">
         <img class="img-fluid" src='assets/jack-black-book.gif' width ="100%" alt='Jack Black opens a book and rays of bright light come out of it'>
        </div>
        <div class="modal-footer text-center">
          <button type="button" class="btn btn-primary" id="thanks-btn">THANKS!</button>
        </div>
      </div>
    </div>
    </div>`
    modal.innerHTML = modalContent
    let thanksBtn = document.querySelector('#thanks-btn')
    thanksBtn.addEventListener('click', (e) =>{
      myModal.toggle()
    });
  } 
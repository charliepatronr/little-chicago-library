const displayCheckOutModal = (e) => {
      bookId = parseInt(e.target.dataset.bookId)
      bookLogId = parseInt(e.target.dataset.booklog)
      let modalContent = 
      `<div class="modal-content">
          <div class="modal-header">
            <div class="col-6">
              <h5 class="modal-title">Are you sure you want to check this book out?</h5>
            </div>
            <div class="col-6">
              <button type="button" class="btn-close d-block d-sm-block d-md-none float-right" data-dismiss="modal" aria-label="Close"></button>
            </div>
          </div>
          <div class="modal-body text-center">
            <p>Yes, I plan on returning this book.</p>
            <button type="button" class="btn btn-primary checkout-fetch-btn" id="checkout-btn" data-id=${bookId}  data-booklog=${bookLogId}>CHECK OUT</button><br><br>
            <p>No, I am keeping this book.</p>
            <button type="button" class="btn btn-primary adopt-btn" id="adopt-btn" data-id=${bookId}  data-booklog=${bookLogId}>ADOPT</button>
          </div>
          <div class="modal-footer text-center">
          </div>
        </div>
      </div>
      </div>`
      modal.innerHTML = modalContent
  } //end of displayCheckoutModal


  const checkOutBook = (e) => {
    bookLogId = parseInt(e.target.dataset.booklog)
    const reqObj = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({available: false})
    }
    fetch(`http://localhost:3000/book_logs/${bookLogId}`, reqObj)
      .then(res => res.json())
      .then(book_log => {
          let divsToUpdate = document.querySelectorAll(`[data-book-id='${book_log.book_id}']`)
          for(let i=0; i < divsToUpdate.length; i++){
            divsToUpdate[i].parentElement.classList.remove('available-true')
            divsToUpdate[i].parentElement.classList.add(`available-${book_log.available}`)
          }
          updateCheckoutFrontend(book_log)
      });
  } //end of adoptBook


  const updateCheckoutFrontend = updatedBookLog => {
    modalContent = 
    `<div class="modal-content">
        <div class="modal-header">
          <div class="col-6">
            <h5 class="modal-title">Thank you for checking this book out!</h5>
          </div>
          <div class="col-6">
            <button type="button" class="btn-close d-block d-sm-block d-md-none float-right" data-dismiss="modal" aria-label="Close"></button>
          </div>
        </div>
        <div class="modal-body text-center">
          <p>Enjoy!</p>
        </div>
        <div class="modal-footer text-center">
          <button type="button" class="btn btn-primary" id="thanks-btn">BACK TO MAP</button>
        </div>
      </div>
    </div>
    </div>`
    modal.innerHTML = modalContent
    let thanksBtn = document.querySelector('#thanks-btn')
    thanksBtn.addEventListener('click', (e) =>{
      myModal.toggle()
    })  
  }
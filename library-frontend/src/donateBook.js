function renderDonationForm(e) {
    // individuaLibraryCatalog.addEventListener('click', function(e){
    //     if(e.target.className === 'donate-book'){
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
            <button type="button" class="btn btn-primary donate-btn" id="donate-btn" data-id=${libId}>DONATE!</button>
            </div>
            </div>`
            modal.innerHTML = modalContent
            myModal.toggle()
            let donateBtn = document.querySelector('#donate-btn')
            donateBtn.addEventListener('click', (e) =>{
            
            donatePostBook(e)
            })
          
        }

        function donatePostBook(e){
          const formData = {
            title: document.getElementById('title').value,
            author: document.getElementById('author').value,
            img_url: document.getElementById('img_url').value,
            genre: document.getElementById('genre').value,
            description: document.getElementById('description').value,
            library_id: parseInt(e.target.dataset.id)
          }
                  const reqObj = {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                      'Accept': 'application/json'
                  },
                    body: JSON.stringify(formData)
                }
          
                    fetch('http://localhost:3000/books', reqObj)
                    .then(resp => resp.json())
                    .then(book => {console.log(book)
                    
                                })

          
        }
  
        
      
//       modal.addEventListener('submit', function(e){




//     })

//   })
// }
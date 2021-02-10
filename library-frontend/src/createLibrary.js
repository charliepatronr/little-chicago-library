

const renderNewLibraryForm = (e) => {
    let modalContent = 
    `   <div class="modal-content">
    <div class="modal-header">
        <div class="col-6">
        <h5 class="modal-title" id="exampleModalLabel"></h5>
        <h5 class="modal-author" id="exampleModalLabel"></h5>
        </div>
        <div class="col-6">
            <button type="button" class="btn-close d-block d-sm-block d-md-none float-right" data-dismiss="modal" aria-label="Close"></button>
        </div>
    </div>
    <div class="modal-body text-center">
        <label for="name" class="form-label">Library Name</label>
        <input type="text" class="form-control" id="name" value=" ">
        <div class="mb-3">
        <label for="location" class="form-label">Location</label>
        <input type="text" class="form-control" placeholder='Street Address' id="location" value=" ">
        </div>
    </div>
    <div class="modal-footer text-center">
        <button type="button" class="btn btn-primary new-library" >Submit!</button>
    </div>
</div>`
    modal.innerHTML = modalContent
    myModal.toggle()
    

}

const fetchNewLibrary = (e) => {
    let name = document.getElementById("name").value
    let location = document.getElementById("location").value
    let data = {
        name: name, 
        location: location
    }
    const libraryObject = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
    }

    fetch(LIBRARIES_URL, libraryObject)
    .then(response => response.json())
    .then(library => {
        alert('Thank you for adding a new library!')
    });
}


const editBookFetch = (e, updateData) => {
    updateData.libraryId = document.querySelector(`[data-book-id='${updateData.bookId}']`).dataset.libraryId
    let configObj = {
        method : 'PATCH',
        headers : {
            "Content-Type" : "application/json", 
            "Accept" : "application/json"
          },
        body : JSON.stringify(updateData)
    }
    fetch(BOOKS_URL+`/${updateData.bookId}`, configObj)
    .then(response => response.json())
    .then(book => {
        for(let i=0; i <=1; i ++){
            let bookCard = document.querySelectorAll(`[data-book-id='${book.id}']`)[i]
            let newBookCardContent = 
            `<div class="book-cover">
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
            </div>`
            bookCard.innerHTML = newBookCardContent
        }
        alert(`Thank you! ${book.title}'s info has been updated!'`)
        myModal.toggle()
    });

}
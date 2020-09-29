class BooksController < ApplicationController

    def index 
        # uncomment when fetch request with json with library_id params is implemented
        # library = Library.find(params[:library_id])
        library = false
        if library
            books = library.books
            render json: BookSerializer.new(books).to_serialized_json
        else
            books = Book.all
            render json: BookSerializer.new(books).to_serialized_json
        end
    end

    def show 
        book = Book.find(params[:id])
        render json: BookSerializer.new(book).to_serialized_json
    end

    def create 
        library = Library.find(params[:books]['library_id'])
        title = params[:book]['title']
        author = params[:book]['author']
        img_url = params[:book]['img_url']
        genre = params[:book]['genre']
        description = params[:book]['description']
        book = Book.create(title: title, author: author, img_url: img_url, genre: genre, description: description)
        if book.save
            library.books << book
            render json: BookSerializer.new(book).to_serialized_json
        else 
            render json: {message: 'Book could not be added'}
        end 
    end 

    def update
        library = Library.find(params[:books]['library_id'])
        #add action parameter to json to know if the book is going to be updated, checkouted, adopted or returned
        action = params[:book]["action"]
        book = Book.find(params[:books]['id'])
        library_id = book.library.id
        title = params[:book]['title']
        author = params[:book]['author']
        img_url = params[:book]['img_url']
        genre = params[:book]['genre']
        description = params[:book]['description']

        case action 
        when 'return'
            # delete previous Booklog
            # is has many the correct association?? a specific instance of a book can be in many libraries
            # or does the book_log define instance of this book and the library it belongs to?
            book_log = BookLog.find_by(book_id: book.id)
            if library == book_log.library
                book.update(available: false)
                render json: BookSerializer.new(book).to_serialized_json

            else 
                book_log.destroy
                library.books << book
                puts  BookLog.find_by(book_id: book.id)
                render json: BookSerializer.new(book).to_serialized_json
            end
                        
        when 'update' 
            if book.update(title: title, author: author, img_url: img_url, genre: genre, description: description)
                render json: BookSerializer.new(book).to_serialized_json
            else 
                render json: { message: 'Book could not be updated' }
            end 

        when 'check_out'
            if book.update(available: false)
                render json: BookSerializer.new(book).to_serialized_json
            else 
                render json: { message: 'Book could not be checked out' }
            end 

        when 'adopt'
            adopted = !book.adopted
            if book.update(adopted: adopted)
                render json: BookSerializer.new(book).to_serialized_json
            else 
                render json: { message: 'Book could not be adopted :(' }
            end
        else
            render json: { message: 'No action available' }
        end
     

    end

end

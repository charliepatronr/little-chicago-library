class BookSerializer

    def initialize(book_obj)
        @book = book_obj
    end

    def to_serialized_json
        options = {
            include: {
                libraries: {
                    only: [:id, :name, :location, :lat, :long]
                }, 
                book_logs: {
                    only: [:id, :available, :adopted, :library_id, :book_id]
                }
            },
            except: [:updated_at],
        }
        @book.to_json(options)
    end
end
class LibrarySerializer

    def initialize(library_obj)
        @library = library_obj
    end

    def to_serialized_json
        options = {
            include: {
                books: {
                    only: [:id, :title, :author, :img_url, :genre, :description]
                }, 
                book_logs: {
                    only: [:id, :library_id, :book_id, :available, :adopted]
                }
            },
            except: [:updated_at],
        }
        @library.to_json(options)
    end
end

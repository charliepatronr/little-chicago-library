class LibrariesController < ApplicationController

    def index 
        libraries = Library.all
        render json: LibrarySerializer.new(libraries).to_serialized_json
    end
end

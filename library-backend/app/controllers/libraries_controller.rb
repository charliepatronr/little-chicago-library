class LibrariesController < ApplicationController

    def index 
        libraries = Library.all
        render json: LibrarySerializer.new(libraries).to_serialized_json
    end

    def show 
        library = Library.find(params[:id])
        render json: LibrarySerializer.new(library).to_serialized_json
    end
end

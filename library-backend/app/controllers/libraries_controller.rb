class LibrariesController < ApplicationController

    def index 
        libraries = Library.all
        render json: LibrarySerializer.new(libraries).to_serialized_json
    end

    def show 
        library = Library.find(params[:id])
        render json: LibrarySerializer.new(library).to_serialized_json
    end

    def create 
        location = params[:library][:location]
        name =  params[:library][:name]
        library = Library.create(name: name, location: location)
        render json: LibrarySerializer.new(library).to_serialized_json
    end
end

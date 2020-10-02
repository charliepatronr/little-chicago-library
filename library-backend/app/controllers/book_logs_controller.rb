class BookLogsController < ApplicationController

    def index
        book_logs = BookLog.all
        render json: book_logs
      end

    def show
        book_log = BookLog.find(params[:id])
        render json: book_log
    end

    def update
        book_log = BookLog.find(params[:id])
        book_log.update(book_log_params)
        render json: book_log
    end 


    private
    def book_log_params
        params.require(:book_log).permit(:library_id, :available, :adopted)
    end


end

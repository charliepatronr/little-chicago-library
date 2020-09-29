class Library < ApplicationRecord
    has_many :book_logs
    has_many :books, through: :book_logs
end

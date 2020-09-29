class Book < ApplicationRecord
    has_many :book_logs
    has_many :libraries, through: :book_logs
end

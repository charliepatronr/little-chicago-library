class BookLog < ApplicationRecord
  belongs_to :book
  belongs_to :library
end

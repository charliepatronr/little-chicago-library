Rails.application.routes.draw do
  resources :book_logs
  resources :libraries
  resources :books
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  patch '/books/update/return', to: 'books#return'

end

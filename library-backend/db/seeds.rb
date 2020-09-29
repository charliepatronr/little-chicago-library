# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
BookLog.destroy_all
Library.destroy_all
Book.destroy_all

books = []
50.times do
    books << Book.create(title: Faker::Book.title, author: Faker::Book.author, img_url:'https://m.media-amazon.com/images/I/41otZSNX8GL.jpg' , genre:Faker::Book.genre, description: Faker::Books::Lovecraft.paragraph(sentence_count: 2) )
end
libraries = []
15.times do 
    libraries << Library.create(name: Faker::Address.state, location:'Ravenswood', lat:Faker::Address.latitude, long:Faker::Address.longitude )
end

books.each do |book|
    BookLog.create(library_id: Library.all.sample.id, book_id: book.id)
end 




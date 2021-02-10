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
images = 
[ 
    'https://m.media-amazon.com/images/I/71YoFJSz3LL._AC_UY218_.jpg', 
    'https://m.media-amazon.com/images/I/81sBQfVzziL._AC_UY218_.jpg', 
    'https://m.media-amazon.com/images/I/515rkrJc3zL._AC_UY218_.jpg', 
    'https://m.media-amazon.com/images/I/81zXRFnhXuL._AC_UY218_.jpg', 
    'https://m.media-amazon.com/images/I/81BE2f-lBjL._AC_UY218_.jpg', 
    'https://m.media-amazon.com/images/I/71EY4cTPvEL._AC_UY218_.jpg',
    'https://m.media-amazon.com/images/I/714-1kZwslL._AC_UY218_.jpg', 
    'https://m.media-amazon.com/images/I/81+owv3xHcL._AC_UY218_.jpg',
    'https://m.media-amazon.com/images/I/71YjVB3lpIL._AC_UY218_.jpg', 
    'https://m.media-amazon.com/images/I/51zfziPqTYL._AC_UY218_.jpg', 
    'https://m.media-amazon.com/images/I/81m25lFGUuL._AC_UY218_.jpg', 
    'https://m.media-amazon.com/images/I/81MAQ+fkjrL._AC_UY218_.jpg', 
    'https://m.media-amazon.com/images/I/81WUAoL-wFL._AC_UY218_.jpg', 
    'https://m.media-amazon.com/images/I/81sxyC3isSL._AC_UY218_.jpg', 
    'https://m.media-amazon.com/images/I/91pR9wKJ3zL._AC_UY218_.jpg', 
    'https://m.media-amazon.com/images/I/91jHOlKEPwL._AC_UY218_.jpg', 
    'https://m.media-amazon.com/images/I/916WdzIWi0L._AC_UY218_.jpg', 
    'https://m.media-amazon.com/images/I/71KSyt7c0uL._AC_UY218_.jpg', 
    'https://m.media-amazon.com/images/I/81uR3fhaGqL._AC_UY218_.jpg', 
    'https://m.media-amazon.com/images/I/41OzBDrobML._AC_UL320_.jpg', 
    'https://m.media-amazon.com/images/I/71GLAwC9cPL._AC_UL320_.jpg', 
    'https://m.media-amazon.com/images/I/71OFqSRFDgL._AC_UL320_.jpg', 
    'https://m.media-amazon.com/images/I/71wzP4rL1mL._AC_UL320_.jpg', 
    'https://m.media-amazon.com/images/I/61DwSCj3+-L._AC_UL320_.jpg', 
    'https://m.media-amazon.com/images/I/81T6h+bZNwL._AC_UL320_.jpg', 
    'https://m.media-amazon.com/images/I/91TW9Ai2nPL._AC_UL320_.jpg', 
    'https://m.media-amazon.com/images/I/71aaO6VbyGL._AC_UL320_.jpg', 
    'https://m.media-amazon.com/images/I/91AQs6qv9ML._AC_UL320_.jpg', 
    'https://m.media-amazon.com/images/I/91-ELvEEeIL._AC_UL320_.jpg', 
    'https://m.media-amazon.com/images/I/61yf8jEH3CL._AC_UL320_.jpg', 
    'https://m.media-amazon.com/images/I/6150MOOambL._AC_UL320_.jpg', 
    'https://m.media-amazon.com/images/I/61EGUelRnmL._AC_UL320_.jpg', 
    'https://m.media-amazon.com/images/I/7172+-bVobL._AC_UL320_.jpg', 
    'https://m.media-amazon.com/images/I/81ktoDjZF6L._AC_UL320_.jpg', 
    'https://m.media-amazon.com/images/I/51465ukjMML._AC_UL320_.jpg', 
    'https://m.media-amazon.com/images/I/719TvQFIKEL._AC_UL320_.jpg', 
    'https://m.media-amazon.com/images/I/814gP+Af6OL._AC_UL320_.jpg', 
    'https://m.media-amazon.com/images/I/41NbVOUVMSL._AC_UL320_.jpg', 
    'https://m.media-amazon.com/images/I/41xPxQ0Qr-L._AC_UL320_.jpg', 
    'https://m.media-amazon.com/images/I/61Ar1qIRf8L._AC_UL320_.jpg', 
    'https://m.media-amazon.com/images/I/51qNi9Q6ifL._AC_UL320_.jpg', 
    'https://m.media-amazon.com/images/I/519VVAFC75L._AC_UL320_.jpg', 
    'https://m.media-amazon.com/images/I/71kxa1-0mfL._AC_UL320_.jpg', 
    'https://m.media-amazon.com/images/I/91HqOO4DmRL._AC_UL320_.jpg', 
    'https://m.media-amazon.com/images/I/A1LtnAGxptL._AC_UL320_.jpg', 
    'https://m.media-amazon.com/images/I/91yu2bAqlDL._AC_UL320_.jpg', 
    'https://m.media-amazon.com/images/I/A10cRevBu7L._AC_UL320_.jpg', 
    'https://m.media-amazon.com/images/I/718QpkmO2ZL._AC_UL320_.jpg', 
    'https://m.media-amazon.com/images/I/81aY1lxk+9L._AC_UL320_.jpg'

]
images.length.times do |i|
    books << Book.create(title: Faker::Book.title, author: Faker::Book.author, img_url: images[i] , genre:Faker::Book.genre, description: Faker::Books::Lovecraft.paragraph(sentence_count: 2) )
end


librariesLatLong = [{lat: 41.96819 , long: -87.67666 }, {lat: 41.97013 , long:-87.67136}, {lat:41.97587 , long:-87.67134}, {lat:41.98189 , long:-87.67109}, {lat:41.979329 , long:-87.66644
}, {lat:41.97776 , long:-87.66443}, {lat:41.97721 , long:-87.6639}, {lat:41.97602 , long:-87.65759}]

# librariesLocations = ['McPherson Elementary School
# 4728 N. Wolcott Avenue Chicago IL 60640', 
# '4842 N. Paulina St. Chicago IL 60640', 
# '1643 W Foster Chicago IL 60640', 
# '1630 W Catalpa Avenue Chicago IL 60640', 
# '1438 W Summerdale Avenue Chicago IL 60640', 
# '5251 n Glenwood Chicago IL 60640', 
# '5230 North Wayne Avenue Chicago IL 60640',
# '5125 N Winthrop Ave Chicago IL 60640'
# ]

librariesLocations = ['McPherson Elementary School
4728 N. Wolcott Avenue Chicago IL 60640', 
'4842 N. Paulina St. Chicago IL 60640'
]

librariesLocations.each do |lib|
    Library.create(name: Faker::Address.state, location: lib, lat: 3151, long: 51651 )
end


# librariesLatLong.each do |lib|
#    Library.create(name: Faker::Address.state, location:'Ravenswood', lat: lib[:lat], long: lib[:long] )
# end

books.each do |book|
    BookLog.create(library_id: Library.all.sample.id, book_id: book.id)
end 




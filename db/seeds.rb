# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "Seeding..🌱🌱🌱"
Pet.destroy_all
Owner.destroy_all
Shelter.destroy_all
Friend.destroy_all
Visit.destroy_all
Waitlist.destroy_all

Shelter.create!(name: "City Bark Animal Shelter", email: "gooddogs@gmail.com", phone: 1234567890, address: Faker::Address.street_address, zipcode:80014)
Shelter.create!(name: "City Meow Animal Shelter", email: "goodcats@gmail.com", phone: 1234567890, address: Faker::Address.street_address, zipcode:80211)
Shelter.create!(name: "Like Home Animal Shelter", email: "goodpets@gmail.com", phone: 1234567890, address: Faker::Address.street_address, zipcode:80021)
puts "Done with shelter 🏠🏠🏠"




Pet.create!(name: "Sky", img: "images/pug1.png", pic: "images/pug1.jpg", animal: "dog", breed: "Pug", size: "small", age:4, special_needs: false, shelter: Shelter.first, password: "yaydogs")
Pet.create!(name: Faker::FunnyName.name, img: "images/pug2.png", pic: "images/pug2.jpg", animal: "dog", breed: "Pug", size: "small", age:3, special_needs: false, shelter: Shelter.first, password: "yaydogs")
Pet.create!(name: Faker::FunnyName.name, img: "images/bird1.png", pic: "images/bird1.jpg", animal: "bird", breed: "Parakeet", size: "small", age:1, special_needs: false, shelter: Shelter.third, password: "yaydogs")
Pet.create!(name: Faker::FunnyName.name, img: "images/bird2.png", pic: "images/bird2.jpg", animal: "bird", breed: "Parakeet", size: "small", age:2, special_needs: false, shelter: Shelter.third, password: "yaydogs")
Pet.create!(name: Faker::FunnyName.name, img: "images/lab1.png",pic: "images/lab1.jpg", animal: "dog", breed: "Lab", size: "medium", age:5, special_needs: false, shelter: Shelter.first, password: "yaydogs")
Pet.create!(name: Faker::FunnyName.name, img: "images/cat1.png", pic: "images/cat1.jpg",animal: "cat", breed: "Domestic Short Hair", size: "small", age:1, special_needs: false, shelter: Shelter.second, password: "yaycats")
Pet.create!(name: Faker::FunnyName.name, img: "images/cat3.png", pic: "images/cat3.jpg",animal: "cat", breed: "Domestic Short Hair", size: "small", age:2, special_needs: false, shelter: Shelter.second, password: "yaycats")
Pet.create!(name: Faker::FunnyName.name, img: "images/cat4.png", pic: "images/cat4.jpg",animal: "cat", breed: "Domestic Short Hair", size: "small", age:3, special_needs: false, shelter: Shelter.second, password: "yaycats")
Pet.create!(name: Faker::FunnyName.name, img: "images/cat5.png", pic: "images/cat5.jpg",animal: "cat", breed: "Domestic Short Hair", size: "small", age:4, special_needs: false, shelter: Shelter.second, password: "yaycats")
Pet.create!(name: Faker::FunnyName.name, img: "images/cat6.png", pic: "images/cat6.jpg",animal: "cat", breed: "Domestic Short Hair", size: "small", age:5, special_needs: false, shelter: Shelter.second, password: "yaydogs")
Pet.create!(name: Faker::FunnyName.name, img: "images/dachshund1.png", pic: "images/dachshund1.jpg", animal: "dog", breed: "Dackshund", size: "small", age:2, special_needs: false, shelter: Shelter.first, password: "yaydogs")
Pet.create!(name: Faker::FunnyName.name, img: "images/dane1.png", pic: "images/dane1.jpg", animal: "dog", breed: "Great Dane", size: "large", age:6, special_needs: false, shelter: Shelter.first, password: "yaydogs")
Pet.create!(name: Faker::FunnyName.name, img: "images/golden1.png", pic: "images/golden1.jpg", animal: "dog", breed: "Golden Retriever", size: "medium", age:3, special_needs: false, shelter: Shelter.first, password: "yaydogs")
Pet.create!(name: Faker::FunnyName.name, img: "images/golden2.png", pic: "images/golden1.jpg", animal: "dog", breed: "Golden Retriever", size: "medium", age:4, special_needs: false, shelter: Shelter.first, password: "yaydogs")
Pet.create!(name: Faker::FunnyName.name, img: "images/hamster1.png", pic: "images/hamster1.jpg", animal: "hamster", breed: "Long Hair Hamster", size: "small", age:1, special_needs: false, shelter: Shelter.third, password: "yaydogs")
Pet.create!(name: Faker::FunnyName.name, img: "images/shiba1.png", pic: "images/shiba1.jpg", animal: "dog", breed: "Shiba Inu", size: "medium", age:1, special_needs: false, shelter: Shelter.first, password: "yaydogs")
puts "Done with pets 🐱🐶🐹🐧"

Owner.create!(name:Faker::Name.first_name, img:"images/p1.png", email:"name@gmail.com", zipcode: 80241, children: false, cats: true, dogs: false, active:"low", homespace: "small", profile:"I'm looking for a cat to join our family. Can't wait to meet you!!")
Owner.create!(name:Faker::Name.first_name, img:"images/p2.png", email:"name@gmail.com", zipcode: 80241, children: false, cats: false, dogs: true, active:"medium", homespace: "medium", profile:"I'm looking for a cat to join our family. Can't wait to meet you!!")
Owner.create!(name:Faker::Name.first_name, img:"images/p3.png", email:"name@gmail.com", zipcode: 80241, children: false, cats: true, dogs: false, active:"low", homespace: "large", profile:"I'm looking for a cat to join our family. Can't wait to meet you!!")
Owner.create!(name:Faker::Name.first_name, img:"images/p4.png", email:"name@gmail.com", zipcode: 80211, children: false, cats: false, dogs: true, active:"high", homespace: "small", profile:"I'm looking for a cat to join our family. Can't wait to meet you!!")
Owner.create!(name:Faker::Name.first_name, img:"images/p5.png", email:"name@gmail.com", zipcode: 80211, children: false, cats: true, dogs: false, active:"low", homespace: "medium", profile:"I'm looking for a cat to join our family. Can't wait to meet you!!")
Owner.create!(name:Faker::Name.first_name, img:"images/p6.png", email:"name@gmail.com", zipcode: 80211, children: false, cats: false, dogs: true, active:"medium", homespace: "large", profile:"I'm looking for a cat to join our family. Can't wait to meet you!!")
Owner.create!(name:Faker::Name.first_name, img:"images/p7.png", email:"name@gmail.com", zipcode: 80211, children: false, cats: true, dogs: false, active:"low", homespace: "small", profile:"I'm looking for a cat to join our family. Can't wait to meet you!!")
Owner.create!(name:Faker::Name.first_name, img:"images/p8.png", email:"name@gmail.com", zipcode: 80021, children: false, cats: false, dogs: true, active:"high", homespace: "medium", profile:"I'm looking for a cat to join our family. Can't wait to meet you!!")
Owner.create!(name:Faker::Name.first_name, img:"images/p9.png", email:"name@gmail.com", zipcode: 80021, children: false, cats: true, dogs: false, active:"low", homespace: "large", profile:"I'm looking for a cat to join our family. Can't wait to meet you!!")
Owner.create!(name:Faker::Name.first_name, img:"images/p10.png", email:"name@gmail.com", zipcode: 80021, children: false, cats: false, dogs: true, active:"medium", homespace: "small", profile:"I'm looking for a cat to join our family. Can't wait to meet you!!")
Owner.create!(name:Faker::Name.first_name, img:"images/p11.png", email:"name@gmail.com", zipcode: 80021, children: false, cats: false, dogs: false, active:"low", homespace: "medium", profile:"I'm looking for a cat to join our family. Can't wait to meet you!!")
Owner.create!(name:Faker::Name.first_name, img:"images/p12.png", email:"name@gmail.com", zipcode: 80014, children: true, cats: false, dogs: true, active:"high", homespace: "large", profile:"I'm looking for a cat to join our family. Can't wait to meet you!!")
Owner.create!(name:Faker::Name.first_name, img:"images/p13.png", email:"name@gmail.com", zipcode: 80014, children: true, cats: true, dogs: false, active:"low", homespace: "small", profile:"I'm looking for a cat to join our family. Can't wait to meet you!!")
Owner.create!(name:Faker::Name.first_name, img:"images/p14.png", email:"name@gmail.com", zipcode: 80014, children: true, cats: false, dogs: false, active:"medium", homespace: "medium", profile:"I'm looking for a cat to join our family. Can't wait to meet you!!")
Owner.create!(name:Faker::Name.first_name, img:"images/p15.png", email:"name@gmail.com", zipcode: 80014, children: true, cats: true, dogs: true, active:"high", homespace: "large", profile:"I'm looking for a cat to join our family. Can't wait to meet you!!")


puts "Done with owners 👧🏻👶🏼🧒🏿"

Friend.create!(animal_id: Pet.second.id, pet: Pet.first)
Friend.create!(animal_id: Pet.third.id, pet: Pet.first)
Friend.create!(animal_id: Pet.fourth.id, pet: Pet.first)


puts "Done with friends 🍻"

Visit.create!(adopted:false, pet:Pet.first, owner: Owner.first)
Visit.create!(adopted:false, pet:Pet.first, owner: Owner.second)
Visit.create!(adopted:false, pet:Pet.first, owner: Owner.third)
Visit.create!(adopted:false, pet:Pet.first, owner: Owner.fourth)

puts "Done with visits 🥳"
puts "Done with waitlists 🦄"


puts "Finished 🎄🎄🎄"
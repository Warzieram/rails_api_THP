# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
#
require 'faker'

Comment.delete_all
Article.delete_all
User.delete_all


LIMIT = 30
LIMIT.times do
  email = Faker::Internet.email
  password = "azerty123456"

  User.create!(email: email, password: password)
end

for i in 0..LIMIT do
  title = Faker::Name.unique.name
  content = Faker::Books::Dune.quote
  author = User.pluck(:id).sample

  Article.create!(title: title, content: content, author_id: author)
end

LIMIT.times do
  content = Faker::Books::Dune.quote
  author = User.pluck(:id).sample
  article = Article.pluck(:id).sample
  
  Comment.create!(content: content, user_id: author, article_id: article)
end

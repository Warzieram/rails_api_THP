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

100.times do
  content = Faker::Books::Dune.quote
  author = User.pluck(:id).sample
  article = Article.pluck(:id).sample
  Comment.create!(content: content, user_id: author, article_id: article)
end

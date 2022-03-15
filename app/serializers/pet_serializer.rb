class PetSerializer < ActiveModel::Serializer
  attributes :id, :name, :img, :animal, :breed, :size, :age, :special_needs, :shelter_id, :password, :password_digest,:pic
  has_many :friends
  has_many :visits
  belongs_to :shelter
end

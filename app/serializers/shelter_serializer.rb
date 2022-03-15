class ShelterSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :phone, :address, :zipcode
  has_many :pets
end

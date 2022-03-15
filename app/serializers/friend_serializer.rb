class FriendSerializer < ActiveModel::Serializer
  attributes :id, :animal_id, :pet_id
  belongs_to :pet
end

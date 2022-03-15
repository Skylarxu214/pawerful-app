class WaitlistSerializer < ActiveModel::Serializer
  attributes :id, :pet_id, :owner_id
end

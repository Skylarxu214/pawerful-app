class VisitSerializer < ActiveModel::Serializer
  attributes :id, :adopted, :date, :pet_id, :owner_id, :apt_date
  belongs_to :pet
  belongs_to :owner
end

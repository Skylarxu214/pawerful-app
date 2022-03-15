class OwnerSerializer < ActiveModel::Serializer
  attributes :id, :name, :img, :email, :zipcode, :children, :cats, :dogs, :active, :homespace, :profile
end

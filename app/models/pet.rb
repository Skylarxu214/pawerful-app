class Pet < ApplicationRecord
    has_secure_password
    belongs_to :shelter
    has_many :friends
    has_many :visits
    
end

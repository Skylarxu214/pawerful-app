class CreatePets < ActiveRecord::Migration[7.0]
  def change
    create_table :pets do |t|
      t.string :name
      t.string :img
      t.string :type
      t.string :breed
      t.string :size
      t.integer :age
      t.boolean :special_needs
      t.integer :shelter_id
      t.string :password
      t.string :password_digest

      t.timestamps
    end
  end
end

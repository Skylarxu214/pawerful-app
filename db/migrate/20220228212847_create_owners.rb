class CreateOwners < ActiveRecord::Migration[7.0]
  def change
    create_table :owners do |t|
      t.string :name
      t.string :img
      t.string :email
      t.integer :zipcode
      t.boolean :children
      t.boolean :cats
      t.boolean :dogs
      t.string :active
      t.string :homespace
      t.text :profile

      t.timestamps
    end
  end
end

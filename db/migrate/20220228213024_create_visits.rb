class CreateVisits < ActiveRecord::Migration[7.0]
  def change
    create_table :visits do |t|
      t.boolean :adopted
      t.integer :date
      t.integer :pet_id
      t.integer :owner_id

      t.timestamps
    end
  end
end

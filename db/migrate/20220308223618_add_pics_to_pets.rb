class AddPicsToPets < ActiveRecord::Migration[7.0]
  def change
    add_column :pets, :pic, :string
  end
end

class ChangeNameColumn < ActiveRecord::Migration[7.0]
  def change
    rename_column :friends, :friend_id, :animal_id
  end
end

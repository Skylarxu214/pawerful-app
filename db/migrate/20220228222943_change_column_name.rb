class ChangeColumnName < ActiveRecord::Migration[7.0]
  def change
    rename_column :pets, :type, :animal
  end
end

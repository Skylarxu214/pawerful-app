class AddColumnToVisit < ActiveRecord::Migration[7.0]
  def change
    add_column :visits, :apt_date, :text
  end
end

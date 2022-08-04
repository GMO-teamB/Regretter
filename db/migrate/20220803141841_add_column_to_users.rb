class AddColumnToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :name, :string
    add_column :users, :sex, :string
    add_column :users, :weight, :string
    add_column :users, :age, :string
  end
end

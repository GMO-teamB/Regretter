class CreateTraining < ActiveRecord::Migration[6.0]
  def change
    create_table :trainings do |t|

      t.string :name, null: false
      t.integer :calorie, null: false

    end
  end
end

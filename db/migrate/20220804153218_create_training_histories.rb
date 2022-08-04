class CreateTrainingHistories < ActiveRecord::Migration[6.0]
  def change
    create_table :training_historys do |t|
      t.string :uid, null: false, unique: true
      t.string :sex,null: false
      t.string :training_name, null: false
      t.integer :training_time, null: false

    end
  end
end

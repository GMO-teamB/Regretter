class RemoveCurrentSignInAtFromUser < ActiveRecord::Migration[6.0]
  def change
    remove_column :users, :current_sign_in_at, :datetime
  end
end

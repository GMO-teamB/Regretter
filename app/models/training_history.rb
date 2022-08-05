# --- ここから追加 ---
class Training_history < ApplicationRecord  
    validates :uid, presence: true, numericality: { only_integer: true },uniqueness: true,null: false
    validates :training_name,null: false,uniqueness: true
    validates :training_id, numericality: { greater_than_or_equal_to: 0 }
    validates :training_time, numericality: { greater_than_or_equal_to: 0 }
  end

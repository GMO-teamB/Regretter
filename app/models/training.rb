class Training < ApplicationRecord
    validates :name, presence: true
    validates :calorie, presence: true, numericality: { greater_than: 0 }
    validates :category_id, presence: true, numericality: { greater_than_or_equal_to: 0 }
  end
  
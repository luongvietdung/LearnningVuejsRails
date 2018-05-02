class CreateStocks < ActiveRecord::Migration[5.1]
  def change
    create_table :stocks do |t|
      t.string :color
      t.integer :stock
      t.references :product, index: true
      t.timestamps
    end
  end
end

class CreateProducts < ActiveRecord::Migration[5.1]
  def change
    create_table :products do |t|
      t.string :name
      t.string :image
      t.text :detail
      t.decimal :price, precision: 10, scale: 2

      t.timestamps
    end
  end
end

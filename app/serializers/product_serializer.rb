class ProductSerializer < ActiveModel::Serializer
  attributes :name, :image_url, :price, :detail

  has_many :stocks
end

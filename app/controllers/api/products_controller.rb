module Api
  class ProductsController < BaseController
    def index
      @products = Product.all
      render json: @products
    end
  end
end

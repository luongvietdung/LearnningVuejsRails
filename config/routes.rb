Rails.application.routes.draw do
  root 'spa#root'

  namespace :api, defaults: { format: :json } do
    resources :products, only: :index
  end
end

Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "root#index"

  namespace :api do
    namespace :v1 do
      resources :greetings, only: ['index']
    end
  end

  get '/greeting', to: 'root#index'
end

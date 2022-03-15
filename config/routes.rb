Rails.application.routes.draw do
  resources :friends
  resources :shelters
  resources :waitlists
  resources :visits
  resources :owners
  resources :pets
  # route to test your configuration
  get '/hello', to: 'application#hello_world'

  post"/login", to: "sessions#create"
  delete"/logout", to: "sessions#destroy"
  post"/signup", to: "pets#create"
  get"/me", to: "pets#showme"

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end

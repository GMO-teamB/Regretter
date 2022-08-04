Rails.application.routes.draw do
  get 'login', to: 'homes#top'
  devise_for :users, controllers: { omniauth_callbacks: 'users/omniauth_callbacks' }
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :users, only: [:index, :update]
  get '/tweet', to: 'twitters#tweet'
end

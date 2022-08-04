Rails.application.routes.draw do
  get '/', to: 'homes#top'
  devise_for :users, controllers: { omniauth_callbacks: 'users/omniauth_callbacks' }
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :users, only: [:index, :update]
  get '/tweet', to: 'twitters#tweet'
  # get '/app/top', to: 'react_front#react'
  # get '/app/task', to: 'react_front#react'
  get '/app/:path', to: 'react_front#react'
end

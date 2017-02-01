Rails.application.routes.draw do
  root 'welcome#index'

  resources :users
  resource :session, only: [:create, :destroy]
end

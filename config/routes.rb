Rails.application.routes.draw do
  devise_for :accounts, controllers: {
      registrations: 'accounts/registrations',
      confirmations: 'accounts/confirmations',
    }
  
  devise_scope :account do
    get 'sign_up', to: 'accounts/registrations#new', via: [:get]
  end
  
  get 'registration/index'
  match '*path' => 'registration#index', via: [ :get ]

  root to: "main#index"
  match '*path' => 'main#index', via: [ :get ]

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

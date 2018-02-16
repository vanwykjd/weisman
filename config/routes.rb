Rails.application.routes.draw do
  
  get 'account/new', to: 'accounts#signup'
  
  get 'signup', to: 'signup#new'

  devise_for :accounts, controllers: {
      registrations: 'accounts/registrations',
      confirmations: 'accounts/confirmations',
    }
  
  resources :accounts, only: [:show]
  
  authenticated :accounts do
    root to: 'accounts#show', as: :authenticated_root
  end
  
  root to: "main#index"
  match '*path' => 'main#index', via: [ :get ]

end

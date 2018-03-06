Rails.application.routes.draw do
  
  namespace :accounts do
    get 'dashboard/show'
  end

  namespace :accounts do    
    get 'signup/new'
    get 'signup/edit'
  end

  devise_for :accounts, controllers: {
      registrations: 'accounts/registrations',
      confirmations: 'accounts/confirmations',
  }

  devise_scope :account do
    get 'signup_form', to: 'accounts/registrations#new'
    get 'signup', to: 'accounts/registrations#signup'
    get 'registration_progress', to: 'accounts/registrations#signup_session'
    get 'selected_plan', to: 'accounts/registrations#selected_plan'
  end
  
  
  authenticated :accounts do
    root to: 'accounts/dashboard#show', as: :authenticated_root
  end
  
  root to: "main#index"
  match '*path' => 'main#index', via: [ :get ]

end

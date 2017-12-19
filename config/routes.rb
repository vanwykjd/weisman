Rails.application.routes.draw do
  get 'registration/index'
  match '*path' => 'registration#index', via: [ :get ]

  root to: "main#index"
  match '*path' => 'main#index', via: [ :get ]

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

class AccountsController < ApplicationController
  include AccountsHelper
  
  respond_to :json
  respond_to :js
  
  before_action :authenticate_account!, only: [:show]
  before_action :get_progress, only: [ :signup ]
  
  def show
    	@account = Account.find(params[:id] || current_account.id)
        unless @account == current_account
          redirect_to new_account_session_path, :alert => "You are not signed in."
        end
        
        unless @account.registration_progress == 4
          redirect_to signup_path, :alert => "You must finish signing up."
        end
  end
  
  def signup
    render json: @account , status: 200
  end
  
  private

  def get_progress    
    if current_account
      @account = current_account
    else
      @account = {
       registration_progress: 0,  
       nextStep: '',
       prevStep: '', 
       plan: '',
       email: '',
       acctInfo: ''
     }
    end
  end
  
end

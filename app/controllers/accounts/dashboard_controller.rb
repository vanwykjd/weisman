class Accounts::DashboardController < ApplicationController
  
  def show
    unless current_account.registration_progress == 'completed'
      redirect_to signup_path
    end
  end
  
end

class MainController < ApplicationController

  def index
    if current_account
      if current_account.registration_progress == 'complete'
        redirect_to authenticated_root_path
      else
        redirect_to signup_path
      end
    end
  end
  
end

class MainController < ApplicationController
  
  def index
    redirect_to account_path(current_account) if current_account
  end
end

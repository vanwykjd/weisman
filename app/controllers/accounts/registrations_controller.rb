# frozen_string_literal: true

class Accounts::RegistrationsController < Devise::RegistrationsController

  respond_to :json
  respond_to :js
  
  before_action :get_progress, only: [ :signup_session ]
  before_action :configure_sign_up_params, only: [:create]
  before_action :configure_account_update_params, only: [:update]

  # GET /resource/sign_up
  # def new
  #   super
  # end

  # POST /resource
  def create
    build_resource(sign_up_params)
    
    @customer = Stripe::Customer.create(:email => resource.email)
    
    resource.account_id = @customer.id
  
    resource.save
    yield resource if block_given?
    if resource.persisted?
      if resource.active_for_authentication?
        set_flash_message! :notice, :signed_up
        sign_up(resource_name, resource)
        sign_in(resource_name, resource)
        respond_with resource, location: after_sign_up_path_for(resource)
      else
        set_flash_message! :notice, :"signed_up_but_#{resource.inactive_message}"
        expire_data_after_sign_in!
        respond_with resource, location: after_inactive_sign_up_path_for(resource)
      end
    else
      cancel_stripe_customer
      clean_up_passwords resource
      set_minimum_password_length
      respond_with resource
    end
  end

  # GET /resource/edit
  # def edit
  #   super
  # end

  # PUT /resource
  def update
    self.resource = resource_class.to_adapter.get!(send(:"current_#{resource_name}").to_key)
    prev_unconfirmed_email = resource.unconfirmed_email if resource.respond_to?(:unconfirmed_email)
    
   
    if subscribed?
      resource_updated = update_resource(resource, account_update_params)
    else
      resource_updated = update_signup(resource, account_update_params)
    end
    
    yield resource if block_given?
    if resource_updated
      if is_flashing_format?
        flash_key = update_needs_confirmation?(resource, prev_unconfirmed_email) ?
          :update_needs_confirmation : :updated
        set_flash_message :notice, flash_key
      end
      bypass_sign_in resource, scope: resource_name
      respond_with resource, location: after_update_path_for(resource)
    else
      clean_up_passwords resource
      set_minimum_password_length
      respond_with resource
    end
  end
  
  # DELETE /resource
  # def destroy
  #   super
  # end

  # GET /resource/cancel
  # Forces the session data which is usually expired after sign
  # in to be expired now. This is useful if the user wants to
  # cancel oauth signing in/up in the middle of the process,
  # removing all OAuth session data.
  # def cancel
  #   super
  # end
  def signup
    build_resource
    yield resource if block_given?
    respond_with resource
  end
  
  def signup_session
    render json: @account, status: 200
  end
  
  def selected_plan
    render json: @plan, status: 200
  end
  
  def subscription_checkout
    plan_id = current_account.plan_id
    plan = Stripe::Plan.retrieve(plan_id)
    
    customer_id = current_account.account_id
    
    @customer = Stripe::Customer.retrieve(customer_id)
    
    @subscription = Stripe::Subscription.create({
                          customer: @customer.id,
                          items: [{plan: plan.id}],
                      })
    
  end

  protected

  # If you have extra params to permit, append them to the sanitizer.
  def configure_sign_up_params
     devise_parameter_sanitizer.permit(:sign_up, keys: [:plan_id, :registration_progress, :account_id])
  end

  # If you have extra params to permit, append them to the sanitizer.
  def configure_account_update_params
    devise_parameter_sanitizer.permit(:account_update, keys: [:attributes, :first_name, :last_name, :password, :password_confirmation, :registration_progress, :subscription_id, :plan_id, :company_name ])
  end

  # The path used after sign up.
  def after_sign_up_path_for(resource)
    edit_account_registration_path
  end


  def update_signup(resource, params)
    resource.update_without_password(params)
  end

  # The path used after sign up for inactive accounts.
  # def after_inactive_sign_up_path_for(resource)
  #   signup_path(@account)
  # end
  
  private
  
  def get_progress    
    if current_account
      if current_account.plan_id
        
        @signup = current_account
        
        plan_id = current_account.plan_id
        @plan = Stripe::Plan.retrieve(plan_id)
        
        @signup.plan_id = @plan.to_json

        @account = @signup
      else
        @account = account
      end
    else
      @account = self.build_resource
    end
  end
  
  def get_plan
    if current_account
      plan_id = current_account.plan_id
      @plan = Stripe::Plan.retrieve(plan_id)
    else
      @account = self.build_resource
    end
  end
  
  def cancel_stripe_customer
    @cu = Stripe::Customer.retrieve(@customer.id)
    @cu.delete
  end
  
  def subscribed?
    unless current_account.subscription_id?
      false
    end
  end
  

  def sign_up(_resource_name, _resource)
    true
  end
  
end

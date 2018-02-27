module StripeTool
  
  def self.create_account(email: email, stripe_token: stripe_token)
    Stripe::Customer.create(
      email: email,
      source: stripe_token
    )
  end
  
  def self.create_subscription(email: email, stripe_token: stripe_token, plan: plan)
    Stripe::Customer.create(
      email: email,
      source: stripe_token,
      plan: plan
    )
  end

  def self.create_payment(customer_id: customer_id, amount: amount, description: description)
    Stripe::Charge.create(
      customer: customer_id,
      amount: amount,
      description: description,
      currency: 'usd'
    )
  end
  
end
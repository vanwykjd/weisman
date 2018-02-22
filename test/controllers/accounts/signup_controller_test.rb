require 'test_helper'

class Accounts::SignupControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get accounts_signup_new_url
    assert_response :success
  end

  test "should get edit" do
    get accounts_signup_edit_url
    assert_response :success
  end

end

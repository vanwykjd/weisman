require 'test_helper'

class AccountsControllerTest < ActionDispatch::IntegrationTest
  test "should get sign_up" do
    get accounts_sign_up_url
    assert_response :success
  end

end

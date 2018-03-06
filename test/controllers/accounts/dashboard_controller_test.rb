require 'test_helper'

class Accounts::DashboardControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get accounts_dashboard_show_url
    assert_response :success
  end

end

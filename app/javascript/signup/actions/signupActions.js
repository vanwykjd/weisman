import axios from 'axios';


export function registrationRequest(event, acctInfo) {
      
  return dispatch => {
    event.preventDefault();
    
    function getToken() {
        var token =''
        const request = new XMLHttpRequest();
            request.open("GET", '/signup_form', true);
            request.responseType = 'document';

            request.onreadystatechange = () => {
              if (request.readyState == 4 && request.status == 200 ) {
                const formData = request.response;
                const formInput = formData.getElementsByTagName('input');
                token = formInput[1].value;
                
                const inputData = {
                          authenticity_token: token,
                          utf8: '✓',
                          account: {
                            registration_progress: acctInfo.registration_progress,
                            plan_id: acctInfo.plan_id,
                            email: acctInfo.email,
                            password: acctInfo.password,
                            password_confirmation: acctInfo.pasword_confirmation
                          }
                }
      
                $.ajax({
                 type: 'POST',
                 url: 'http://localhost:3000/accounts',
                 dataType: 'json',
                 data: inputData,
                 error: function (error) {
                  const err = JSON.stringify(error.responseText) 
                  alert(err);
                 },
                 success: function (data) {
                   location.reload();
                  }
                })
              }
            }
            request.send();
        }
        return getToken();
  }
}

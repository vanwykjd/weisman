export function registerRequest(event, acctInfo, errorCheck, clearForm, getStatus, setAcctInfo, next) {

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
                            password_confirmation: acctInfo.password_confirmation
                          }
                }
      
                $.ajax({
                 type: 'POST',
                 url: 'http://localhost:3000/accounts',
                 dataType: 'json',
                 data: inputData,
                 error: function (response) {
                  const resJSON = response.responseJSON;
                  const emailError = resJSON.errors['email']
                  const pswError = resJSON.errors['password']
                  const pswConfError = resJSON.errors['password_confirmation']
                  
                  console.log(resJSON);
                  var msgArr = [];
                   
                   if (emailError) {
                     emailError.forEach(function(msg) {
                       msgArr.push("Email " + msg + ".");
                     })
                
                   }
                   if (pswError) {
                      pswError.forEach(function(msg) {
                        msgArr.push("Password " + msg + ".");
                     })
      
                   }
                   if (pswConfError) {
                      pswConfError.forEach(function(msg) {
                        msgArr.push("Password Confirmation " + msg + ".");
                     })

                   }
                   
                   errorCheck(msgArr);
                   clearForm;
                 },
                 success: function (data) {
                   getStatus();
                   next();
                  }
                })
              }
            }
            request.send();
        }
        return getToken();
  }
}


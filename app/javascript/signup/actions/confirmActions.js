export function confirmRequest(event, updateInfo, errorCheck, clearForm, getStatus, setAcctInfo, next) {
      
  return dispatch => {
    event.preventDefault();
    
    function getToken() {
        var token = '';
        var method = '';
      
        const request = new XMLHttpRequest();
            request.open("GET", '/accounts/edit', true);
            request.responseType = 'document';

            request.onreadystatechange = () => {
              if (request.readyState == 4 && request.status == 200 ) {
                const formData = request.response;
                const formInput = formData.getElementsByTagName('input');
                method = formInput[1].value;
                token = formInput[2].value;
                
                const inputData = {
                          utf8: '✓',
                          _method: method,
                          authenticity_token: token,
                          account: {
                            registration_progress: updateInfo.registration_progress,
                            plan_id: updateInfo.plan_id,
                            company_name: updateInfo.company_name,
                            first_name: updateInfo.first_name,
                            last_name: updateInfo.last_name
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
                 success: function () {
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

import React, { Component } from 'react';
import RegisterForm from './../components/RegisterForm'; // Component to serve as form to input acctInfo data
import { connect } from 'react-redux';
import { registrationRequest } from './../actions/signupActions';
import PropTypes from 'prop-types';

class Registration extends React.Component {
  constructor(props) {
     super(props);
     /*
     this.state = ({
            plan_id: this.props.plan.id,
            email: '',
            password: '',
            password_confirmation: ''
      });
     this.handleSubmit = this.handleSubmit.bind(this);
     this.handleChange = this.handleChange.bind(this);
     this.generateForm = this.generateForm.bind(this);
      */
     this.saveAndContinue = this.saveAndContinue.bind(this);
  }
  /*
  componentWillMount(){
    return this.generateForm();
  }
 
  handleChange(e) {
    const value = e.target.value;
    const name = e.target.id;
    
    this.setState({
        [name]: value
    });
  }
  
  handleSubmit(e) {
    e.preventDefault();
     
    this.props.accountSignupRequest(this.state);
    const inputData = {
            authenticity_token: this.props.token,
            utf8: '✓',
            account: {
              plan_id: this.props.plan.id,
              registration_progress: this.props.nextStep,
              email: this.state.email,
              password: this.state.password,
              password_confirmation: this.state.password_confirmation
        }
    }
    
    axios({
      method: 'post',
      url: 'http://localhost:3000/accounts',
      data: inputData
    }).then(res => {
        if (res.status == 200 && res.statusText == 'OK' ){
          return (<Continue
                    getStatus={this.props.getStatus}
                    next={this.props.next} />)   
        }
    })
    
  }

  submitForm(e) {
      e.preventDefault();
      const request = new XMLHttpRequest();
      request.open("GET", '/accounts/sign_up', true);
      request.responseType = 'document';

      request.onreadystatechange = () => {
        if (request.readyState == 4 && request.status == 200 ) {
          const formData = request.response;
          const form = formData.getElementsByTagName('input');
          const aValue = form[1].value;
          const uValue = form[0].value;
          
          const inputData = {
            authenticity_token: aValue,
            utf8: uValue,
            account: {
              plan_id: this.props.plan.id,
              registration_progress: this.props.nextStep,
              email: this.state.email,
              password: this.state.password,
              password_confirmation: this.state.password_confirmation
            }
          }
          
          $.ajax({
            url: '/accounts',
            dataType: 'json',
            type: 'POST',
            data: inputData,
            
            success: function(data) {
              this.props.setAcctInfo(data);
              this.props.next();
            }.bind(this),
            
            error: function() {
              const errRequest = new XMLHttpRequest();
              errRequest.open("GET", '/accounts', true);
              errRequest.responseType = 'document';

              errRequest.onreadystatechange = () => {
                if (errRequest.readyState == 4 && errRequest.status == 200 ) {
                    const errData = errRequest.response;
                    const errExp = errData.getElementById('error_explanation');
                    const errForm = document.getElementById('new_account');
                    console.log(errData);
                }
              }
              errRequest.send();
            }.bind(this)
            
          });
        }
      }
      request.send();
    }
  
  
  submitForm(e) {
      e.preventDefault();
      const form = document.getElementsByTagName('input');
      const aValue = form[1].value;
      const uValue = form[0].value;
          
          const inputData = {
            authenticity_token: aValue,
            utf8: uValue,
            account: {
              plan_id: this.props.plan.id,
              registration_progress: this.props.nextStep,
              email: this.state.email,
              password: this.state.password,
              password_confirmation: this.state.password_confirmation
            }
          }
          
          $.ajax({
            url: '/accounts',
            dataType: 'json',
            type: 'POST',
            data: inputData,
            success: function(data) {
              this.props.setAcctInfo(data);
              this.props.next();
            }.bind(this),
            error: function() {
              console.log('shit');
            }.bind(this)
          });
      }
    
  generateForm() {
    const request = new XMLHttpRequest();
      request.open("GET", '/registrations/signup', true);
      request.responseType = 'document';

      request.onreadystatechange = () => {
        if (request.readyState == 4 && request.status == 200 ) {
          const formData = request.response;
          const formInput = formData.getElementsByTagName('input');
          const form = document.getElementById('new_account');
          
          const aValue = formInput[1];
          const uValue = formInput[0];
          
          form.prepend(aValue);
          form.prepend(uValue);
          
          
          console.log(aValue);
          console.log(uValue);
        }
      }
      request.send();
  }
  */
  saveAndContinue(e) {
    e.preventDefault()
      this.props.next()
  }
 
  render() {
    const { registrationRequest } = this.props;
    const registration_progress = this.props.registration_progress;
    const plan_id = this.props.plan.id; 
    const nextStep = this.props.nextStep;
    const prevStep = this.props.prevStep;
    const acctInfo = this.props.acctInfo;
    const srcInfo = this.props.srcInfo;

    
    return (
      <div className='devise-form'>
        <div className='text-center form-header'>
          <h5>Create your Barweiser account.</h5>
        </div>
         <div id="error_explanation">
        </div>
        <RegisterForm 
          registrationRequest={registrationRequest}
          plan_id={plan_id}
          registration_progress={nextStep}
          continue={this.saveAndContinue} />
        
        <input type="primary" value='Continue' className='btn sign-up-btn' onClick={this.props.saveAndContinue} />
        <input type="primary" value='Go Back' className='btn sign-up-btn' onClick={this.props.previous} />
      
      
        <div>{JSON.stringify(plan_id)}</div>
        <div>{registration_progress}</div>
        <div>{nextStep}</div>
        <div>{prevStep}</div>
        <div>{JSON.stringify(acctInfo)}</div>
        <div>{JSON.stringify(srcInfo)}</div>
        
      </div>
    );
  }
}

Registration.propTypes = {
  registrationRequest: PropTypes.func.isRequired
}

export default connect(null, { registrationRequest })(Registration);
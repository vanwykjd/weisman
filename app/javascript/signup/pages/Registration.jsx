import React, { Component } from 'react';
import RegisterForm from './../components/RegisterForm'; // Component to serve as form to input acctInfo data

class Registration extends React.Component {
  constructor(props) {
     super(props);
     this.state = ({
        email: '',  //--email key/value of acctInfo object in SignUp.jsx state
        password: '', //--password key/value of acctInfo object in SignUp.jsx state
        password_conf: '' //--password_conf key/value of acctInfo object in SignUp.jsx state
    });
     
     this.inputInfo = this.inputInfo.bind(this);
     this.saveAndContinue = this.saveAndContinue.bind(this);
     this.submitData = this.submitData.bind(this);
  }
  
  // Func to set state[email, password, password_conf] --- passed into props 
  inputInfo(e) {
    const value = e.target.value;
    const name = e.target.name;
    
    this.setState({
      [name]: value 
    });
  }
  
  saveAndContinue(e) {
    e.preventDefault()
    this.props.setAcctInfo(this.state)
    this.submitData()
    this.props.nextStep()
  }
  
  // Func is suppose to replicate and submit data to Devise accounts::registrations#create as if form submitted from accounts/sign_up --- Unable to submit due to missing CSRF token
  submitData() {
      const url = 'http://localhost:3000/accounts';
      const data = this.state;

      fetch(url, {
        method: 'POST',
        body: JSON.stringify(data), 
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));
    }
  
  // Need a function to pass [state.acctInfo, state.plan] objects to Stripe to create an account, then have a callback containing the Stripe account number to assign as an accountId //
  
  render() {
    
    const email = this.state.email;
    const password = this.state.password;
    const password_conf = this.state.password_conf;
    
    return (
      <div className='devise-form'>
        <div className='text-center form-header'>
          <h5>Create your Barweiser account.</h5>
        </div>
        <RegisterForm
          email={email}
          password={password}
          password_conf={password_conf}
          inputInfo={this.inputInfo} /> 
        <input type="primary" value='Continue' className='btn sign-up-btn' onClick={this.saveAndContinue} />
        <input type="primary" value='Go Back' className='btn sign-up-btn' onClick={this.props.previousStep} />
      </div>
    );
  }
}

export default Registration
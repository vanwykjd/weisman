import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RegisterForm extends React.Component {
  constructor(props) {
    super(props)
    super(props)
    this.state = ({
        email: '',
        password: '',
        password_conf: '',
        plan: this.props.plan
    });
    
    //this.generateForm = this.generateForm.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }
   /*
  componentWillMount() {
    this.generateForm();
  }
 
  generateForm() {
    const request = new XMLHttpRequest();
    
    request.open("GET", 'http://localhost:3000/accounts/sign_up');
    request.responseType = 'document';
    
    request.onload = function() {
      const data = request.response.getElementsByTagName('input');
      const form = document.getElementById('new_account');
      form.prepend(data[1]);
      console.log(data[1]);
    }
    
    request.send();
  }
  */
  // enables to set states in Registration.jsx --- passed through props
  handleInput(e) {
    this.props.handleChange(e);
  }
  
  
  render() { 
    const token = this.props.token;
    
    const registration_progress = this.props.nextStep;
    const plan_id = this.props.plan.id;
  
    const email = this.state.email;
    const password = this.state.password;
    const password_conf = this.state.password_confirmation;
    

    return (
   <form className="new_account" id="new_account" method="post" action="/accounts" onSubmit={this.saveAndContinue}>
          <input name="utf8" type="hidden" defaultValue="✓" />
          <input name="plan_id" type="hidden" defaultValue={plan_id} />
          <input name="registration_progress" type="hidden" defaultValue={registration_progress} />
          <div className='form-group'>
            <input className='form-control' type='email' name='email' value={email} id="account_email"  placeholder="Email" onChange={this.handleInput}/>
          </div>
          <div className='form-group'>
            <input className='form-control' type="password" name='password' value={password} id="account_password" placeholder="Password" onChange={this.handleInput}/>
          </div>
          <div className='form-group'>
            <input className='form-control' type="password" name='password_confirmation' value={password_confirmation} id="account_password_conf" placeholder="Password Confirmation" onChange={this.handleInput}/>
          </div>
    </form>
    );
  }
}

export default RegisterForm
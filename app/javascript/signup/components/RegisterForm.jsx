import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RegisterForm extends React.Component {
  constructor(props) {
    super(props)
    
    
    //this.generateForm = this.generateForm.bind(this);
    this.handleInput = this.handleInput.bind(this);
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

    return (
      <div className='form-group'>
        <input name="account[plan_id]" type="hidden" defaultValue={this.props.account.plan_id} />
        <input name="account[registration_progress]" type="hidden" defaultValue={this.props.account.registration_progress} />
        <input className='form-control' type='email' name='account[email]' value={this.props.account.email} id="email"  placeholder="Email" onChange={this.handleInput}/>
        <input className='form-control' type="password" name='account[password]' value={this.props.account.password} id="password" placeholder="Password" onChange={this.handleInput}/>
        <input className='form-control' type="password" name='account[password_confirmation]' value={this.props.account.password_confirmation} id="password_confirmation" placeholder="Password Confirmation" onChange={this.handleInput}/>
      </div>

    );
  }
}

export default RegisterForm
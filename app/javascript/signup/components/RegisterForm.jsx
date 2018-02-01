import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RegisterForm extends React.Component {
  constructor(props) {
    super(props)
    
    this.handleChange = this.handleChange.bind(this);
  }
  
  
  // enables to set states in Registration.jsx --- passed through props
  handleChange(e) {
    this.props.inputInfo(e)
  }
  
  render() {  

    return (
         <form className="new_account" id="new_account">
          <input name="utf8" type="hidden" value="✓" />
          <div className='form-group'>
            <input className='form-control' type='email' name='email' value={this.props.email} id="account_email"  placeholder="email" onChange={this.handleChange}/>
          </div>
          <div className='form-group'>
            <input className='form-control' type="password" name='password' value={this.props.password} id="account_password" placeholder="Password" onChange={this.handleChange}/>
          </div>
          <div className='form-group'>
            <input className='form-control' type="password" name='password_conf' value={this.props.password_conf} id="account_password_conf" placeholder="Password Confirmation" onChange={this.handleChange}/>
          </div>
        </form>
    );
  }
}

export default RegisterForm
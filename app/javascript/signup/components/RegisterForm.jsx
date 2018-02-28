import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RegisterForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
            registration_progress: this.props.registration_progress,
            plan_id: this.props.plan_id,
            email: '',
            password: '',
            password_confirmation: ''
      };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }
  
    handleChange(e) {
      const value = e.target.value;
      const name = e.target.name;

      this.setState({
          [name]: value
      });
    }
    
   clearForm() {
    this.setState({
        password: '',
        password_confirmation: ''
      })
   }
  
   handleSubmit(e) {
    e.preventDefault(); 
    const errorCheck = this.props.handleErrors;
    const clearForm = this.clearForm();
    const inputs = this.state;
    const getStatus = this.props.getStatus;
    const setAcctInfo = this.props.setAcctInfo;
    const next = this.props.next;
    this.props.registerRequest(e, inputs, errorCheck, clearForm, getStatus, setAcctInfo, next);
   }
 
  
  render() { 
    const email = this.state.email;
    const password = this.state.password;
    const password_confirmation = this.state.password_confirmation;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input className='form-control' type='email' name='email' value={email} id='account_email' placeholder="Email" onChange={this.handleChange}/>
        </div>
        
        <div className="form-group">
          <input className='form-control' type="password" name='password' value={password} id='account_password' placeholder="Password" onChange={this.handleChange}/>
        </div>
        
        <div className="form-group">
          <input className='form-control' type="password" name='password_confirmation' value={password_confirmation} id='account_password_confirmation' placeholder="Password Confirmation" onChange={this.handleChange}/>
        </div>
        
        <div className="form-group">
          <input type="submit" name="commit" value="Sign up" className='btn sign-up-btn' />
        </div>
      </form>
    );
  }
}

RegisterForm.propTypes = {
  registerRequest: PropTypes.func.isRequired
}

export default RegisterForm;
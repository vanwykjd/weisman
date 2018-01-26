import React, { Component } from 'react';

class Registration extends React.Component {
  constructor(props) {
     super(props);
    
     this.saveAndContinue = this.saveAndContinue.bind(this);
     this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(e) {
    this.props.registrationInput(e)
  }
  
  saveAndContinue(e) {
    e.preventDefault()
      this.props.registrationInput(e)
      this.props.nextStep()
  }
  
  render() {
 
    
    return (
      <div className='devise-form'>
        <div className='text-center form-header'>
          <h5>Create your Barweiser account.</h5>
        </div>
        <form onSubmit={this.saveAndContinue}>
          <div className='form-group'>
            <input className='form-control' name='email' value={this.props.email} type='email' placeholder="email" onChange={this.handleChange}/>
          </div>
          <div className='form-group'>
            <input className='form-control' name='password' value={this.props.password} type="password" placeholder="Password" onChange={this.handleChange}/>
          </div>
          <div className='form-group'>
            <input className='form-control' name='password_conf' value={this.props.password_conf} type="password" placeholder="Password Confirmation" onChange={this.handleChange}/>
          </div>
          <div className='form-group'>
            <input type="primary" value='Continue' className='btn sign-up-btn' onClick={this.saveAndContinue} />
            <input type="primary" value='Go Back' className='btn sign-up-btn' onClick={this.props.previousStep} />
          </div>
          <div>{JSON.stringify(this.props.plan)}</div>
          <div>{this.props.step}</div>
          <div>{this.props.prevStep}</div>
          <div>{JSON.stringify(this.props.card)}</div>
        </form>
      </div>
    );
  }
}

export default Registration
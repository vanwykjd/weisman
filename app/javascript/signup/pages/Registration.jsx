import React, { Component } from 'react';

class Registration extends React.Component {
  constructor(props) {
     super(props);
     this.state = {
       step: this.props.step,
       plan: this.props.plan,
       email: '',
       password: '',
       password_conf: ''
     };
    
     this.saveAndContinue = this.saveAndContinue.bind(this);
     this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    
    this.setState({
      [name]: value
    });
  }
  
  saveAndContinue(e) {
    e.preventDefault()
      this.props.email(this.state.email)
      this.props.password(this.state.password)
      this.props.password_conf(this.state.password_conf)
      this.props.nextStep()
  }
  
  render() {
    return (
      <section className='sign-up text-center'>
        <div className='devise-form'>
          <div className='text-center form-header'>
            <h5>Create your Barweiser account.</h5>
          </div>
          <form onSubmit={this.saveAndContinue}>
            <div className='form-group'>
              <input className='form-control' name='email' value={this.state.email} type='email' placeholder="email" onChange={this.handleChange}/>
            </div>
            <div className='form-group'>
              <input className='form-control' name='password' value={this.state.password} type="password" placeholder="Password" onChange={this.handleChange}/>
            </div>
            <div className='form-group'>
              <input className='form-control' name='password_conf' value={this.state.password_conf} type="password" placeholder="Password Confirmation" onChange={this.handleChange}/>
            </div>
            <div className='form-group'>
              <input type="submit" value='Continue' className='btn sign-up-btn' onClick={this.saveAndContinue} />
            </div>
            <div>{this.state.plan}</div>
            <div>{this.state.step}</div>
          </form>
        </div>
      </section>
    );
  }
}

export default Registration
import React, { Component } from 'react';
//import RegisterForm from './../components/RegisterForm'; // Component to serve as form to input acctInfo data

class Registration extends React.Component {
  constructor(props) {
     super(props);
     this.state = ({
       account: {}
    });
     
   this.handleChange = this.handleChange.bind(this);
   this.saveAndContinue = this.saveAndContinue.bind(this);
   //this.submitForm = this.submitForm.bind(this);
   //this.generateFormInput = this.generateFormInput.bind(this);

  }
  
  
  
  handleChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    
    this.setState({
      account: {
        [name]: value
      }
    });
  }
  /*
  componentWillMount() {
    this.generateFormInput();
  }
  generateFormInput() {
    const request = new XMLHttpRequest();
    request.open("GET", '/accounts/sign_up');
    request.responseType = 'document';
    
    request.onreadystatechange = () => {
      if (request.readyState == 4 && request.status == 200 ) {
        const data = request.response;
        const reqForm = data.getElementsByTagName('input');
        const form = document.getElementById('new_account');
        form.prepend(reqForm[1]);
      }
    }
    request.send();
  }
  */
 
  
  
  saveAndContinue(e) {
    e.preventDefault()
    this.props.setAcctInfo(this.state)
    this.props.next()
  }
  
 
  render() {
    
    const email = this.state.account.email;
    const password = this.state.account.password;
    const password_confirmation = this.state.account.password_confirmation;
    
    const registration_progress = this.props.registration_progress;
    const nextStep = this.props.nextStep;
    const prevStep = this.props.prevStep;
    const plan_id = this.props.plan.id; 
    const acctInfo = this.props.acctInfo;
    const srcInfo = this.props.srcInfo;

    
    return (
      <div className='devise-form'>
        <div className='text-center form-header'>
          <h5>Create your Barweiser account.</h5>
        </div>
        <form className="new_account" id="new_account" method="post" action="/accounts"data-remote="true" onSubmit={this.saveAndContinue}>
          <input name="utf8" type="hidden" defaultValue="✓" />
          <input name="account[plan_id]" type="hidden" defaultValue={plan_id} />
          <input name="account[registration_progress]" type="hidden" defaultValue={nextStep} />
          <div className='form-group'>
            <input className='form-control' type='email' name='account[email]' value={email} id="account_email"  placeholder="Email" onChange={this.handleInput}/>
          </div>
          <div className='form-group'>
            <input className='form-control' type="password" name='account[password]' value={password} id="account_password" placeholder="Password" onChange={this.handleInput}/>
          </div>
          <div className='form-group'>
            <input className='form-control' type="password" name='account[password_confirmation]' value={password_confirmation} id="password_confirmation" placeholder="Password Confirmation" onChange={this.handleInput}/>
          </div>
          <input type="submit" name="commit" value="Sign up" className='btn sign-up-btn' data-disable-with="Sign up"/>

        </form>
          
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

export default Registration
import React, { Component } from 'react';
//import RegisterForm from './../components/RegisterForm'; // Component to serve as form to input acctInfo data

class Registration extends React.Component {
  constructor(props) {
     super(props);
     this.state = ({
           email: '',
           password: '',
           password_confirmation: ''
      });
     
     this.handleChange = this.handleChange.bind(this);
   //this.saveAndContinue = this.saveAndContinue.bind(this);
     this.submitForm = this.submitForm.bind(this);
   //this.generateFormInput = this.generateFormInput.bind(this);

  }
  
  
  
  handleChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    
    this.setState({
        [name]: value
    });
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
  
  /*submitForm() {
      const request = new XMLHttpRequest();
      request.open("GET", '/accounts/sign_up', true);
      request.responseType = 'document';

      request.onreadystatechange = () => {
        if (request.readyState == 4 && request.status == 200 ) {
          const formData = request.response;
          const form = formData.getElementsByTagName('input');
          const aValue = form[1].value;
          const uValue = form[0].value;
          
          const newHeaders = {
            authenticity_token: aValue,
            utf8: uValue
          }
          
          const data = {
            account: {
              plan_id: this.props.plan.id,
              registration_progress: this.props.nextStep,
              email: this.state.email,
              password: this.state.password,
              password_confirmation: this.state.password_confirmation
            }
          }
          fetch('/accounts', {
            method: 'POST',
            body: JSON.stringify(data), 
            headers:{
              'Content-Type': 'text/html',
            }
  
            }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));
        }
      }
      request.send();
    }
    */
    /*
    fetch('/accounts', {
      method: 'POST',
      body: JSON.stringify(data), 
      headers: new Headers({
        'Content-Type': 'application/json',
      })
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));

  
 
  
  
  saveAndContinue(e) {
    e.preventDefault()
    this.props.setAcctInfo(this.state)
    this.props.next()
  }
      */
 
  render() {
    
    const email = this.state.email;
    const password = this.state.password;
    const password_confirmation = this.state.password_confirmation

    const registration_progress = this.props.registration_progress;
    const plan_id = this.props.plan_id; 
    const nextStep = this.props.nextStep;
    const prevStep = this.props.prevStep;
    const acctInfo = this.props.acctInfo;
    const srcInfo = this.props.srcInfo;

    
    return (
      <div className='devise-form'>
        <div className='text-center form-header'>
          <h5>Create your Barweiser account.</h5>
        </div>
        <form className="new_account" id="new_account" method="post" action="/accounts" data-remote="true">
          <input className='form-control' type='email' name='email' value={email} id="email"  placeholder="Email" onChange={this.handleChange}/>
          <input className='form-control' type="password" name='password' value={password} id="password" placeholder="Password" onChange={this.handleChange}/>
          <input className='form-control' type="password" name='password_confirmation' value={password_confirmation} id="password_confirmation" placeholder="Password Confirmation" onChange={this.handleChange}/>

          <input type="button" name="commit" value="Sign up" className='btn sign-up-btn' data-disable-with="Sign up" onClick={this.submitForm}/>
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
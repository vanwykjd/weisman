import React, { Component } from 'react';
import Plan from './../components/Plan'

class Subscribe extends Component { 
  constructor(props) {
     super(props);
     this.saveAndContinue = this.saveAndContinue.bind(this);
  }
  
  saveAndContinue(e) {
    e.preventDefault()
      this.props.next()
  }
  
  render() {
     const registration_progress = this.props.registration_progress;
     const nextStep = this.props.nextStep;
     const prevStep = this.props.prevStep;
     const plan = this.props.plan;
     const acctInfo = this.props.acctInfo.account;
     const srcInfo = this.props.srcInfo; 
   
     return (
        <div className='d-flex justify-content-center'>
         <div className='devise-form' style={{display: 'inline-block'}}>
           <Plan 
              name={plan.name}
              amount={plan.amount} />
         </div>
         
         <div className='devise-form' style={{display: 'inline-block'}}>
            <div>Email: {acctInfo.email}</div>
            <div>Password: {acctInfo.password}</div>
            <div>Password Conf: {acctInfo.password_conf}</div> 
         </div>
         
         <div className='devise-form' style={{display: 'inline-block'}}>
          <div>{JSON.stringify(srcInfo)}</div>
         </div>
         
         <div className='form-group'>
          <input type="primary" value='Continue' className='btn sign-up-btn' onClick={this.saveAndContinue} />
          <input type="primary" value='Go Back' className='btn sign-up-btn' onClick={this.props.previous} />
         </div>
         
        </div>
         
     );
   }
}

export default Subscribe;
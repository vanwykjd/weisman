import React, { Component } from 'react';
import Plan from './../components/Plan'; // Component to serve as container for plan data that has been set as state.plan in SignUp.jsx
import PaymentForm from './../components/PaymentForm'; // Component to serve as container for srcInfo data **Payment Info**
import { Card }  from './../components/Card'; // Component to serve as form to input srcInfo data **Payment Info**


class Confirm extends Component { 
  constructor(props) {
     super(props);
    
     this.saveAndContinue = this.saveAndContinue.bind(this);
  }
  
   // Func sets state.srcInfo and state.step of SignUp.jsx --- Funcs passed through props
  saveAndContinue(e) {
    e.preventDefault()
      this.props.setSrcInfo(this.props.card)
    
      this.props.next()
  }
  
  // Need a function to pass state.srcInfo object to Stripe to create a source-token to attach to account number //
  
  render() {
    
     const registration_progress = this.props.registration_progress;
     const nextStep = this.props.nextStep;
     const prevStep = this.props.prevStep;
     const plan = this.props.plan; 
     const acctInfo = this.props.acctInfo;
     const account = this.props.account;
    
     return (
       <div className='planform-container'>
        <div className='d-flex justify-content-center'>
          
         <div className='devise-form' style={{display: 'inline-block'}}>
            <Plan 
                name={plan.name}
                amount={plan.amount} />
            <input type="primary" value='Edit' className='btn sign-up-btn' onClick={() => this.props.edit(1)} />
         </div>
          
          
         <div className='devise-form' style={{display: 'inline-block'}}>
            <div className='text-center form-header'>
              <h5>Enter your payment info.</h5>
            </div>
            <div>{account.id}</div>
            <div>{account.email}</div>
            <div>{acctInfo.password}</div>
            <div>{acctInfo.password_confirmation}</div> 
            <input type="primary" value='Edit' className='btn sign-up-btn' onClick={() => this.props.edit(5)} />
         </div>
          
          
         <div className='devise-form' style={{display: 'inline-block'}}>
            <div className='text-center form-header'>
              <h5>Enter your payment info.</h5>
            </div>
           <PaymentForm 
              srcInfo={this.props.srcInfo}
              setSrcInfo={this.props.setSrcInfo} />
         </div>
          </div>
            <div className='form-group'>
              <input type="primary" value='Continue' className='btn sign-up-btn' onClick={this.saveAndContinue} />
            </div>
         </div>
        
         
     );
   }
}

export default Confirm;
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
    const card = this.props.srcInfo; // Constant set to state.srcInfo in SignUp.jsx --- passed through props
    
    e.preventDefault()
      this.props.nextStep()
      this.props.setSrcInfo(card)
  }
  
  // Need a function to pass state.srcInfo object to Stripe to create a source-token to attach to account number //
  
  render() {
    
     return (
       <div className='planform-container'>
        <div className='d-flex justify-content-center'>
          
         <div className='devise-form' style={{display: 'inline-block'}}>
            <Plan 
                name={this.props.plan.name}
                amount={this.props.plan.amount} />
            <input type="primary" value='Edit' className='btn sign-up-btn' onClick={() => this.props.editStep(0)} />
         </div>
          
          
         <div className='devise-form' style={{display: 'inline-block'}}>
            <div>{this.props.step}</div>
            <div>{this.props.prevStep}</div>
            <div>{this.props.acctInfo.email}</div>
            <div>{this.props.acctInfo.password}</div>
            <div>{this.props.acctInfo.password_conf}</div> 
            <div>{JSON.stringify(this.props.srcInfo)}</div>
            <input type="primary" value='Edit' className='btn sign-up-btn' onClick={() => this.props.editStep(1)} />
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
              <input type="primary" value='Go Back' className='btn sign-up-btn' onClick={this.props.previousStep} />
              <input type="primary" value='Continue' className='btn sign-up-btn' onClick={this.saveAndContinue} />
            </div>
         </div>
        
         
     );
   }
}

export default Confirm;
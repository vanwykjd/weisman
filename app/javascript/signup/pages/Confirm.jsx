import React, { Component } from 'react';
import Plan from './../components/Plan';
import PaymentForm from './../components/PaymentForm';
import { Card } from './../components/PaymentForm';

class Confirm extends Component { 
  constructor(props) {
     super(props);
    
     this.saveAndContinue = this.saveAndContinue.bind(this);
  }
  
  
  saveAndContinue(e) {
    const card = this.props.card;
    
    e.preventDefault()
      this.props.nextStep()
      this.props.createCard(card)
  }
  
  
  render() {
     const card = this.props.card;
    
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
            <div>{this.props.email}</div>
            <div>{this.props.password}</div>
            <div>{this.props.password_conf}</div> 
            <div>{JSON.stringify(this.props.card)}</div>
            <input type="primary" value='Edit' className='btn sign-up-btn' onClick={() => this.props.editStep(1)} />
         </div>
         <div className='devise-form' style={{display: 'inline-block'}}>
            <div className='text-center form-header'>
              <h5>Enter your payment info.</h5>
            </div>
           <PaymentForm 
              card={this.props.card}
              createCard={this.props.createCard} />
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
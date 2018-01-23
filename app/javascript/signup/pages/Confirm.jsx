import React, { Component } from 'react';
import Plan from './../components/Plan';
import Card from './../components/Card';

class Confirm extends Component { 
  constructor(props) {
     super(props);
     this.handleChange = this.handleChange.bind(this);
     this.saveAndContinue = this.saveAndContinue.bind(this);
  }
  
  handleChange(e) {
    this.props.paymentInput(e)
  }
  
  saveAndContinue(e) {
    e.preventDefault()
      this.props.nextStep()
      this.props.paymentInput(e)
  }
  
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
            <div>{this.props.email}</div>
            <div>{this.props.password}</div>
            <div>{this.props.password_conf}</div> 
            <input type="primary" value='Edit' className='btn sign-up-btn' onClick={() => this.props.editStep(1)} />
         </div>
         <div className='devise-form' style={{display: 'inline-block'}}>
            <div className='text-center form-header'>
              <h5>Enter your payment info.</h5>
            </div>
            <form onSubmit={this.saveAndContinue}>
              <Card 
                cardInfo={this.handleChange}
                card={this.props.card} />
            </form>
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
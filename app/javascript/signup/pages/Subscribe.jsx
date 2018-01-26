import React, { Component } from 'react';
import Plan from './../components/Plan'

class Subscribe extends Component { 
  constructor(props) {
     super(props);
     this.saveAndContinue = this.saveAndContinue.bind(this);
  }
  
  saveAndContinue(e) {
    e.preventDefault()
      this.props.nextStep()
  }
  
  render() {
   
     return (
        <div className='d-flex justify-content-center'>
         <div className='devise-form' style={{display: 'inline-block'}}>
           <Plan 
                name={this.props.plan.name}
                amount={this.props.plan.amount} />
         </div>
         <div className='devise-form' style={{display: 'inline-block'}}>
            <div>Email: {this.props.email}</div>
            <div>Password: {this.props.password}</div>
            <div>Password Conf: {this.props.password_conf}</div> 
            <div>Card: 
              <div>Number: {this.props.card.number}</div>
              <div>Exp Month: {this.props.card.exp_month}</div>
              <div>Exp Year: {this.props.card.exp_year}</div>
              <div>CVC: {this.props.card.cvc}</div>
           </div>
         </div>
            <div className='form-group'>
              <input type="primary" value='Continue' className='btn sign-up-btn' onClick={this.saveAndContinue} />
              <input type="primary" value='Go Back' className='btn sign-up-btn' onClick={this.props.previousStep} />
            </div>
         
        </div>
         
     );
   }
}

export default Subscribe;
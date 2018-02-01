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
            <div>Email: {this.props.acctInfo.email}</div>
            <div>Password: {this.props.acctInfo.password}</div>
            <div>Password Conf: {this.props.acctInfo.password_conf}</div> 
            <div>{JSON.stringify(this.props.srcInfo)}</div>
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
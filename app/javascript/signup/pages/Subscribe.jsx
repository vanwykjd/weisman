import React, { Component } from 'react';
import Plan from './../components/Plan'

class Subscribe extends Component { 
  constructor(props) {
     super(props);
     this.saveAndContinue = this.saveAndContinue.bind(this);
     this.state = {
       step: this.props.step,
       plan: this.props.plan,
       email: this.props.email,
       password: this.props.password,
       password_conf: this.props.password_conf,
       address: this.props.address,
       card: this.props.card,
       acct_id: this.props.acct_id,
     };
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
                name={this.state.plan}
                amount={this.state.amount}
                onSelect={this.props(this.state.plan.id)}/>
         </div>
         <div className='devise-form' style={{display: 'inline-block'}}>
            <div>{this.state.step}</div>
            <div>{this.state.plan}</div>
            <div>{this.state.email}</div>
            <div>{this.state.password}</div>
            <div>{this.state.password_conf}</div> 
            <div>{this.state.address}</div>
            <div>{this.state.address}</div> 
            <div>{this.state.card}</div>
            <div>{this.state.acct_id}</div>
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
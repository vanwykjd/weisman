import React, { Component } from 'react';
import Plan from './../components/Plan'

class Confirm extends Component { 
  constructor(props) {
     super(props);
     
     this.state = {
       step: this.props.step,
       plan: this.props.plan,
       email: this.props.email,
       password: this.props.password,
       password_conf: this.props.password_conf
     };
     this.saveAndContinue = this.saveAndContinue.bind(this);
  }
  
  saveAndContinue(e) {
    e.preventDefault()
      this.props.email(this.state.email)
      this.props.password(this.state.password)
      this.props.password_conf(this.state.password_conf)
      this.props.nextStep()
  }
  
  render() {
   
     return (
       <div className='planform-container'>
        <div className='d-flex justify-content-center'>
         <div className='devise-form' style={{display: 'inline-block'}}>
           <Plan 
                name={this.state.plan.id}
                amount={this.state.plan.amount}/>
         </div>
         <div className='devise-form' style={{display: 'inline-block'}}>
            <div>{this.state.step}</div>
            <div>{JSON.stringify(this.state.plan)}</div>
            <div>{this.state.email}</div>
            <div>{this.state.password}</div>
            <div>{this.state.password_conf}</div>  
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
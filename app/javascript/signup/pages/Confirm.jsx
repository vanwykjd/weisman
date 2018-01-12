import React, { Component } from 'react';
import { Button } from 'antd';
class Confirm extends Component { 
  constructor(props) {
     super(props);
     this.saveAndContinue = this.saveAndContinue.bind(this);
     this.state = {
       step: this.props.step,
       plan: this.props.plan,
       email: this.props.email,
       password: this.props.password,
       password_conf: this.props.password_conf
     };
  }
  
  saveAndContinue(e) {
    e.preventDefault()
      this.props.nextStep()
    }
  
 
  
  render() {
   
     return (
      <section className='sign-up'>
        <div className='d-flex justify-content-center'>
         <div>{this.state.step}</div>
         <div>{this.state.plan}</div>
         <div>{this.state.email}</div>
         <div>{this.state.password}</div>
         <div>{this.state.password_conf}</div>  
        </div>
         
        <Button type="primary" onClick={this.saveAndContinue}>Continue</Button>
        <Button type="primary" onClick={this.props.previousStep}>Continue</Button>
         
      </section>
     );
   }
}

export default Confirm;
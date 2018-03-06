import React, { Component } from 'react';

class Continue extends Component { 
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
     const acctInfo = this.props.acctInfo;
    
     return (


         <div className='devise-form'>
          <h4>Begin your Signup Process.</h4>
           
          <div className='form-group'>
            <input type="primary" value='Start' className='btn sign-up-btn' onClick={this.saveAndContinue} />
          </div>
         </div>
      
     
     );
   }
}

export default Continue;
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { confirmRequest } from './../actions/confirmActions'; 
import Plan from './../components/Plan';
import ConfirmForm from './../components/ConfirmForm';
import PaymentForm from './../components/PaymentForm'; 
import Card from './../components/Card'; 

class Confirm extends Component { 
  constructor(props) {
     super(props);
     this.state = ({
            errors: []
     });
     
     this.saveAndContinue = this.saveAndContinue.bind(this);
     this.handleErrors = this.handleErrors.bind(this);
  }
   handleErrors(error) {
    if (error) {
      this.setState({ errors: error })
      console.log(this.state.errors)
    } 
  }
  
   // Func sets state.srcInfo and state.step of SignUp.jsx --- Funcs passed through props
  saveAndContinue(e) {
    e.preventDefault()
      this.props.setSrcInfo(this.props.card) 
      this.props.next()
  }
  
  // Need a function to pass state.srcInfo object to Stripe to create a source-token to attach to account number //
  
  render() {
    
     const { confirmRequest } = this.props;
     const registration_progress = this.props.registration_progress;
     const nextStep = this.props.registration_progress + 1;
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
            <ConfirmForm
              acctInfo={acctInfo}
              getStatus={this.props.getStatus}
              setAcctInfo={this.props.setAcctInfo}
              next={this.props.next}
              confirmRequest={confirmRequest}
              plan_id={plan.id}
              registration_progress={nextStep}
              handleErrors = {this.handleErrors} />

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
Confirm.propTypes = {
  confirmRequest: PropTypes.func.isRequired
}

export default connect(null, { confirmRequest })(Confirm);
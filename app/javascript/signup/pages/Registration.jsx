import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registerRequest } from './../actions/registerActions';
import RegisterForm from './../components/RegisterForm'; 


class Registration extends React.Component {
  constructor(props) {
     super(props);
     this.state = ({
            errors: []
      });
 
     this.handleErrors = this.handleErrors.bind(this);
  }
  
  handleErrors(error) {
    if (error) {
      this.setState({ errors: error })
      console.log(this.state.errors)
    } 
  }
  
  render() {
    const { registerRequest } = this.props;
    const registration_progress = this.props.registration_progress;
    const plan_id = this.props.plan.id; 
    const nextStep = this.props.nextStep;
    const prevStep = this.props.prevStep;
    const acctInfo = this.props.acctInfo;
    const srcInfo = this.props.srcInfo;
    const errors = this.state.errors;

    
    return (
     
      <div className='devise-form'>
        { errors.map( (error => 
            <div className='alert alert-danger'>{error}</div>
            )
        )}
        <div className='text-center form-header'>
          <h5>Create your Barweiser account.</h5>
        </div>
         <div id="error_explanation">
        </div>
        <RegisterForm
          getStatus={this.props.getStatus}
          setAcctInfo={this.props.setAcctInfo}
          next={this.props.next}
          registerRequest={registerRequest}
          plan_id={plan_id}
          registration_progress={nextStep}
          handleErrors = {this.handleErrors} />
        
        <input type="primary" value='Continue' className='btn sign-up-btn' onClick={this.props.saveAndContinue} />
        <input type="primary" value='Go Back' className='btn sign-up-btn' onClick={this.props.previous} />
      
      
        <div>{JSON.stringify(plan_id)}</div>
        <div>{registration_progress}</div>
        <div>{nextStep}</div>
        <div>{prevStep}</div>
        <div>{JSON.stringify(acctInfo)}</div>
        <div>{JSON.stringify(srcInfo)}</div>
        
      </div>
    );
  }
}

Registration.propTypes = {
  registerRequest: PropTypes.func.isRequired
}

export default connect(null, { registerRequest })(Registration);
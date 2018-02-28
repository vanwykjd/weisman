import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ConfirmForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
            registration_progress: this.props.registration_progress,
            plan_id: this.props.plan_id,
            company_name: '',
            first_name: '',
            last_name: ''
      };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }
  
    handleChange(e) {
      const value = e.target.value;
      const name = e.target.name;

      this.setState({
          [name]: value
      });
    }
    
   clearForm() {
    this.setState({
        company_name: '',
        first_name: '',
        last_name: ''
      })
   }
  
   handleSubmit(e) {
    e.preventDefault(); 
    const errorCheck = this.props.handleErrors;
    const clearForm = this.clearForm();
    const inputs = this.state;
    const acctInfo = this.props.acctInfo;
    const setAcctInfo = this.props.setAcctInfo;
    const getStatus = this.props.getStatus;
    const next = this.props.next;
    this.props.confirmRequest(e, inputs, errorCheck, clearForm, getStatus, setAcctInfo, next);
   }
 
  
  render() { 
    const company_name = this.state.company_name;
    const first_name = this.state.first_name;
    const last_name = this.state.last_name;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input className='form-control' type='text' name='company_name' value={company_name} id='account_company_name' placeholder="Company Name" onChange={this.handleChange}/>
        </div>
        
        <div className="form-group">
          <input className='form-control' type="text" name='first_name' value={first_name} id='account_first_name' placeholder="First Name" onChange={this.handleChange}/>
        </div>
        
        <div className="form-group">
          <input className='form-control' type="text" name='last_name' value={last_name} id='account_last_name' placeholder="Last Name" onChange={this.handleChange}/>
        </div>
        
        <div className="form-group">
          <input type="submit" name="commit" value="Submit" className='btn sign-up-btn' />
        </div>
      </form>
    );
  }
}

ConfirmForm.propTypes = {
  confirmRequest: PropTypes.func.isRequired
}

export default ConfirmForm;
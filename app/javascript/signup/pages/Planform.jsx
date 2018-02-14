import React, { Component } from 'react';
import PropTypes from 'prop-types'
import planData from './../data/plans';
import PlanItem from './../components/PlanItem'
import PlanList from './../components/PlanList'



class Planform extends Component { 
  constructor(props) {
     super(props);
     this.selectPlan = this.selectPlan.bind(this);
     this.saveAndContinue = this.saveAndContinue.bind(this);
     this.generateFormInput = this.generateFormInput.bind(this);
  }
  
  
  
  // Func enables to set state.plan of SignUp.js --- passed through props
  selectPlan(plan) {
    this.props.setPlan(plan);
  }
  
  generateFormInput() {
    const request = new XMLHttpRequest();
    request.open("GET", '/accounts/sign_up');
    request.responseType = 'document';
    
    request.onreadystatechange = () => {
      if (request.readyState == 4 && request.status == 200 ) {
        const data = request.response;
        const reqForm = data.getElementsByTagName('input');
        const form = document.getElementById('new_account');
        form.prepend(reqForm[1]);
      }
    }
    request.send();
  }
  
  
   // Func sets state.plan and state.step of SignUp.js --- Funcs passed through props
  saveAndContinue(e) {
    e.preventDefault()
      this.selectPlan(this.props.plan) 
      this.generateFormInput();
      this.props.next()
  }
  
  render() {
    
     const registration_progress = this.props.registration_progress;
     const nextStep = this.props.nextStep;
     const prevStep = this.props.prevStep;
     const plan = this.props.plan;
     const acctInfo = this.props.acctInfo;
     const srcInfo = this.props.srcInfo; 
    
     return (
        <div className='planform-container'>

            <PlanList title="Plans">
              { planData.map( (plan => 
                <PlanItem 
                  key={plan.id}
                  plan={plan}
                  onSelect={() => this.selectPlan(plan)}/>
                )  
              )}
            </PlanList>
         <input type="primary" value='Continue' id='register_form' className='btn sign-up-btn' onClick={this.saveAndContinue} />

         <div>{JSON.stringify(plan)}</div>
         <div>{registration_progress}</div>
         <div>{nextStep}</div>
         <div>{prevStep}</div>
         <div>{JSON.stringify(acctInfo)}</div>
         <div>{JSON.stringify(srcInfo)}</div>
         
        </div>
      );

   }
}

export default Planform;
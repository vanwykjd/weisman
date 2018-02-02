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
  }
  
  // Func enables to set state.plan of SignUp.js --- passed through props
  selectPlan(plan) {
    this.props.setPlan(plan);
  }
  
   // Func sets state.plan and state.step of SignUp.js --- Funcs passed through props
  saveAndContinue(e) {
    e.preventDefault()
      this.props.nextStep()
      this.selectPlan(this.props.plan) 
      this.props.setData()
  }
  
  
  render() {
     const step = this.props.step; // state of step in SignUp.jsx --- passed through props
     const plan = this.props.plan; // state of plan in SignUp.jsx --- passed through props
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
         <div>{JSON.stringify(plan)}</div>
         <div>{this.props.step}</div>
         <div>{this.props.data}</div>
         <div>{this.props.prevStep}</div>
         <div>{JSON.stringify(this.props.card)}</div>
         <input type="primary" value='Continue' className='btn sign-up-btn' onClick={this.saveAndContinue} />
        </div>
  
     );
   }
}

export default Planform;
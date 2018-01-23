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
  
  selectPlan(plan) {
    this.props.setPlan(plan);
  }
  
  saveAndContinue(e) {
    e.preventDefault()
      this.props.nextStep()
      this.selectPlan(this.props.plan)
  }
  
  
  render() {
     const step = this.props.step;
     const plan = this.props.plan;
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
         <div>{this.props.prevStep}</div>
         <input type="primary" value='Continue' className='btn sign-up-btn' onClick={this.saveAndContinue} />
        </div>
  
     );
   }
}

export default Planform;
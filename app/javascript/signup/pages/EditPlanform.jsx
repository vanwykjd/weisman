import React, { Component } from 'react';
import PropTypes from 'prop-types'
import planData from './../data/plans';
import PlanItem from './../components/PlanItem'
import PlanList from './../components/PlanList'


class EditPlanform extends Component { 
  constructor(props) {
     super(props);
     this.saveAndContinue = this.saveAndContinue.bind(this);
     this.state = {
       step: this.props.step,
       plan: this.props.plan,
       email: this.props.email,
       password: this.props.password,
       password_conf: this.props.password_conf,
     };
  }
  
  saveAndContinue(e) {
    e.preventDefault()
      this.props.nextStep()
    }
  
 
  
  render() {
  
     return (
        <div className='planform-container'>
          
            <PlanList title="Plans">
              { planData.map( (plan => 
                <PlanItem 
                  key={plan.id}
                  plan={plan}
                  onSelect={(plan) => this.addPlan(plan)}/>
                )  
              )}
            </PlanList>
         <div>{this.state.step}</div>
         <div>{JSON.stringify(this.state.plan)}</div>
         <input type="primary" value='Continue' className='btn sign-up-btn' onClick={this.saveAndContinue} />
        </div>
  
     );
   }
}

export default Planform;
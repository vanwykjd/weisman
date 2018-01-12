import React, { Component } from 'react';
import planData from './../data/plans';
import { Button, Icon, Form, Input } from 'antd';
import Plan from './../components/Plans'
const FormItem = Form.Item;

class Planform extends Component { 
  constructor(props) {
     super(props);
     this.saveAndContinue = this.saveAndContinue.bind(this);
     this.addPlan = this.addPlan.bind(this);
     this.state = {
       stepId: this.props.step,
       planId: null
     };
  }
  
  addPlan(id) {
    const planId = id;
    this.setState({ planId });
  }
  
  saveAndContinue(e) {
    e.preventDefault()
      this.props.plan(this.state.planId)
      this.props.nextStep()
    }
  
 
  
  render() {
   
     return (
      <section className='sign-up'>
        <div className='d-flex justify-content-center'>
          { planData.map( (plan) => 
    
            <Plan
              name={plan.name}
              amount={plan.amount}
              onSelect={() => this.addPlan(plan.id)}/>
            )     
          }
         
         <div>{this.state.stepId}</div>
         <div>{this.state.planId}</div>
        </div>
         
         <Button type="primary" onClick={this.saveAndContinue}>Continue</Button>
         
      </section>
     );
   }
}

export default Planform;
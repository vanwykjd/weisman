import React, { Component } from 'react';
import planData from './../data/plans';
import { Button } from 'antd';
import Plan from './../components/Plans'


class Planform extends Component { 
  constructor(props) {
     super(props);
     this.state = {
       plan: null,
       step: 0
     };
  }
  
  selectPlan(id) {
    const plan = id;
    this.setState({ plan });
  }
  
  addPlan() {
    const step = this.state.step + 1;
    if (this.state.plan !== null && this.state.step < 1) {
      this.setState({ step });
    }
  }
  
  render() {
     return (
      <section className='sign-up'>
        <div className='d-flex justify-content-center'>
          { planData.map( (plan) => 
    
            <Plan
              name={plan.name}
              amount={plan.amount}
              onSelect={() => this.selectPlan(plan.id)}/>
            )     
          }
         
         <div>{this.state.step}</div>
         <div>{this.state.plan}</div>
        </div>
         <Button type="primary" onClick={() => this.addPlan()}>Continue</Button>
      </section>
     );
   }
}

export default Planform;
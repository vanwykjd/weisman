import React, { Component } from 'react';
import planData from './../data/plans';
import { Button, Icon, Form, Input } from 'antd';
import Plan from './../components/Plans'
const FormItem = Form.Item;

class Planform extends Component { 
  constructor(props) {
     super(props);
     this.state = {
       plan: null,
       step: 0,
       email: null,
       password: null
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
      <section>
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
         
           <Form>
              <FormItem>
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />
              </FormItem>
              <FormItem>
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
              </FormItem>
              <FormItem>
                <Button
                  type="primary"
                  htmlType="submit"
                >
                  Log in
                </Button>
              </FormItem>
            </Form>
      </section>
     );
   }
}

export default Planform;
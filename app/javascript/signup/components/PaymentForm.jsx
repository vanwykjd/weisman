import React, { Component } from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import Card from './Card'

class PaymentForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = ({
        number: '',
        exp_month: '',
        exp_year: '',
        cvc: ''
    });
    
    this.paymentInput = this.paymentInput.bind(this);
  }
  
  
  paymentInput(e) {
    const value = e.target.value;
    const name = e.target.name;
    
    this.setState({
      [name]: value 
    });
  }
  
  
  render() {  
    
    const number = this.state.number;
    const exp_month = this.state.exp_month;
    const exp_year = this.state.plan;
    const cvc = this.state.cvc;
    const card = this.state;
    
    return (
      <div className='devise-form'>
          <Card
            number={number}
            exp_month={exp_month}
            exp_year={exp_year}
            cvc={cvc}
            paymentInput={this.paymentInput} />
          <Button onClick={() => this.props.createCard({card})}>
              submit
          </Button>
      </div>
    );
  }
}

export default PaymentForm
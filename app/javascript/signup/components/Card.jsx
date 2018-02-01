import React, { Component } from 'react';

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.handleInput = this.handleInput.bind(this);
  }
   // enables to set states in RegisterForm.jsx --- passed through props
  handleInput(e) {
    this.props.paymentInput(e)
  }
   
  render() {
    
    return (
      <form>
      <div className='form-group'>
        <input className='form-control' name='number' value={this.props.number} type='text' placeholder="Card Number" onChange={this.handleInput}/>
      </div>
      <div className='form-group'>
        <input className='form-control' name='exp_month' value={this.props.exp_month} type="text" placeholder="Month" onChange={this.handleInput}/>
        <input className='form-control' name='exp_year' value={this.props.exp_year} type="text" placeholder="Year" onChange={this.handleInput}/>
      </div>
      <div className='form-group'>
        <input className='form-control' name='cvc' value={this.props.cvc} type="text" placeholder="CVC" onChange={this.handleInput}/>
      </div>
    </form>
    )
  }
}

export default Card
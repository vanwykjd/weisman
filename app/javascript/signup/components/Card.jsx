import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Card = ({ number, exp_month, exp_year, cvc }) => (
    <form>
      <div className='form-group'>
        <input className='form-control' name='number' value={number} type='text' placeholder="Card Number" onChange={this.props.cardInput}/>
      </div>
      <div className='form-group'>
        <input className='form-control' name='exp_month' value={exp_month} type="text" placeholder="Month" onChange={this.props.cardInput}/>
        <input className='form-control' name='exp_year' value={exp_year} type="text" placeholder="Year" onChange={this.props.cardInput}/>
      </div>
      <div className='form-group'>
        <input className='form-control' name='cvc' value={cvc} type="text" placeholder="CVC" onChange={this.props.cardInput}/>
      </div>
    </form>
)

Card.propTypes = {
  number: PropTypes.number,
  exp_month: PropTypes.number,
  exp_year: PropTypes.number,
  cvc: PropTypes.number
}

export default Card
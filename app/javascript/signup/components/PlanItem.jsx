import React, { Component } from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types'
import Plan from './Plan'

const PlanItem = ({ plan, onSelect }) => (

  <div className="devise-form">
    <Plan 
      name={plan.name}
      amount={plan.amount} />
    
    <Button onClick={() => {onSelect(plan)}}>
      Select
    </Button>
    
  </div>
)

PlanItem.propTypes = {
  plan: PropTypes.shape({
    name: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
  }).isRequired,
  onSelect: PropTypes.func.isRequired
}

export default PlanItem
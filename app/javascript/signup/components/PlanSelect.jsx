import React from 'react'
import PropTypes from 'prop-types'
import Plan from './Plan'

const PlanSelect = ({ plan, onSelectPlanClick }) => (
  <div style={{ marginBottom: 20 }}>
    <Plan
      name = {plan.name}
      amount = {plan.amount}
    />
    <button
      onClick = {onSelectPlanClick}
      disabled = {plan.selected === true ? false : 'disabled'}>
      {plan.selected === true ? 'Select Plan' : 'Selected'}
    </button>
  </div>
)

PlanSelect.propTypes = {
  plan: PropTypes.shape({
    name: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    selected: PropTypes.bool.isRequired
  }).isRequired,
  onSelectPlanClick: PropTypes.func.isRequired
}

export default PlanSelect
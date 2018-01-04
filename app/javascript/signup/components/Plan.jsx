import React from 'react'
import PropTypes from 'prop-types'

const Plan = ({ name, amount }) => (
  <div>
    {name} - {amount}
  </div>
)

Plan.propTypes = {
  name: PropTypes.string,
  amount: PropTypes.number,
  selected: PropTypes.bool
}


export default Plan
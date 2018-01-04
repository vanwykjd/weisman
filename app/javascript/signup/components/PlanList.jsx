import React from 'react'
import PropTypes from 'prop-types'

const PlanList = ({ name, properties }) => (
  <div>
    <h3>{name}</h3>
    <div>{properties}</div>
  </div>
)

PlanList.propTypes = {
  properties: PropTypes.node,
  name: PropTypes.string.isRequired
}

export default PlanList

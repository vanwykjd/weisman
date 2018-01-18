import React from 'react'
import PropTypes from 'prop-types'

const PlanList = ({ title, children }) => (
  <div>
    <div className='text-center form-header'>
      <h5>{title}</h5>
    </div>
    <div className='d-flex justify-content-center'>
      {children}
    </div>
  </div>
)

PlanList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
}

export default PlanList
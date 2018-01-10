import React, { Component } from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types'

const Plan = ({ name, amount, onSelect }) => (
  <div className='devise-form'>
    <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">{name}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Service...</td>
          </tr>
          <tr>
            <td>Service...</td>
          </tr>
          <tr>
            <td>Service...</td>
          </tr>
          <tr>
            <td>Service...</td>
          </tr>
          <tr>
            <td>Service...</td>
          </tr>
          <tr className="table-dark">
            <td>{amount}</td>
          </tr>
        </tbody>
      </table>
    <Button onClick={onSelect}>
        Select
    </Button>
  </div>
)

Plan.propTypes = {
  name: PropTypes.string,
  amount: PropTypes.number,
  onSelect: PropTypes.func.isRequired 
}

export default Plan
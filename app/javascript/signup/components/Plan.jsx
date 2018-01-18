import React, { Component } from 'react';
import PropTypes from 'prop-types'

const Plan = ({ name, amount }) => (
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
)

Plan.propTypes = {
  name: PropTypes.string,
  amount: PropTypes.number
}

export default Plan
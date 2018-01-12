import React from 'react'
import { Link } from 'react-router-dom'
import { Layout } from 'antd'
const { Header } = Layout

const Steps = () => (
    <Header id="header">
      <ul class="nav nav-pills nav-fill">
        <li class="nav-item">
          <Link to="/sign_up/planform" className="nav-link">Planform</Link>
        </li>
        <li class="nav-item">
          <Link to="/sign_up/registration" className="nav-link">Registration</Link>
        </li>
      </ul>
  </Header>
)

export default Steps
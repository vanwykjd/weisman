import React from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd'
const { Header } = Layout

const Steps = () => (
  <Header id="header">
    <Menu
      mode="horizontal"
    >
      <Menu.Item
        key="Step 1"
      >
        <Link to="/signup/planform">Step 1: Plans</Link>
      </Menu.Item>
      <Menu.Item
        key="Step 2"
      >
        <Link to="/signup/registration">Step 2: Company Info</Link>
      </Menu.Item>
      <Menu.Item
        key="Step 3"
      >
        <Link to="/signup/register">Step 3: Payment Info</Link>
      </Menu.Item>
      <Menu.Item
        key="Step 4"
      >
        <Link to="/signup/subscribe">Step 4: Subscribe</Link>
      </Menu.Item>
    </Menu>
  </Header>
)

export default Steps

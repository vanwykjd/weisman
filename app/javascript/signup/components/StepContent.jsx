import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Layout } from 'antd';
const { Content } = Layout;
import Planform          from './../pages/Planform.jsx'
import Registration      from './../pages/Registration.jsx'

const StepContent = (props) => (
  <Layout>
    <Content>
      <Switch>
        <Route path='/sign_up/planform' component={Planform}/>
        <Route path='/sign_up/registration' component={Registration}/>
      </Switch>
    </Content>
  </Layout>
)

export default StepContent
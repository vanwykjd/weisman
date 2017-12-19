import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Layout } from 'antd'
const { Content } = Layout;
import Planform     from '../../pages/registration/Planform.jsx'
import Registration from '../../pages/registration/Registration.jsx'
import Register from '../../pages/registration/Register.jsx'
import Subscribe from '../../pages/registration/Subscribe.jsx'

const StepContent = () => (
  <Layout>
    <Content>
      <Switch>
        <Route path='/signup/planform' component={Planform}/>
        <Route path='/signup/registration' component={Registration}/>
        <Route path='/signup/register' component={Register}/>
        <Route path='/signup/subscribe' component={Subscribe}/>
      </Switch>
    </Content>
  </Layout>
)

export default StepContent

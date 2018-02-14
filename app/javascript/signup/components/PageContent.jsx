import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Planform from './../pages/Planform.jsx' 
import Registration from './../pages/Registration.jsx' 
import Confirm from './../pages/Confirm.jsx' 
import Subscribe from './../pages/Subscribe.jsx' 

const RouteContent = () => (
  <Layout>
      <Switch>
        <Route path='/signup/planform' component={Planform}/>
        <Route path='/signup/registration' component={Registration}/>
        <Route path='/signup/confirm' component={Confirm}/>
        <Route path='/signup/subscribe' component={Subscribe}/>
      </Switch>
  </Layout>
)

export default RouteContent
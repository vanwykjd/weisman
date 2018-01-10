import React from 'react'
import { Layout } from 'antd'
import Planform from '../pages/Planform.jsx'

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
      plan: null,
      email: null
    };
  }
    render() {
      switch (this.state.step) {
        case 0:
            return < Planform />
        case 1: 
            return < Registration />
        default: 
            return < Planform />
      }
    }
}

export default SignUp
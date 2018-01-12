import React, { Component } from 'react';
import Planform from './../pages/Planform.jsx'
import Registration from './../pages/Registration.jsx'
import Confirm from './../pages/Confirm.jsx'

class SignUp extends Component { 
  constructor(props) {
     super(props);
     this.state = ({
       step: 0,
       plan: '',
       email: '',
       password: '',
       password_conf: ''
     });
     this.nextStep = this.nextStep.bind(this);
     this.previousStep = this.previousStep.bind(this);
     this.selectPlan = this.selectPlan.bind(this);
     this.setEmail = this.setEmail.bind(this);
     this.setPassword = this.setPassword.bind(this);
     this.setPassConf = this.setPassConf.bind(this);
  }
  
  selectPlan(id) {
    const plan = id;
    this.setState({ plan });
  }
  
  setEmail(em) {
    const email = em
    this.setState({ email })
  }
  
  setPassword(pw) {
    const password = pw
    this.setState({ password })
  }
  
  setPassConf(pwc) {
    const password_conf = pwc
    this.setState({ password_conf })
  }
  
  nextStep() {
    const step = this.state.step + 1;
    this.setState({ step });
  }
  
  previousStep() {
    const step = this.state.step - 1;
    this.setState({ step });
  }
  
  render() {
    
		switch (this.state.step) {
			case 0:
				return (<Planform 
                 step={this.state.step}
                 plan={this.selectPlan}
                 nextStep={this.nextStep}/>)
			case 1:
				return (<Registration
                 step={this.state.step}
                 plan={this.state.plan}
                 email={this.setEmail}
                 password={this.setPassword}
                 password_conf={this.setPassConf}
                 nextStep={this.nextStep}
                 previousStep={this.previousStep}/>)
      case 2:
        return (<Confirm 
                 step={this.state.step}
                 plan={this.state.plan}
                 email={this.state.email}
                 password={this.state.password}
                 password_conf={this.state.password_conf}
                 nextStep={this.nextStep}
                 previousStep={this.previousStep}/>)
		}
	}
}

export default SignUp;
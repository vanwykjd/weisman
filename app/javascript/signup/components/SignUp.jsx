import React, { Component } from 'react';
import Planform from './../pages/Planform.jsx'
import Registration from './../pages/Registration.jsx'
import Confirm from './../pages/Confirm.jsx'
import Subscribe from './../pages/Subscribe.jsx'


class SignUp extends Component { 
  constructor(props) {
     super(props);
     this.state = ({
       step: 0,
       plan: '',
       email: '',
       password: '',
       password_conf: '',
       address: '',
       card: '',
       acct_id: ''
     });
     this.nextStep = this.nextStep.bind(this);
     this.previousStep = this.previousStep.bind(this);
     this.selectPlan = this.selectPlan.bind(this);
     this.setEmail = this.setEmail.bind(this);
     this.setPassword = this.setPassword.bind(this);
     this.setPassConf = this.setPassConf.bind(this); 
  }
  
  selectPlan(selectedPlan) {
    const plan = selectedPlan;
    this.setState({ plan });
    console.log('Selected Plan', selectedPlan);
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
			case 0 && !this.state.plan:
				return (<Planform 
                 step={this.state.step}
                 plan={this.state.plan}
                 selectPlan={this.selectPlan}
                 nextStep={this.nextStep}
                 editStep={this.editStep}/>)
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
                 address={this.setAddress}
                 card={this.setCard}
                 acct_id={this.setAcctId}
                 nextStep={this.nextStep}
                 previousStep={this.previousStep}/>)
      case 3:
        return (<Subscribe 
                 step={this.state.step}
                 plan={this.state.plan}
                 email={this.state.email}
                 password={this.state.password}
                 password_conf={this.state.password_conf}
                 address={this.state.address}
                 card={this.state.card}
                 acct_id={this.state.acct_id}
                 nextStep={this.nextStep}
                 previousStep={this.previousStep}/>)
		}
	}
}

export default SignUp;
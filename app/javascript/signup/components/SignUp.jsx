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
       prevStep: 0,
       plan: '',
       email: '',
       password: '',
       password_conf: '',
       card: ({
          number: 0,
          exp_month: 0,
          exp_year: 0,
          cvc: 0
       })
     });
     this.nextStep = this.nextStep.bind(this);
     this.previousStep = this.previousStep.bind(this);
     this.editStep = this.editStep.bind(this);
     this.setPlan = this.setPlan.bind(this);
     this.registrationInput = this.registrationInput.bind(this);
     this.paymentInput = this.paymentInput.bind(this);
  }
  
  setPlan(plan) {
    this.setState({ plan });
  }
  
  registrationInput(e) {
    const value = e.target.value;
    const name = e.target.name;
    
    this.setState({
      [name]: value
    });
  }
  
  paymentInput(e) {
    const value = e.target.value;
    const name = e.target.name;
    
    this.setState({
      card: {[name]: value}
    });
  }
  
  nextStep() {
    const currentStep = this.state.step;
    const nextStep = this.state.step + 1;
    const prevStep = this.state.prevStep;
    
    if (prevStep > currentStep) {
      this.setState({ step: prevStep,
                      prevStep: currentStep });
    } else {
      this.setState({ step: nextStep,
                      prevStep: currentStep });
    }
  }
  
  previousStep() {
    const step = this.state.step - 1;
    const prevStep = this.state.step;
    this.setState({ step: step,
                    prevStep: prevStep });
  }
  
  editStep(step) {
    const editStep = step;
    const prevStep = this.state.step;
    this.setState({ step: editStep,
                    prevStep: prevStep });
  }
  
  
  render() {
    const step = this.state.step;
    const prevStep = this.state.prevStep;
    const plan = this.state.plan;
    const email = this.state.email;
    const password = this.state.password;
    const password_conf = this.state.password_conf;
    const card = this.state.card;
    
		switch (this.state.step) {
			case 0:
				return (<Planform 
                 step={step}
                 prevStep={prevStep}
                 plan={plan}
                 setPlan={this.setPlan}
                 nextStep={this.nextStep} />)
			case 1:
				return (<Registration
                 step={step}
                 prevStep={prevStep}
                 plan={plan}
                 email={email}
                 password={password}
                 password_conf={password_conf}
                 registrationInput={this.registrationInput}
                 nextStep={this.nextStep}
                 previousStep={this.previousStep}/>)
      case 2:
        return (<Confirm 
                 step={step}
                 prevStep={prevStep}
                 plan={plan}
                 email={email}
                 password={password}
                 password_conf={password_conf}
                 card={card}
                 paymentInput={this.paymentInput}
                 nextStep={this.nextStep}
                 editStep={this.editStep}
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
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
       card: ''
     });
     this.nextStep = this.nextStep.bind(this);
     this.previousStep = this.previousStep.bind(this);
     this.editStep = this.editStep.bind(this);
     this.setPlan = this.setPlan.bind(this);
     this.registrationInput = this.registrationInput.bind(this);
     this.createCard = this.createCard.bind(this);
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
  
  createCard(card) {
    this.setState( card )
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
                 nextStep={this.nextStep}
                 card={card}/>)
			case 1:
				return (<Registration
                 step={step}
                 prevStep={prevStep}
                 plan={plan}
                 email={email}
                 password={password}
                 password_conf={password_conf}
                 registrationInput={this.registrationInput}
                 card={card}
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
                 createCard={this.createCard}
                 nextStep={this.nextStep}
                 editStep={this.editStep}
                 previousStep={this.previousStep}/>)
      case 3:
        return (<Subscribe 
                 step={step}
                 prevStep={prevStep}
                 plan={plan}
                 email={email}
                 password={password}
                 password_conf={password_conf}
                 card={card}
                 nextStep={this.nextStep}
                 previousStep={this.previousStep}/>)
		}
	}
}

export default SignUp;
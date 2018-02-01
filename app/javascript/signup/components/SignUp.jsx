import React, { Component } from 'react';
import Planform from './../pages/Planform.jsx' // Page to select Plan
import Registration from './../pages/Registration.jsx' // Page to enter Email, Pass, PassConf...
import Confirm from './../pages/Confirm.jsx' // Page to edit any prev inputed data and enter Payment info
import Subscribe from './../pages/Subscribe.jsx' // Page to submit all info once all data has been verified


class SignUp extends Component { 
  constructor(props) {
     super(props);
     this.state = ({
       step: 0,  //--Keeps track of progress
       prevStep: 0, //--Enables ability to keep track of previous step for 'editStep' func
       plan: '',  //--Plan object set in Planform.jsx
       acctInfo: '', //--Account info ex: Email, Pass, PassConf... Object set Registration.jsx
       srcInfo: '' //--Payment info ex: Credit Card... Object set in Confirm.jsx
     });
     
     // Func to set state.plan --- passed into props
     this.setPlan = this.setPlan.bind(this);  
    
     // Func to set state.acctInfo --- passed into props
     this.setAcctInfo = this.setAcctInfo.bind(this);
    
    // Func to set state.srcInfo --- passed into props
     this.setSrcInfo = this.setSrcInfo.bind(this);
    
    // Func to set state.step and state.prevStep --- passed into props
     this.nextStep = this.nextStep.bind(this);
    
    // Func to set state.step and state.prevStep --- passed into props
     this.previousStep = this.previousStep.bind(this);
    
    // Func to set state.step and state.prevStep --- passed into props
     this.editStep = this.editStep.bind(this);
  }
  
  
  // Func passed to Planform.jsx as prop
  setPlan(plan) {
    this.setState({ plan })
  }
  
  // Func passed to RegisterForm.jsx as prop
  setAcctInfo(info) {
    this.setState({ acctInfo: info })
  }
  
  // Func passed to Confirm.jsx as prop
  setSrcInfo(info) {
    this.setState({ srcInfo: info })
  }
  
  // Func passed as prop to go to next step
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
  
  // Func passed as prop to go to prev step
  previousStep() {
    const step = this.state.step - 1;
    const prevStep = this.state.step;
    this.setState({ step: step,
                    prevStep: prevStep });
  }
  
  // Func passed as prop to edit selected step
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
    const acctInfo = this.state.acctInfo;
    const srcInfo = this.state.srcInfo;
    
		switch (this.state.step) {
			case 0:
				return (<Planform 
                 step={step}
                 prevStep={prevStep}
                 plan={plan}
                 acctInfo={acctInfo}
                 srcInfo={srcInfo}
                 setPlan={this.setPlan} // Func enables to set state.plan
                 nextStep={this.nextStep}/>) // Func enables to go to next step
			case 1:
				return (<Registration
                 step={step}
                 prevStep={prevStep}
                 plan={plan}
                 acctInfo={acctInfo}
                 srcInfo={srcInfo}
                 setAcctInfo={this.setAcctInfo} // Func enables to set state.acctInfo **Registration Info**
                 nextStep={this.nextStep} // Func enables to go to next step
                 previousStep={this.previousStep}/>) // Func enables to go to prev step
      case 2:
        return (<Confirm 
                 step={step}
                 prevStep={prevStep}
                 plan={plan}
                 acctInfo={acctInfo}
                 srcInfo={srcInfo}
                 setSrcInfo={this.setSrcInfo} // Func enables to set state.srcInfo **Payment info**
                 nextStep={this.nextStep} // Func enables to go to next step
                 previousStep={this.previousStep} // Func enables to go to prev step
                 editStep={this.editStep} />) // Func enables to edit selected data
                 
      case 3:
        return (<Subscribe 
                 step={step}
                 prevStep={prevStep}
                 plan={plan}
                 acctInfo={acctInfo}
                 srcInfo={srcInfo}
                 nextStep={this.nextStep} // Func enables to go to next step
                 previousStep={this.previousStep}/>) // Func enables to go to prev step
		}
	}
}

export default SignUp;
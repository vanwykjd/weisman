import React, { Component } from 'react';
import Planform from './../pages/Planform.jsx' // Page to select Plan
import Registration from './../pages/Registration.jsx' // Page to enter Email, Pass, PassConf...
import Confirm from './../pages/Confirm.jsx' // Page to edit any prev inputed data and enter Payment info
import Subscribe from './../pages/Subscribe.jsx' // Page to submit all info once all data has been verified
import Continue from './Continue'

class SignUp extends Component { 

  constructor(props) {
     super(props);
     this.state = ({
       registration_progress: 0,  
       nextStep: '',
       prevStep: '', 
       plan: '',
       acctInfo: '',
       srcInfo: ''
     });
     
     // Func to set state.plan --- passed into props
     this.setPlan = this.setPlan.bind(this);  
    
     // Func to set state.acctInfo --- passed into props
     this.setAcctInfo = this.setAcctInfo.bind(this);
    
    // Func to set state.srcInfo --- passed into props
     this.setSrcInfo = this.setSrcInfo.bind(this);

    
    // Func to set state.step and state.prevStep --- passed into props
     this.next = this.next.bind(this);
    
    // Func to set state.step and state.prevStep --- passed into props
     this.previous = this.previous.bind(this);
    
    // Func to set state.step and state.prevStep --- passed into props
     this.edit = this.edit.bind(this);
    
     this.getStatus = this.getStatus.bind(this);

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
  
  componentWillMount() {
   return this.getStatus();
  }
  

  getStatus() {
    const request = new XMLHttpRequest();
    
    request.open("GET", '/account/new');
    request.responseType = 'text';
    
    request.onreadystatechange = () => {
      if (request.readyState === 4 && request.status == 200 ) {
        let data = JSON.parse(request.responseText);
        console.log('data', data);

        this.setState({ 
          registration_progress: data.registration_progress,
          nextStep: data.registration_progress + 1,
          prevStep: data.registration_progress - 1,
          plan: { id: data.plan },
          acctInfo: { email: data.email }
          
        });
        console.log(this.state.registration_progress);
        console.log(this.state.nextStep);
        console.log(this.state.prevStep);
        console.log(this.state.plan);
        console.log(this.state.email);
      }
    }

    request.send();
  }
  
  
  // Func passed as prop to go to next step
  next() {
    const registration_progress = this.state.registration_progress;
    const nextStep = this.state.registration_progress + 1;
    const prevStep = this.state.prevStep;
    
    if (prevStep > registration_progress) {
      this.setState({ registration_progress: prevStep,
                      nextStep: nextStep + 1,
                      prevStep: registration_progress });
    } else {
      this.setState({ registration_progress: nextStep,
                      nextStep: nextStep + 1,
                      prevStep: registration_progress });
    }
  }
  
  // Func passed as prop to go to prev step
  previous() {
    const registration_progress = this.state.registration_progress - 1;
    const prevStep = this.state.registration_progress;
    
    this.setState({ registration_progress: registration_progress,
                    prevStep: prevStep });
  }
  
  // Func passed as prop to edit selected step
  edit(step) {
    const editStep = step;
    const prevStep = this.state.registration_progress;
    this.setState({ registration_progress: editStep,
                    prevStep: prevStep });
  }
  
  
  render() {
    const registration_progress = this.state.registration_progress;
    const nextStep = this.state.nextStep;
    const prevStep = this.state.prevStep;
    const plan = this.state.plan;
    const acctInfo = this.state.acctInfo;
    const srcInfo = this.state.srcInfo;
    
      switch (this.state.registration_progress) {
        case 0:
          return (<Planform 
                   registration_progress={registration_progress}
                   nextStep={nextStep}
                   prevStep={prevStep}
                   plan={plan}
                   acctInfo={acctInfo}
                   srcInfo={srcInfo}
                    
                   setPlan={this.setPlan}
                    
                   next={this.next}/>) 
        case 1:
          return (<Registration
                   registration_progress={registration_progress}
                   nextStep={nextStep}
                   prevStep={prevStep}
                   plan={plan}
                   acctInfo={acctInfo}
                   srcInfo={srcInfo}
                   getStatus={this.getStatus}
                   getForm={this.getForm}
                    
                   setAcctInfo={this.setAcctInfo}
                    
                   next={this.next} 
                   previous={this.previous}/>) 

        case 2:
          return (<Confirm 
                   registration_progress={registration_progress}
                   nextStep={nextStep}
                   prevStep={prevStep}
                   plan={plan}
                   acctInfo={acctInfo}
                   srcInfo={srcInfo}
                    
                   setSrcInfo={this.setSrcInfo} 
                    
                   next={this.next} 
                   previous={this.previous} 
                   edit={this.edit} />) 

        case 3:
          return (<Subscribe 
                   registration_progress={registration_progress}
                   nextStep={nextStep}
                   prevStep={prevStep}
                   plan={plan}
                   acctInfo={acctInfo}
                   srcInfo={srcInfo}
                    
                   next={this.next} 
                   previous={this.previous}/>)
      }   
	}
}

export default SignUp;
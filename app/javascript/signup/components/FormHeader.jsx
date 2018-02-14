import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormHeader extends React.Component {
  constructor(props) {
    super(props)
    
    this.formInputName = this.formInputName.bind(this);
    this.formInputValue = this.formInputValue.bind(this);
  }
  
  formInputName() {
    const request = new XMLHttpRequest();
    
    request.open("GET", '/accounts/sign_up');
    request.responseType = 'document';
    
    request.onreadystatechange = () => {
      if (request.readyState == 4 && request.status == 200 ) {
        const data = request.response;
        const input = data.getElementsByTagName('input')
        const name = input[1].name;
        console.log(name);
      }
    }
    
    request.send();
  }
  
  formInputValue() {
    const request = new XMLHttpRequest();
    
    request.open("GET", '/accounts/sign_up');
    request.responseType = 'document';
    
    request.onreadystatechange = () => {
      if (request.readyState == 4 && request.status == 200 ) {
        const data = request.response;
        const input = data.getElementsByTagName('input')
        const name = input[1].value;
        console.log(name);
      }
    }
    
    request.send();
  }
  
  
  render() {  
    
    return (
      <div className='devise-form'>
          <Card
            number={number}
            exp_month={exp_month}
            exp_year={exp_year}
            cvc={cvc}
            paymentInput={this.paymentInput} />
          <Button onClick={() => this.props.setSrcInfo({card})}>
              submit
          </Button>
      </div>
    );
  }
}

export default FormHeader
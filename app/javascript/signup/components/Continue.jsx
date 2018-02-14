import React, { Component } from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';

class Continue extends React.Component {
  constructor(props) {
    super(props)

    this.bwContinue = this.bwContinue.bind(this);
  }
  
  // enables to set states in Registration.jsx --- passed through props
  bwContinue() {
    this.props.setStep();
  }
  
  
  render() {  

    return (
         <div className='devise-form'>
            <Button onClick={this.bwContinue}>
                Select {this.props.step}
            </Button>
         </div>
    );
  }
  
}

export default Continue
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Alerts extends React.Component {
  
  componentDidMount() {
    this.timer = setTimeout(
      this.props.onClose,
      this.props.timeout
    );
  }
  
  componentWillUnmount() {
    clearTimeout(this.timer);
  }
  
  alertClass (type) {
    let classes = {
      error: 'alert-danger',
      alert: 'alert-warning',
      notice: 'alert-info',
      success: 'alert-success'
    };
    return classes[type] || classes.success;
  }

  render() {
    const message = this.props.message;
    const alertClassName = `alert ${ this.alertClass(message.type) } fade in`;
    
    return(
      <div className={ alertClassName }>
        <button className='close'
          data-dismiss='alert'> &times; </button>
        { message.text }
      </div>
    );
  }
}

Alerts.propTypes = {
  onClose: PropTypes.func,
  timeout: PropTypes.number,
  message: PropTypes.object.isRequired
};

Alerts.defaultProps = {
  timeout: 3000
};

export default Alerts;
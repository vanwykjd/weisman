import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Alerts from './../components/Alerts'


class FlashMessages extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
            messages: props.messages
    };
    
    window.flash_messages = this;
  }
  
  addMessage(message) {
    const messages = React.addons.update(this.state.messages, { $push: [message] });
    this.setState({ messages: messages });
  }

  removeMessage(message) {
    const index = this.state.messages.indexOf(message);
    const messages = React.addons.update(this.state.messages, { $splice: [[index, 1]] });
    this.setState({ messages: messages });
  }

  render () {
    const alerts = this.state.messages.map( message =>
      <Alert key={ message.id } message={ message }
        onClose={ () => this.removeMessage(message) } />
    );
    
    return(
          <div>{ alerts }</div>                                 
        
    );
  }
}

FlashMessages.propTypes = {
  messages: PropTypes.array.isRequired
}

export default FlashMessages;
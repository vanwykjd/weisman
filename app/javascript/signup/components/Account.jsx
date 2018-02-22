import React from 'react';
import axios from 'axios';

export default class Account extends React.Component {
  state = {
    account: []
  }

  componentDidMount() {
    axios.get(`/registration_progress`)
      .then(res => {
        const account = res.data;
        this.setState({ account });
      })
  }

  render() {
    return (
      <ul>
        { this.state.account.map(account => <li>{account.id}</li>)}
      </ul>
    )
  }
}
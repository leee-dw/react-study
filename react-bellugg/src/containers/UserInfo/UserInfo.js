import React, { Component } from 'react';
import NameForm from '../../components/NameForm'
import MailForm from '../../components/MailForm'
import MobileForm from '../../components/MobileForm'
import MessengerForm from '../../components/MessengerForm'
import FlightForm from '../../components/FlightForm'
import PassportForm from '../../components/PassportForm'
class UserInfo extends Component {

  handleChange  = ({target: {name, value}}) => {
    this.setState({ [name]: value })
  }


  render() {
    return (
      <div>
        <NameForm onChange={this.handleChange} />
        <MailForm onChange={this.handleChange} />
        <MobileForm onChange={this.handleChange} />
        <MessengerForm onChange={this.handleChange} />
        <FlightForm onChange={this.handleChange} />
        <PassportForm onChange={this.handleChange} />
      </div>
    );
  }
}

export default UserInfo;
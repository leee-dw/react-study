import React, { Component } from 'react';
import DeliveryFrom from './containers/DeliveryFrom'
import UserInfo from './containers/UserInfo'
import DeliveryTo from './containers/DeliveryTo'
import Luggage from './containers/Luggage'

class App extends Component {
  render() {
    return (
      <div>
        <DeliveryFrom />
        <DeliveryTo />
        <Luggage />
        <UserInfo/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Counter from './Counter'
import Form from './Form'
import List from './List'

class App extends Component {
  render() {
    return (
      <div>
        <Counter />
        <hr />
        <Form />
        <List />
      </div>
    );
  }
}

export default App;
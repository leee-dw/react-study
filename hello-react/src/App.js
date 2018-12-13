import React, {
  Component
} from 'react';
import Form from './ components/Form'
import './App.sass'

class App extends Component {
  id = 3
  state = {
    todos: [
      {
        id: 0,
        text: '앵귤러',
        checked: true
      }
    ]
  }

  handleCreate(text) {
    const todoData = {
      id: this.id++,
      text,
      checked: false
    }
    
    this.setState({
      todos: this.state.todos.concat(todoData)
    })
    console.log(this.setState)
    
  }


  render() {

    return ( 
    <>
      <Form 
        onSumit={this.handleCreate}
      />
    </>
    );
  }
}

export default App;
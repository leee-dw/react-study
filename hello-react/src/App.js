<<<<<<< HEAD
import React, {
  Component
} from 'react';
import Form from './ components/Form'
import './App.sass'

class App extends Component {
  id = 3
=======
import React, { Component } from 'react';
import CreateForm from './components/CreateForm'
import TodoList from './components/TodoList'


import './App.sass';


const bulkTodos = (()=>{
  const array =[]
  for(let i = 0; i < 10; i++) {
    array.push({
      id: i,
      text: `Todo #${i}`,
      checked: false
    })
  }
  return array
})()


class App extends Component {
  id = 10
>>>>>>> 689161d7b7a3d6850e1232e823f6619417ba93f8
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
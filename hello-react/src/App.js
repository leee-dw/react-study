import React, { Component } from 'react';
import CreateForm from './components/CreateForm'
import TodoList from './components/TodoList'


import './App.sass';


const bulkTodos = (()=>{
  const array =[]
  for(let i = 0; i < 5000; i++) {
    array.push({
      id: i,
      text: `Todo #${i}`,
      checked: false
    })
  }
  return array
})()


class App extends Component {
  id = 5000
  state = {
    todos: bulkTodos
  }


  handleCreate = text => {
    const todoData = {
      id: this.id++,
      text,
      checked: false
    }
    this.setState({
      todos: this.state.todos.concat(todoData)
    })
  }

  handleCheck = id => {
    this.setState(({todos})=> ({
      todos: todos.map(
        todo => (todo.id === id ? {...todo, checked: !todo.checked}: todo)
      )
    }))
  }

  handleRemove = id => {
    this.setState(({todos})=> ({
      todos: todos.filter(todo => todo.id !== id)
    }))
  }

  
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>오늘 뭐할까?</h1>
        </div>
        <CreateForm onSubmit={this.handleCreate} />
        <div className="white-box">
          <TodoList
            todos={this.state.todos}
            onCheck={this.handleCheck} 
            onRemove={this.handleRemove}
          />
        </div>
      </div>
    )
  }
}

export default App;

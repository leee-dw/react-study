import React, { Fragment } from 'react';
import TodoItem from './TodoItem'


const TodoList = ({todos, onCheck, onRemove}) => {
  const todoList = todos.map(todo => (
     <Fragment>
        <TodoItem 
          id={todo.id}
          key={todo.id}
          checked={todo.checked}
          text={todo.text}
          onCheck={onCheck}
          onRemove={onRemove}
          todo={todo}
        />
      </Fragment>
  ))
  return todoList
}

export default TodoList;
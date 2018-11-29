import React from 'react';
import { withStateHandlers } from 'recompose';

const Counter = ({ value, increment, decrement, reset }) => {
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>초기화</button>
    </div>
  )
}


const enhance = withStateHandlers (
  {value:0},
  {
    increment: ({value}) => () => ({value: value + 1}),
    decrement: ({value}) => () => ({value: value - 1}),
    reset: ({value}) => () => ({value: 0})
  }
)

export default enhance(Counter)
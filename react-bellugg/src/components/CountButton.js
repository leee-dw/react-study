import React, { Component } from 'react';

class CountButton extends Component {
  render() {
    const {id, onIncrement, onDecrement} = this.props
    return (
      <div>

        <button 
          className="increase-btn"
          onClick={()=>{onIncrement(id)}}
        >+</button>

        <button 
          className="decrease-btn"
          onClick={()=>{onDecrement(id)}}
        >-</button>
        
      </div>
    );
  }
}

export default CountButton;
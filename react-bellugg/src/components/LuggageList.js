import React, { Component } from 'react';
import CountButton from './CountButton'



class LuggageList extends Component {
  render() {
    const {id, size, count, cost, onIncrement, onDecrement} = this.props
    return (
      <div className="pannel-list">
        <div className="panel-heading">
          <label className="panel-title">{size}</label>
        </div>
        <div className="panel-body">
          <div className="panel-image">[이미지 들어가는 곳]</div>
          <div className="panel-count">{count}</div>
          <CountButton
            id={id}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          />
        </div>
        <div className="panel-footer">{cost} THB/Unit</div>
        <hr />
      </div>
    );
  }
}

export default LuggageList;
import React, { Component } from 'react';

class MessengerForm extends Component {
  render() {
    const { onChange } = this.props
    return (
      <div>
        <label>Messenger</label>
        <input 
          type="text" 
          name="messenger"
          className="messenger-input"
          onChange={onChange}
        />
      </div>
    );
  }
}

export default MessengerForm;
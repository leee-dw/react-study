import React, { Component } from 'react';

class NameForm extends Component {
  render() {
    const { onChange } = this.props
    return (
      <div>
        <label>Name</label>

        <input 
          type="text" 
          name="name"
          className="name-input"
          onChange={onChange}
        />

        <label>Booked Name</label>
        
        <input 
          type="text" 
          name="booked-name"
          className="booked-name-input"
          onChange={onChange}
        />
      </div>
    );
  }
}

export default NameForm;
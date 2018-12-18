import React, { Component } from 'react';

class PassportForm extends Component {
  render() {
    const { onChange } = this.props
    return (
      <div>
        <label>Passport</label>
        <input 
          type="text" 
          name="passport"
          className="passport-input"
          onChange={onChange}
        />
      </div>
    );
  }
}

export default PassportForm;
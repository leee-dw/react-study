import React, { Component } from 'react';

class MailForm extends Component {
  render() {
    const { onChange } = this.props
    return (
      <div>
        <label>Mail</label>
        <input 
          type="text" 
          name="mail"
          className="mail-input"
          onChange={onChange}
        />
      </div>
    );
  }
}

export default MailForm;
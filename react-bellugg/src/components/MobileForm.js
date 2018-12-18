import React, { Component } from 'react';

class MobileForm extends Component {
  render() {
    const { onChange } = this.props
    return (
      <div>
        <label>Mobile</label>
        <input 
          type="text" 
          name="mobile"
          className="mobile-input"
          onChange={onChange}
        />
      </div>
    );
  }
}

export default MobileForm;
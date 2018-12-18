import React, { Component } from 'react';

class FlightForm extends Component {
  render() {
    const { onChange } = this.props
    return (
      <div>
        <label>Flight</label>
        <input 
          type="text" 
          name="flight"
          className="flight-input"
          onChange={onChange}
        />
      </div>
    );
  }
}

export default FlightForm;
import React, {Component} from 'react';
class SelectList extends Component {
  
  render() {
    const {children} = this.props
    return (
      <ul>
        {children}
      </ul>
    )
  }
}
export default SelectList;
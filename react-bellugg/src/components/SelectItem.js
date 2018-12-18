import React, { Component } from 'react';

class SelectItem extends Component {  
  render() {
    const {list, className} = this.props

    return (
      <li className={className}>
        <a href="/">
          <span>{list}</span>
        </a>
      </li>
    )
    
  }
}

export default SelectItem;
import React from 'react';
import './Header.sass'

const Header = ({left, right}) => {
  return (
  <div className="Header">
    <div className="side left">{left}</div>
    <div className="middle">리액트</div>
    <div className="side right">{right}</div>
  </div>
  );
};

export default Header;
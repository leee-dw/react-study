import React from 'react';
import classNames from 'classnames'
import './Button.sass'

const Button = ({ children, theme, ...rest }) => {
  return (
    <button className={classNames('Button', theme)} {...rest}>
      {children}
    </button>
  );
};


Button.defaultProps = {
  theme: 'default'
}

export default Button;
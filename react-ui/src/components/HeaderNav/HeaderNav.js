<<<<<<< HEAD
import React from 'react';
=======
import React, { Component } from 'react';
>>>>>>> d573280361feda86fc09561286fe8edb2a0bf798
import {
  MdHome as HomeIcon,
  MdNotifications as NotificationIcon,
  MdEmail as MailIcon
} from 'react-icons/md'
<<<<<<< HEAD


=======
>>>>>>> d573280361feda86fc09561286fe8edb2a0bf798

import classNames from 'classnames'

import './HeaderNav.sass'





const HeaderNavItem = ({children, selected, tab, iconType, onSelect}) => {
  const icon = iconType ? React.createElement(iconType) : null
  return (
    <div
      className={classNames('HeaderNavItem', {active: selected === tab})}
      onClick={() => onSelect(tab)}
    >
      {iconType && <div className="icon">{icon}</div>}
      <div className="text">{children}</div>
    </div>
  )
}


class HeaderNav extends Component {
  render() {
    const {tab, onSelect} = this.props 
    return (
      <div className="HeaderNav">
        <HeaderNavItem
          iconType={HomeIcon}
          tab="home"
          onSelect={onSelect}
          selected={tab}
        >
          홈
        </HeaderNavItem>

        <HeaderNavItem
          iconType={NotificationIcon}
          tab="notification"
          onSelect={onSelect}
          selected={tab}
        >
          알림
        </HeaderNavItem>

        <HeaderNavItem
          iconType={MailIcon}
          tab="message"
          onSelect={onSelect}
          selected={tab}
        >
          쪽지
        </HeaderNavItem>

      </div>
    );
  }
}

export default HeaderNav;
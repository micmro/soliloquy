import React, { Component } from 'react';
import './Avatar.css';


class Avatar extends Component {
  render() {
    return <div className="Avatar">{this.props.initials}</div>;
  }
}

Avatar.defaultProps = {
  initials: 'MM'
};

export default Avatar
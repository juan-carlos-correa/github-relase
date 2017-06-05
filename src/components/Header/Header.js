import React from 'react';
import './Header.css';

class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <header className="Header">
        <h1>{this.props.title}</h1>
      </header>
    )
  }
}

export default Header;

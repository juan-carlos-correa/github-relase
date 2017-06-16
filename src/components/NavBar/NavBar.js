import React from 'react';
import { NavLink as Link } from 'react-router-dom';

class NavBar extends React.PureComponent {
  render () {
    return (
      <nav className="Navigation">
        <Link exact to="/" className="Link" activeClassName="Link-active">Home</Link>
        <Link exact to="/about" className="Link" activeClassName="Link-active">About</Link>
      </nav>
    )
  }
}

export default NavBar;
import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.PureComponent {
  render () {
    return (
      <nav>
        <Link to="/" className="Link">Home</Link>
        <Link to="/about" className="Link">About</Link>
      </nav>
    )
  }
}

export default NavBar;
import React from 'react';

import SearchContainer from '../SearchContainer';
import { Link } from 'react-router-dom';

class BaseContainer extends React.Component {

  render() {
    return (
      <main className="container">
        <nav>
          <Link exact to="/" className="Link" activeClassName="Link--active">Home</Link>
          <Link exact to="/about" className="Link" activeClassName="Link--active">About</Link>
        </nav>
        {this.props.children || <SearchContainer />}
      </main>
    )
  }
}

export default BaseContainer;
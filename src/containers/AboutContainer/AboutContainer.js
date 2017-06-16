import React from 'react';

import Header from '../../components/Header';
import NavBar from '../../components/NavBar/';
import About from '../../components/About/';

class AboutContainer extends React.PureComponent {
  render () {
    return (
      <main className="container">
        <Header title="Github Releases"/>
        <NavBar />
        <About />
      </main>
    )
  }
}

export default AboutContainer;
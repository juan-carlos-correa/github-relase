import React from 'react';

class About extends React.PureComponent {
  
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }
  
  render() {
    return (
      <p>Página de About </p>
    )
  }
}

export default About;
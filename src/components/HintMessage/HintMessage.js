import React from 'react';
import PropTypes from 'prop-types';
import './HintMessage.css';

class HintMessage extends React.PureComponent {
  static PropTypes = {
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.string
    ]).isRequired
  }

  render = () => <p className="HintMessage">{this.props.children}</p>;
}

export default HintMessage;
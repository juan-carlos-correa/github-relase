import React from 'react';
import PropTypes from 'prop-types';

class ExternalLink extends React.PureComponent {
  static PropTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node,
      PropTypes.element
    ]).isRequired,
    className: PropTypes.string
  }

  static defaultProps = {
    className: ''
  }

  render() {
    return (
      <a
        href={this.props.to}
        className={this.props.className}
        rel="noopener"
      >
        {this.props.children}
      </a>
    )
  }
}

export default ExternalLink;

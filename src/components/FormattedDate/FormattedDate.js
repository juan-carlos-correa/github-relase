import React from 'react';
import PropTypes from 'prop-types';

class FormattedDate extends React.PureComponent {
  static PropTypes = {
    date: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]).isRequired
  };

  get parseDate() {
    let date = new Date(),
    time = typeof this.props.date === 'string'
      ? Date.parse(this.props.date)
      : this.props.date;
    date.setTime(time);
    return date;
  }

  padNumber(number) {
    return number < 10 ? `0${number}` : `${number}`;
  }

  get formatDate() {
    let date = this.parseDate;
    return `${this.padNumber(date.getDate())}-${this.padNumber(date.getMonth() + 1)}`+
           `-${this.padNumber(date.getFullYear())}`;
  }

  render() {
    return <date>{this.formatDate}</date>;
  }
}

export default FormattedDate;
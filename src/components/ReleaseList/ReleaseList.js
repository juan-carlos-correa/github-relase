import React from 'react';
import PropTypes from 'prop-types';

import HintMessage from '../HintMessage/';
import ReleaseRow from '../ReleaseRow/';
import Paginator from '../Paginator';

class ReleaseList extends React.PureComponent {
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    loading: PropTypes.bool.isRequired,
    repoName: PropTypes.string.isRequired
  }

  renderMessage() {
    let text = '';

    if (this.props.loading) {
      text = <span>REtrieving releases of <b>{this.props.repoName}</b></span>;
    } else if (this.props.data.length === 0) {
      text = <span><b>{this.props.repoName}</b> doesn't have any public release</span>;
    } else {
      text = <span>Showing <b>{this.props.data.length}</b> release of <b>{this.props.repoName}</b></span>
    }

    return <HintMessage>{text}</HintMessage>;
  }

  renderTable() {
    if (this.props.loading || this.props.data.length === 0) {
      return null;
    } else {
      return (
        <table className="u-full-width">
          <thead>
            <tr>
              <th>Name</th>
              <th>Author</th>
              <th>Release date</th>
              <th>Download</th>
            </tr>
          </thead>
          <tbody>
            { this.props.data.map(release =>
              <ReleaseRow release={ release } key={ release.id } />
            )}
          </tbody>
        </table>
      )
    }
  }

  render() {
    return ( 
      <div>
        { this.renderMessage() }
        { this.renderTable() }
      </div>
    )
  }
}

export default Paginator(ReleaseList);
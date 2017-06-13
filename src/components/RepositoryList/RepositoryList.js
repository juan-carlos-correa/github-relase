import React from 'react';
import PropTypes from 'prop-types';

import RepositoryRow from '../RepositoryRow';
import HintMessage from '../HintMessage';

class RepositoryList extends React.PureComponent {
  static PropTypes = {
    repositories: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    queried: PropTypes.bool.isRequired,
    search: PropTypes.string.isRequired
  }

  renderMessage() {
    let text = '', l = this.props.repositories.length;

    if (this.props.loading) {
      text = <span>Searching results for <b>{this.props.search}</b></span>
    } else if (l > 0) {
      text = <span>I found <b>{l}</b> repositories for <b>{this.props.search}</b></span>
    } else if (l === 0 && this.props.queried) {
      text = <span>I could't find any repositories matching <b>{this.props.search}</b></span>
    } else {
      text = 'Type the name of a repository and click search';
    }

    return <HintMessage>{text}</HintMessage>
  }

  renderTable() {
    if (this.props.repositories.length === 0) return null;

    return (
      <table className="u-full-width">
        <thead>
          <tr>
            <th>Repository</th>
            <th>Owner</th>
            <th>Stars</th>
            <th>Forks</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.props.repositories.map(repo =>
            <RepositoryRow repo={repo} key={repo.id} />
          )}
        </tbody>
      </table>
    )
  }

  render() {
    return (
      <section className="RepositoryList">
        {this.renderMessage()}
        {this.renderTable()}
      </section>
    )
  }
}

export default RepositoryList;
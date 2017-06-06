import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import FaStar from 'react-icons/lib/fa/star';
import FaCodeFork from 'react-icons/lib/fa/code-fork';
import GithubAvatar from '../GithubAvatar';


class RepositoryRow extends React.PureComponent {
  static propTypes = {
    repo: PropTypes.object.isRequired
  }

  render() {
    let repo = this.props.repo;

    return (
      <tr>
        <td>{repo.full_name}</td>
        <td><GithubAvatar author={repo.owner} /></td>
        <td><FaStar />{repo.stargazers_count}</td>
        <td><FaCodeFork />{repo.forks_count}</td>
        <td className="align-right">
          <Link className="button button-primary" to={ `/${repo.full_name}`}>Releases</Link>
        </td>
      </tr>
    )
  }
}

export default RepositoryRow;
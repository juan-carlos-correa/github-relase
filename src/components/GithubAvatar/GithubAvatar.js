import React from 'react';
import PropTypes from 'prop-types';
import './GithubAvatar.css';

import ExternalLink from '../ExternalLink';

class GithubAvatar extends React.PureComponent {
  static propTypes = {
    author: PropTypes.shape({
      login: PropTypes.string.isRequired,
      avatar_url: PropTypes.string.isRequired,
      html_url: PropTypes.string.isRequired
    }).isRequired
  }

  render() {
    let author = this.props.author;

    return (
      <span className="GithubAvatar">
        <img className="GithubAvatarImage" alt={`${author.login}'s avatar`}
        src={author.avatar_url}/>
        <ExternalLink to={author.html_url}>{author.login}</ExternalLink> 
      </span>
    )
  }

}

export default GithubAvatar;

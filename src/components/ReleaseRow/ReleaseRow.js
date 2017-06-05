import React from 'react';
import PropTypes from 'prop-types'

import ExternalLink from '../ExternalLink';
import FormattedDate from '../FormattedDate';
import GithubAvatar from '../GithubAvatar';

class ReleaseRow extends React.PureComponent {
  static propTypes = {
    release: PropTypes.object.isRequired
  }

  get releaseName() {
    let release = this.props.release;
    return release.name !== '' ? release.name : release.tag_name;
  }

  render() {
    let release = this.props.release;

    return <tr className="ReleaseRow">
      <td><ExternalLink to={ release.html_url }>{ this.releaseName }</ExternalLink></td>
      <td><GithubAvatar author={ release.author } /></td>
      <td><FormattedDate date={ release.published_at } /></td>
      <td style={ { width: '185px' } }>
        <ExternalLink to={ release.zipball_url } className="ReleaseRow__Button button button-primary">
          .zip
        </ExternalLink>
        <ExternalLink to={ release.tarball_url } className="ReleaseRow__Button button">
          .tgz
        </ExternalLink>
      </td>
    </tr>;
  }
}

export default ReleaseRow;
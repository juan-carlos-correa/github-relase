import React from 'react';
import PropTypes from 'prop-types';

import ReleaseList from '../../components/ReleaseList';

class DetailsContainer extends React.Component {
  static propTypes = {
    params: PropTypes.shape({
      user: PropTypes.string.isRequired,
      repo: PropTypes.string.isRequired
    }).isRequired
  }

  constructor(props) {
    super(props);

    this.state = {
      releases: [],
      loading: true
    }
  }

  get repoName() {
    return `${this.props.params.user}/${this.props.params.repo}`;
  }

  componentDidMount() {
    fetch(`https://api.github.com/repos/${ this.repoName }/releases`)
      .then(res => {
        return res.json()
      })
      .then(res => {
        this.setState({ releases: res, loading: false });
      })
      .catch(err => {
        console.log(err);
        this.setState({ loading: false });
      })
  }

  render() {
    return (
      <section>
        <h2>Releases of <b>{ this.repoName }</b></h2>
        <ReleaseList data={ this.state.releases } loading={ this.state.loading }
        repoName={ this.repoName } total={ this.state.releases.length }
        itemsPerPage={ 5 }/>
      </section>
    )
  }
}

export default DetailsContainer;
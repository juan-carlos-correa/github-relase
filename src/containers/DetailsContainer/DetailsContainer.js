import React from 'react';
import NavBar from '../../components/NavBar/';
import Header from '../../components/Header';
import SearchForm from '../../components/SearchForm';

import ReleaseList from '../../components/ReleaseList';

class DetailsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      releases: [],
      loading: true
    }

    this.back = this.back.bind(this);
  }

  get repoName() {
    return `${this.props.match.params.user}/${this.props.match.params.repo}`;
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

  back() {
    this.props.history.goBack();
  }

  render() {
    return (
      <main className="container">
        <Header title="Github Releases"/>
        <NavBar />
        <h2>Releases of <b>{ this.repoName }</b></h2>
        <button onClick={ this.back }>Back</button>
        <ReleaseList data={ this.state.releases } loading={ this.state.loading }
        repoName={ this.repoName } total={ this.state.releases.length }
        itemsPerPage={ 5 }/>
      </main>
    )
  }
}

export default DetailsContainer;
import React from 'react';
// import PropTypes from 'prop-types';

import Header from '../../components/Header';
import SearchForm from '../../components/SearchForm';
import RepositoryList from '../../components/RepositoryList';

class SearchContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      results: [],
      search: '',
      queried: false
    }

    this.onSubmit = this.onSubmit.bind(this);
  }
  stubData() {
    let repo = {
      full_name: 'My Repository',
      owner: {
        login: 'Juan',
        avatar_url: 'https://avatars0.githubusercontent.com/u/10777626?v=3&u=60191f3f31ea2737acba5547f54b4ed0ddfa9a19&s=400',
        html_url: 'https://github.com/juan-carlos-correa'
      },
      stargazers: 1,
      forks_count: 3
    }
    return [
      Object.assign({}, repo),
      Object.assign({}, repo),
      Object.assign({}, repo),
      Object.assign({}, repo),
      Object.assign({}, repo),
      Object.assign({}, repo),
      Object.assign({}, repo),
      Object.assign({}, repo),
      Object.assign({}, repo),
      Object.assign({}, repo)
    ]
  }

  onSubmit(value) {
    this.setState({loading: true});

    console.log(`submit: ${value}`);

    setTimeout(() => {
      this.setState({
        search: value,
        loading: false,
        queried: true,
        results: this.stubData()
      });
    }, 2000)
  }

  render() {
    return (
      <main className="container">
        <Header title="Github Releases"/>
        <SearchForm onSubmit={this.onSubmit} search={this.state.search} />
        <RepositoryList data={this.state.results} loading={this.state.loading}
        queried={this.state.queried} search={this.state.search} />
      </main>
    )
  }
}

export default SearchContainer;
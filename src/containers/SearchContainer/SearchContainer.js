import React from 'react';

import Header from '../../components/Header';
import SearchForm from '../../components/SearchForm';
import RepositoryList from '../../components/RepositoryList';
import NavBar from '../../components/NavBar/';

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

  onSubmit(value) {
    this.setState({loading: true});

    fetch(`https://api.github.com/search/repositories?q=${value}`)
    .then(res => {
      return res.json();
    })
    .then(json => {
      console.log(json.items);
      this.setState({
        search: value,
        loading: false,
        queried: true,
        results: json.items
      })
    })
  }

  render() {
    return (
      <main className="container">
        <Header title="Github Releases"/>
        <NavBar />
        <SearchForm onSubmit={this.onSubmit} search={this.state.search} />
        <RepositoryList data={this.state.results} loading={this.state.loading}
        queried={this.state.queried} search={this.state.search} />
      </main>
    )
  }
}

export default SearchContainer;
import React from 'react';
import PropTypes from 'prop-types';

import { startSearch, successSearch } from '../../actions/actions';

import Header from '../../components/Header';
import SearchForm from '../../components/SearchForm';
import RepositoryList from '../../components/RepositoryList';
import NavBar from '../../components/NavBar/';

import { connect } from 'react-redux'; 

class SearchContainer extends React.Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    results: PropTypes.arrayOf(PropTypes.object).isRequired,
    search: PropTypes.string.isRequired,
    queried: PropTypes.bool.isRequired
  }

  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit = value => {
    this.props.dispatch(startSearch(value));
    fetch(`https://api.github.com/search/repositories?q=${ value }`)
      .then(res => {
        return res.json();
      })
      .then(res => {
        this.props.dispatch(successSearch(res.items));
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <main className="container">
        <Header title="Github Releases"/>
        <NavBar />
        <SearchForm onSubmit={this.onSubmit} search={this.props.search} />
        <RepositoryList data={this.props.results} loading={this.props.loading}
        queried={this.props.queried} search={this.props.search} />
      </main>
    )
  }
}

const mapStateToProps = state => {
  let { search, loading, results, queried } = state;
  return { search, loading, results, queried };
}

export default connect(mapStateToProps)(SearchContainer);
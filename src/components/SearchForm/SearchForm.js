import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      search: ''
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({search: e.target.value})
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.search)
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label>Search a Repository</label>
        <input type="text" className="u-full-width" placeholder="react, webpack..."
          onChange={this.onChange} defaultValue={this.state.search}/>
        <p className="align-center">
          <input type="submit" className="button-primary" value="Search" />
        </p>
      </form>
    );
  }
}

export default SearchForm;
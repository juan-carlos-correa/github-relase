import React from 'react';
import PropTypes from 'prop-types';

import './Paginator.css';

export default PaginatedComponent => {

  class Paginator extends React.Component {

    static propTypes = {
      itemsPerPage: PropTypes.number,
      data: PropTypes.array.isRequired
    }

    static defaultProps = {
      itemsPerPage: 8
    }

    constructor(props) {
      super(props);

      this.onClick = this.onClick.bind(this);

      this.state = {page: 0}
    }

    componentWillReceiveProps(nextProps) {
      let page = this.state.page;
      if (nextProps.data.length / this.props.itemsPerPage < page) {
        page = 0;
      }

      if (page !== this.state.page) {
        this.setState({ page });
      }
    }

    onClick(e, page) {
      e.preventDefault();
      if (page !== this.state.page) {
        this.setState({ page });
      }
    }

    renderPagination() {
      let numberPages = Math.ceil(this.props.data.length / this.props.itemsPerPage),
        pages = [];
      if (numberPages > 1){
        for(let i = 0; i < numberPages; i++) {
          let cssClass = "Paginator__Page";
          cssClass = i === this.state.page ? `${ cssClass } Paginator__Page--active` : cssClass;

          pages.push(
            <a href="" className={ cssClass } key={i} onClick={(e) => this.onClick(e, i)}>
              {i + 1}
            </a>
          )
        }
      }
      return (
        <div className="Paginator__Pagination">
          { pages }
        </div>
      )
    }

    pageData() {
      let data = [];

      if (this.props.data.length > 0) {
        data = this.props.data.slice(this.state.page * this.props.itemsPerPage,
          (this.state.page + 1) * this.props.itemsPerPage);
      }

      return data;
    }

    render() {
      let paginatedProps = Object.assign({}, this.props,
        { data: this.pageData() });

      return <section className="Paginator">
        <PaginatedComponent {...paginatedProps} />
        { this.renderPagination() }
      </section>;
    }
  }

  Paginator.WrappedComponent = PaginatedComponent;

  return Paginator;
}
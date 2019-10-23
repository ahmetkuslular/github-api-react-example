import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Table from 'components/Table';
import SearchBox from './SearchBox';

import { searchRepositories } from 'redux/search/actions';
import { media } from 'utils';
import repoColumns from 'constants/repoColumns';

class Home extends Component {
  state = this.initialState();

  initialState() {
    const {
      search: { params },
    } = this.props;

    const defaultParams = {
      q: {
        language: 'javascript',
      },
      per_page: 10,
      page: 1,
    };

    return { ...defaultParams, ...params };
  }

  componentDidMount() {
    const {
      search: { data },
    } = this.props;

    if (data && data.length < 1) {
      this.fetch(this.state);
    }
  }

  handleRadioSelected = event => {
    const language = event.target.value;
    const { q } = this.state;
    q.language = language;

    this.setState({ q });
    this.fetch({ q });
  };

  handleSearch = event => {
    const searchKeyword = event.target.value;
    const { q } = this.state;
    q.searchKeyword = searchKeyword;

    if (searchKeyword.length >= 3 || searchKeyword === '') {
      this.setState({ q });
      this.fetch({ q });
    }
  };

  handleTableChange = (pagination, sorter) => {
    this.setState({
      page: pagination.page,
      per_page: pagination.perPage,
      sort: sorter.columnKey,
      order: sorter.order,
    });
    this.fetch({
      page: pagination.page,
      per_page: pagination.perPage,
      sort: sorter.columnKey,
      order: sorter.order,
    });
  };

  fetch = (fetchParams = {}) => {
    const {
      search: { params },
    } = this.props;

    this.props.searchRepositories({ ...params, ...fetchParams });
  };

  render() {
    const {
      search: { data, loading, params },
    } = this.props;
    const { per_page, page, page_count, sort, order } = this.state;
    const pagination = {
      perPage: per_page,
      pageCount: page_count,
      page,
    };
    const sorter = {
      columnKey: sort,
      order,
    };
    return (
      <ContainerBox>
        <SearchBox
          {...params.q}
          handleSearch={this.handleSearch}
          handleRadioSelected={this.handleRadioSelected}
        />
        <Table
          rowKey="id"
          tableKey="users"
          data={data && data.items}
          columns={repoColumns}
          loading={loading}
          onChange={this.handleTableChange}
          pagination={pagination}
          sorter={sorter}
        />
      </ContainerBox>
    );
  }
}
const mapDispatchToProps = ({ search }) => ({
  search,
});

export default connect(
  mapDispatchToProps,
  { searchRepositories },
)(Home);

const ContainerBox = styled.div`
  background-color: ${props => props.theme.primaryColor};
  border: 1px solid ${props => props.theme.borderColor};;
  border-radius: 5px;
  padding: 2.14em;
  margin: 0 0 2.14em 0;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  ${media.sm`
    padding: 0;
    border: none;
    background: none;
  `};
`;

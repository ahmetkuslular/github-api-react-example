import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Table from 'components/Table';

import { searchRepositories } from 'redux/search/actions';
import { media } from 'utils';
import repoColumns from 'constants/repoColumns';
import SearchBox from './SearchBox';

class App extends Component {
  state = this.initialState();

  initialState (){
    const {search: {params}} = this.props;

    const temp = {
      searchParams: {
        language: 'javascript'
      },
      pagination: {
        perPage: 10,
        pageCount: 10,
      },
      ...params
    }
    console.log('TEMP', temp);
    return temp;

  }
  componentDidMount() {

    this.fetch(this.state);
  }

  handleRadioSelected = event => {
    const language = event.target.value;
    const { searchParams } = this.state;

    searchParams.language = language;
    this.setState({ searchParams });
    this.fetch({ ...this.state, searchParams });
  };

  handleSearch = event => {
    const searchKeyword = event.target.value;
    const { searchParams } = this.state;

    searchParams.searchKeyword = searchKeyword;
    if (searchKeyword.length >= 3 || searchKeyword === '') {
      this.setState({ searchParams });
      this.fetch({ ...this.state, searchParams });
    }
  };

  handleTableChange = (pagination, sorter) => {
    this.setState({ pagination });
    this.fetch({
      ...this.state,
      ...(pagination && { pagination: pagination }),
      ...(sorter && { sorter: sorter}),
    });
  };

  fetch = (params = {}) => {
    const { searchParams, pagination, sorter } = params;

    this.props.searchRepositories({
      searchParams,
      pagination,
      sorter
    });
  };

  render() {
    const { searchParams,pagination } = this.state;
    const {
      search: { data, loading },
    } = this.props;

    return (
      <div>
        <AppTitle>GITHUB API EXAMPLE</AppTitle>
        <ContainerBox>
          <SearchBox
            {...searchParams}
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
          />
        </ContainerBox>
      </div>
    );
  }
}
const mapDispatchToProps = ({ search }) => ({
  search,
});

export default connect(
  mapDispatchToProps,
  { searchRepositories },
)(App);

const AppTitle = styled.h2`
  color: #b5b5b5;
  text-align: center;
  &:hover {
    color: #f50;
  }
`;

export const ContainerBox = styled.div`
  background-color: #fff;
  border: 1px solid #efefef;
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

import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Input from 'components/Input';
import Table from 'components/Table';
import RadioGroup from 'components/Radio/RadioGroup';

import { searchRepositories } from 'redux/search/actions';
import { media } from 'utils';
import repoColumns from 'constants/repoColumns';
import languageOptions from 'constants/languageOptions';
import SearchBox from './SearchBox';

class Home extends Component {
  state = {
    language: 'scala',
    searchKeyword: '',
    sorter: null,
    pagination: {
      perPage: 10,
      pageCount: 5,
    },
  };

  componentDidMount() {
    this.fetch(this.state);
  }

  handleRadioSelected = event => {
    const language = event.target.value;

    this.setState({ language });
    this.fetch({ language });
  };

  handleSearch = event => {
    const searchKeyword = event.target.value;

    if (searchKeyword.length >= 3 || searchKeyword === '') {
      this.setState({ searchKeyword });
      this.fetch({ searchKeyword });
    }
  };

  handleTableChange = (pagination, sorter) => {
    this.setState({ pagination, sorter });
    this.fetch({ ...this.state, pagination, sorter });
  };

  fetch = (params = {}) => {
    const { language, searchKeyword, pagination, sorter } = params;
    this.props.searchRepositories({
      searchParams: {
        language,
        searchKeyword,
      },
      sort: sorter && sorter.columnKey,
      order: sorter && sorter.order,
      page: pagination && pagination.page,
      per_page: pagination && pagination.perPage,
    });
  };

  render() {
    const { language, pagination } = this.state;
    const {
      search: { data, loading },
    } = this.props;

    return (
      <div>
        <AppTitle>GITHUB API EXAMPLE</AppTitle>
        <ContainerBox>
          <SearchBox
            language={language}
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
)(Home);

const AppTitle = styled.h2`
  color: #b5b5b5;
  text-align: center;
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

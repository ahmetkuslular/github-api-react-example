import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { media } from 'utils';
import Input from '../components/Input/Input';
import Radio from '../components/Radio';
import Table from '../components/Table';

import { searchRepositories } from 'redux/search/actions';
import RadioGroup from '../components/Radio/RadioGroup';

const columns = [
  { title: 'Repo Id', dataIndex: 'id', key: 'id' },
  { title: 'Username', dataIndex: 'owner.login', key: 'username' },
  // { title: 'Description', dataIndex: 'description', key: 'description' },
  { title: 'Stars', dataIndex: 'stargazers_count', key: 'stars', sorter: true },
  { title: 'Forks', dataIndex: 'forks', key: 'forks', sorter: true },
  { title: 'Last Update Date', dataIndex: 'updated_at', key: 'updated', sorter: true },
];

const options = [
  {
    name: 'language',
    label: 'Javascript',
    value: 'javascript',
  },
  {
    name: 'language',
    label: 'Scala',
    value: 'scala',
  },
  {
    name: 'language',
    label: 'Python',
    value: 'python',
  },
];
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

  handleOnChange = event => {
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

  handleTableChange = (pagination, sorter, extra) => {
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
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', marginBottom: 10 }}>
            <div style={{ flex: 1 }}>
              <Input placeholder="Search" onChange={this.handleSearch} />
            </div>
            <div
              style={{ flex: 3, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <RadioGroup
                  name="language"
                  options={options}
                  value={language}
                  onChange={this.handleOnChange}
                />
              </div>
            </div>
          </div>

          <Table
            rowKey="id"
            tableKey="users"
            data={data && data.items}
            columns={columns}
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
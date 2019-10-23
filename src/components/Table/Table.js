import React, { Component } from 'react';
import styled from 'styled-components';

import Loader from '../Loader';
import Columns from './Columns';
import Pagination from './Pagination';
import Items from './Items';

import { media } from 'themes/mediaSettings';
import { EmptyData } from '../Icons';

class Table extends Component {
  static defaultProps = {
    data: [],
    loading: false,
  };

  state = {
    sorter: {},
  };

  handleSorting = sorter => {
    const { onChange, pagination } = this.props;

    this.setState({ sorter });
    onChange && onChange(pagination, sorter);
  };

  handlePagination = pagination => {
    const { onChange } = this.props;
    const { sorter } = this.state;

    onChange && onChange(pagination, sorter);
  };

  render() {
    const { rowKey, columns, data, loading, pagination, sorter } = this.props;

    return (
      <TableOverflow>
        {loading && (
          <LoadingWrapper>
            <Loader />
          </LoadingWrapper>
        )}
        {data && data.length < 1 ? (
          <EmptyDataWrapper>
            <EmptyData />
          </EmptyDataWrapper>
        ) : (
          <StyledTable>
            <Columns columns={columns} onChange={this.handleSorting} sorter={sorter} />
            <Items columns={columns} data={data} rowKey={rowKey} />
          </StyledTable>
        )}
        {pagination && <Pagination {...pagination} onChange={this.handlePagination} />}
      </TableOverflow>
    );
  }
}

const TableOverflow = styled.div`
  background-color: transparent;
  overflow-x: scroll;
  position: relative;
  min-height: 120px;
  ${media.sm`
    max-width: 100%;
    overflow-x: hidden;
    background-color: transparent;
  `};
`;

const StyledTable = styled.table`
  border-collapse: collapse;
  min-width: 57em;
  width: 100%;
  margin-bottom: 20px;
  ${media.sm`
    table-layout: fixed;
    min-width: 100%;
    border-collapse: collapse;
  `};
`;

const LoadingWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0px;
  right: 0;
  background: #f1f1f1;
  opacity: 0.5;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const EmptyDataWrapper = styled.div`
  flex: 1;
  justify-content: center;
  display: flex;
  margin: 50px;
`;

export default Table;

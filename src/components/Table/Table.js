import React, { Component } from 'react';
import styled from 'styled-components';

import Loader from '../Loader';
import Columns from './Columns';
import Pagination from './Pagination';
import Items from './Items';

import { media } from 'utils';

class Table extends Component {
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
    const { rowKey, columns, data, loading, pagination } = this.props;

    return (
      <TableOverflow>
        {loading && (
          <LoadingWrapper>
            <Loader />
          </LoadingWrapper>
        )}
        <StyledTable>
          <Columns columns={columns} onChange={this.handleSorting} />
          <Items columns={columns} data={data} rowKey={rowKey} />
        </StyledTable>
        <Pagination {...pagination} onChange={this.handlePagination} />
      </TableOverflow>
    );
  }
}

const TableOverflow = styled.div`
  background-color: #fff;
  overflow-x: scroll;
  position: relative;
  ${media.sm`
    max-width: 100%;
    overflow-x: hidden;
    background-color: #fff;
    border-top: 1px solid  #efefef;
    border-bottom: 1px solid  #efefef;
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
  `};
`;

const LoadingWrapper = styled.table`
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

export default Table;

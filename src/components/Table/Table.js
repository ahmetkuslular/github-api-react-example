import React, { Component } from 'react';
import styled from 'styled-components';

import Columns from './Columns';
import Items from './Items';

import { media } from 'utils';

class Table extends Component {
  render() {
    const { columns, data } = this.props;
    return (
      <TableOverflow>
        <StyledTable>
          <Columns columns={columns} />
          <Items columns={columns} data={data} />
        </StyledTable>
      </TableOverflow>
    );
  }
}

export const TableOverflow = styled.div`
  background-color: #fff;
  overflow-x: scroll;
  ${media.sm`
    max-width: 100%;
    overflow-x: hidden;
    background-color: #fff;
    border-top: 1px solid  #efefef;
    border-bottom: 1px solid  #efefef;
  `};
`;
export const StyledTable = styled.table`
  border-collapse: collapse;
  min-width: 57em;
  width: 100%;
  ${media.sm`
    table-layout: fixed;
    min-width: 100%;
  `};
`;

export default Table;

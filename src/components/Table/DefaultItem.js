import React from 'react';
import styled from 'styled-components';

const DefaultItem = ({ item, columns }) => {
  return (
    <TBody>
      <ItemWrapper>
        {columns.map(column => (
          <Item key={column.key}>{item[column.dataIndex]}</Item>
        ))}
      </ItemWrapper>
    </TBody>
  );
};

const TBody = styled.tbody`
  &:last-child {
    tr:last-child {
      border-bottom: none !important;
    }
  }
`;

export const ItemWrapper = styled.tr`
  cursor: auto;
  border-bottom: 1px solid #efefef;
  &:hover {
    > td {
      background-color: #f8f9fa;
    }
  }
`;

export const Item = styled.td`
  white-space: nowrap;
  padding: 16px 16px;
  background-color: #fff;
  font-size: 12px;
`;

export default DefaultItem;

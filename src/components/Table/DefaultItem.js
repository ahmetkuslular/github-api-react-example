import React from 'react';
import styled from 'styled-components';

const DefaultItem = ({ item, columns }) => {
  return (
    <TBody>
      <ItemWrapper>
        {columns.map((column, index) => (
          <Item key={column.key}>
            {column.render
              ? column.render(item[column.dataIndex], item, index)
              : item[column.dataIndex]}
          </Item>
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

const ItemWrapper = styled.tr`
  cursor: auto;
  border-bottom: 1px solid ${props => props.theme.borderColor};;
  max-width: 10px;
 
  &:hover {
    > td {
      background-color: ${props => props.theme.secondaryColor};
      color: ${props => props.theme.textColor};
    }
  }
`;

const Item = styled.td`
  white-space: normal;
  padding: 16px 16px;
  background-color: transparent;
  font-size: 12px;
  color:${props => props.theme.tableTextColor};
`;

export default DefaultItem;

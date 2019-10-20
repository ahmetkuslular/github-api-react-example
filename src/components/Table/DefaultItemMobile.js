import React from 'react';
import styled from 'styled-components';

const DefaultItemMobile = ({ item, columns }) => {
  return (
    <TBody key="content">
      {columns.map(column => (
        <MobileItemWrapper key={column.key} disableFlex>
          <MobileItem key="column" isTitle>
            {column.title}
          </MobileItem>
          <MobileItem textRight key="value">
            {item[column.dataIndex]}
          </MobileItem>
        </MobileItemWrapper>
      ))}
    </TBody>
  );
};

const TBody = styled.tbody`
  &:last-child {
    tr:last-child {
      border-bottom: none !important;
    }
  }
  tr:first-child > td {
    padding-top: 2.143em;
  }
  tr:last-child > td {
    padding-bottom: 2.143em;
  }
`;

const MobileItemWrapper = styled.tr``;
const MobileItem = styled.td`
  padding: 16px 16px;
  color: '#4c4c4c';
  font-weight: 400;
  text-align: ${props => (props.textRight ? 'right' : 'left')};
  div {
    justify-content: ${props => (props.textRight ? 'flex-end' : 'flex-start')};
  }
`;

export default DefaultItemMobile;

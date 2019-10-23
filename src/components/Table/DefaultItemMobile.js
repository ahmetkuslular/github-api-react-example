import React from 'react';
import styled from 'styled-components';

const DefaultItemMobile = ({ item, columns }) => {
  return (
    <TBody key="content">
      {columns.map((column, index) => (
        <MobileItemWrapper key={column.key} disableFlex>
          <MobileItemLabel key="column" isTitle>
            {column.title}
          </MobileItemLabel>
          <MobileItem textRight key="value">
            {column.render
              ? column.render(item[column.dataIndex], item, index)
              : item[column.dataIndex]}
          </MobileItem>
        </MobileItemWrapper>
      ))}
    </TBody>
  );
};

export default DefaultItemMobile;

const TBody = styled.tbody`

`;

const MobileItemWrapper = styled.tr`
  border: solid 1px ${props => props.theme.borderColor};
`;

const MobileItemLabel = styled.td`
  padding: 16px 16px;
  color: ${props => props.theme.tableTextColor};
  background-color: transparent;
  font-weight: 600;
  text-align: ${props => (props.textRight ? 'right' : 'left')};
  div {
    justify-content: ${props => (props.textRight ? 'flex-end' : 'flex-start')};
  }
`;

const MobileItem = styled.td`
  padding: 16px 16px;
  color: ${props => props.theme.tableTextColor};
  background-color: transparent;
  font-weight: 400;
  text-align: ${props => (props.textRight ? 'right' : 'left')};
  div {
    justify-content: ${props => (props.textRight ? 'flex-end' : 'flex-start')};
  }
`;

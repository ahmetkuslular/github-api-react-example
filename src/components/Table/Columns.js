import React from 'react';
import styled from 'styled-components';
import { media } from '../../utils';

export const Columns = ({ columns }) => {
  return (
    <TitlesWrapper>
      <Titles>
        {columns.map(column => (
          <Title key={column.key}>{column.title}</Title>
        ))}
      </Titles>
    </TitlesWrapper>
  );
};

const TitlesWrapper = styled.thead`
  background-color: #f6f6f6;
  ${media.sm`
    display: none
  `};
`;
const Titles = styled.tr``;
const Title = styled.th`
  padding: 16px 16px;
  font-weight: 600;
  font-size: 15px;
  text-align: left;
  white-space: pre-line;
  color: #395564;
`;

export default Columns;

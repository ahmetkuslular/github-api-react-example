import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { media } from '../../utils';
import { UpIcon, DownIcon, SortIcon } from '../Icons';

class Columns extends Component {
  state = {
    sorter: {
      column: null,
      order: 'desc',
      field: null,
      columnKey: null,
    },
  };

  onChange = column => {
    const { sorter } = this.state;
    const { onChange } = this.props;
    const temp = {
      column,
      order: sorter.order === 'desc' ? 'asc' : 'desc',
      field: column.dataIndex,
      columnKey: column.key,
    };

    this.setState({ sorter: temp });
    onChange && onChange(temp);
  };

  render() {
    const { sorter } = this.state;
    const { columns } = this.props;
    return (
      <TitlesWrapper>
        <Titles>
          {columns.map(column => {
            if (column.sorter) {
              return (
                <Title
                  key={column.key}
                  sorter={column.sorter}
                  onClick={() => this.onChange(column)}
                >
                  {column.title}
                  {sorter && column.key === sorter.columnKey ? (
                    sorter.order === 'asc' ? (
                      <UpIcon width={12} height={12} color="#f50" style={{ marginLeft: 10 }} />
                    ) : (
                      <DownIcon width={12} height={12} color="#f50" style={{ marginLeft: 10 }} />
                    )
                  ) : (
                    <SortIcon width={12} height={12} color="gray" style={{ marginLeft: 10 }} />
                  )}
                </Title>
              );
            }
            return <Title key={column.key}>{column.title}</Title>;
          })}
        </Titles>
      </TitlesWrapper>
    );
  }
}

const TitlesWrapper = styled.thead`
  ${media.sm`
    display: none
  `};
`;
const Titles = styled.tr``;

const Title = styled.th`
  flex: 1;
  justify-content: space-between;
  padding: 16px 16px;
  font-weight: 600;
  font-size: 15px;
  text-align: left;
  white-space: pre-line;
  color: #395564;
  white-space: nowrap
    ${props =>
      props.sorter &&
      css`
        &:hover {
          background-color: #f6f6f6;
          cursor: pointer;
        }
      `};
`;

export default Columns;

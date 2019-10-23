import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export class Pagination extends Component {
  static defaultProps = {
    page: 1,
    loading: false,
    pageCount: 10,
  };
  static propTypes = {
    page: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    pageCount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    loading: PropTypes.bool.isRequired,
  };

  handleClick = page => {
    const { onChange, perPage } = this.props;
    onChange && onChange({ page, perPage });
  };

  render() {
    const { page, pageCount } = this.props;
    const currentPage = parseInt(page, 10);
    const hasPrev = page > 1;
    const hasNext = currentPage < pageCount;

    return (
      <StyledPagination>
        <PaginationButton disabled={!hasPrev} onClick={() => this.handleClick(currentPage - 1)}>
          PREV
        </PaginationButton>
        <PaginationButton disabled={!hasNext} onClick={() => this.handleClick(currentPage + 1)}>
          NEXT
        </PaginationButton>
      </StyledPagination>
    );
  }
}

export default Pagination;

const StyledPagination = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-right: 1.87em;
  justify-content: flex-end;
`;

const PaginationButton = styled.button`
  font-size: 12px;
  color: #395564;
  padding: 0.58em 0;
  border-radius: 0.5em;
  border-color: #395564;
  font-weight: normal;
  padding: 0.5em;
  outline: none;
  cursor: pointer;
  margin-left: 1.25em;
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0px 2px 3px -1px #ddd;
    color: #f50;
    border-color: #f50;
  }
  ${props =>
    props.disabled &&
    `
      color: #395564;
      background-color: white;
      opacity: 0.5;
      cursor: not-allowed;
      
      &:hover {
        transform: none;
        box-shadow: none;
        border-color: #395564;
        color:#395564;
        opacity:0.5;
      }
  `}
`;

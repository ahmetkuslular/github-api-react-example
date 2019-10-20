import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export class Pagination extends React.Component {
  static defaultProps = {
    page: 1,
    loading: false,
  };
  static propTypes = {
    page: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    pageCount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    loading: PropTypes.bool.isRequired,
  };

  handleClick = page => {
    const { onChange, perPage, pageCount } = this.props;
    onChange && onChange({ page, perPage, pageCount });
  };

  render() {
    const { page, pageCount } = this.props;
    const currentPage = parseInt(page, 10);
    const hasPrev = page > 1;
    const hasNext = currentPage < pageCount;
    console.log({ currentPage, pageCount });
    return (
      <StyledPagination>
        <PaginationButton
          beveled
          disabled={!hasPrev}
          uppercase={false}
          onClick={() => this.handleClick(currentPage - 1)}
        >
          Prev
        </PaginationButton>
        <PaginationButton
          beveled
          disabled={!hasNext}
          uppercase={false}
          onClick={() => this.handleClick(currentPage + 1)}
        >
          Next
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
  margin-left: 1.25em;
`;

import styled, { css } from 'styled-components';
import { media } from 'utils';

/**
 * Table Wrappers Styled Components
 * **/
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

/**
 * Table Wrappers Styled Components
 * **/

export const TBody = styled.tbody`
  &:last-child {
    tr:last-child {
      border-bottom: none !important;
    }
  }
  ${props =>
    props.isDefault &&
    css`
      tr:first-child > td {
        padding-top: 2.143em;
      }
      tr:last-child > td {
        padding-bottom: 2.143em;
      }
    `}
  ;
`;


/**
 *  Item Mobile Styled Components
 *  **/
export const MobileItemWrapper = styled.tr``;
export const MobileItem = styled.td`
  padding: 0.714em 1.429em;
  color: '#4c4c4c';
  font-weight: 400;
  text-align: ${props => (props.textRight ? 'right' : 'left')};
  div {
    justify-content: ${props => (props.textRight ? 'flex-end' : 'flex-start')};
  }
`;
/**
 * Item Mobile Styled Components
 * **/

/** Separators Styled Components **/
export const Separator = styled.td`
  height: 1.429em;
  background-color: #f50;
`;

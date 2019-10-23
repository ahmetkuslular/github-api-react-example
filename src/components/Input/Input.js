import React from 'react';
import styled from 'styled-components';

function Input(props) {
  return <StyledInput {...props} />;
}

const StyledInput = styled.input`
  width: 100%;
  height: 3em;
  border-radius: 0.357em;
  padding: 0 0.71em;
  border: solid 2px ${props => props.theme.borderColor};;
  color: #395564;
  outline: none;
  background-color: transparent;
  &:focus {
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    border: solid 2px ${props => props.theme.secondaryColor};;;
  }
  &:disabled {
    cursor: not-allowed;
    color: #aaa;
  }
`;

export default Input;

import React from 'react';
import styled from 'styled-components';

function Radio({ label, input, meta, ...rest }) {
  return (
    <Wrapper>
      <Input {...input} {...rest} type="radio" />
      <RadioCircle />
      {label}
    </Wrapper>
  );
}

export default Radio;

const Wrapper = styled.label`
  position: relative;
  cursor: pointer;
  display: flex;
  margin-right: 0.714em;
  align-items: center;
  font-size: 12px;
  color: ${props => props.theme.textColor};
`;

const RadioCircle = styled.span`
  display: inline-block;
  vertical-align: -0.25em;
  height: 1.286em;
  width: 1.286em;
  border-radius: 50%;
  border: 1px solid ${props => props.theme.secondaryColor};
  margin-right: 0.5em;
  flex-shrink: 0;
`;

const Input = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  visibility: hidden;
  &:checked + ${RadioCircle} {
    border-color: ${props => props.theme.secondaryColor};
    background-image: radial-gradient(
      circle closest-side,
      white 0%,
      white 40%,
      ${props => props.theme.secondaryColor} 60%,
      ${props => props.theme.secondaryColor} 100%
    );
  }
`;

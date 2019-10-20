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
  color: #395564;
`;

const RadioCircle = styled.span`
  display: inline-block;
  vertical-align: -0.25em;
  height: 1.286em;
  width: 1.286em;
  border-radius: 50%;
  border: 1px solid #b7c4cb;
  margin-right: 0.5em;
  flex-shrink: 0;
`;

const Input = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  visibility: hidden;
  &:checked + ${RadioCircle} {
    border-color: #f50;
    background-image: radial-gradient(
      circle closest-side,
      white 0%,
      white 40%,
      #f50 60%,
      #f50 100%
    );
  }
`;

import React from 'react';
import styled from 'styled-components';

function ErrorBox({ children }) {
  return (
    <Container>
      <Label>{children}</Label>
    </Container>
  );
}

const Container = styled.div`
  flex: 1;
  width: 100%;
  border: solid 1px #f5c6cb;
  background-color: #f8d7da;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
`;

const Label = styled.div`
  font-size: 12px;
  color: #721c24;
`;

export default ErrorBox;

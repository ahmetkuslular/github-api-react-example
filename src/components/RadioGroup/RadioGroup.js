import React from 'react';
import styled from 'styled-components';

import Radio from './Radio';

function RadioGroup({ name, options, value, onChange, style }) {
  return (
    <Wrapper style={style}>
      {options.map(option => (
        <Radio
          key={option.value}
          {...option}
          checked={value === option.value}
          onChange={onChange}
          name={name}
        />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
`;

export default RadioGroup;

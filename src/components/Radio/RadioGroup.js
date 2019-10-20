import React, { Component } from 'react';
import styled from 'styled-components';

import Radio from './Radio';

class RadioGroup extends Component {
  render() {
    const { name, options, value, onChange, style } = this.props;
    return (
      <Wrapper style={style}>
        {options.map(option => (
          <Radio key={option.value} {...option} checked={value === option.value} onChange={onChange} name={name}/>
        ))}
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
    flex:1
    display:flex;
`;
export default RadioGroup;

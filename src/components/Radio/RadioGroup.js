import React, { Component } from 'react';
import styled from 'styled-components';

import Radio from './Radio';

class RadioGroup extends Component {
  render() {
    const { options, value, onChange, style } = this.props;
    return (
      <Wrapper style={style}>
        {options.map(option => (
          <Radio {...option} checked={value === option.value} onChange={onChange} />
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

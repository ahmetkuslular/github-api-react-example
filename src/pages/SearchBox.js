import React from 'react';
import styled from 'styled-components';

import Input from 'components/Input';
import RadioGroup from '../components/RadioGroup';
import languageOptions from 'constants/languageOptions';

function SearchBox({ language,searchKeyword, handleSearch, handleRadioSelected }) {
  return (
    <Container>
      <InputWrapper>
        <Input placeholder="Search" onChange={handleSearch} value={searchKeyword} />
      </InputWrapper>
      <RadioGroupWrapper>
        <RadioGroup
          name="language"
          options={languageOptions}
          value={language}
          onChange={handleRadioSelected}
        />
      </RadioGroupWrapper>
    </Container>
  );
}

const Container = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const InputWrapper = styled.div`
  flex: 1;
`;

const RadioGroupWrapper = styled.div`
  flex: 3;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export default SearchBox;

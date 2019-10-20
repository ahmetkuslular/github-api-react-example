import React, { Component } from 'react';
import styled from 'styled-components';

import { media } from 'utils';
import Input from '../components/Input/Input';
import Radio from '../components/Radio';
import Table from '../components/Table'
import RadioGroup from '../components/Radio/RadioGroup';

const columns = [
  { title: 'First Name', dataIndex: 'firstName', key: 'firstName' },
  { title: 'Last Name', dataIndex: 'lastName', key: 'lastName' },
  { title: 'Job Title', dataIndex: 'jobTitle', key: 'jobTitle' },
];

const data = [
  {
    key: '1',
    firstName: 'Mike',
    lastName: 'mike',
    jobTitle: '10 Downing Street',
  },
  {
    key: '2',
    firstName: 'John',
    lastName: 'John',
    jobTitle: '10 Downing Street',
  },
  {
    key: '3',
    firstName: 'John',
    lastName: 'John',
    jobTitle: '10 Downing Street',
  },
  {
    key: '4',
    firstName: 'John',
    lastName: 'John',
    jobTitle: '10 Downing Street',
  },
  {
    key: '5',
    firstName: 'John',
    lastName: 'John',
    jobTitle: '10 Downing Street',
  },
  {
    key: '6',
    firstName: 'John',
    lastName: 'John',
    jobTitle: '10 Downing Street',
  },
  {
    key: '7',
    firstName: 'John',
    lastName: 'John',
    jobTitle: '10 Downing Street',
  },
];

const options = [
  {
    name: 'test',
    label: 'Javascript',
    value: 'A',
  },
  {
    name: 'test',
    label: 'Scala',
    value: 'B',
  },
];
class Home extends Component {
  state = {
    selectedValue: 'A',
  };

  handleOnChange = e => {
    this.setState({
      selectedValue: e.target.value,
    });
  };

  render() {
    const { selectedValue } = this.state;
    return (
      <div>
        <AppTitle>GITHUB API EXAMPLE</AppTitle>
        <ContainerBox>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', marginBottom:10 }}>
            <div style={{ flex: 1 }}>
              <Input placeholder="Search"/>
            </div>
            <div
              style={{ flex: 3, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Radio value="a" label="test" name="selam" />
                <Radio value="b" label="test" name="selam" />
              </div>
            </div>
          </div>

          <Table tableKey="users" data={data} columns={columns} />
        </ContainerBox>
      </div>
    );
  }
}
const AppTitle = styled.h2`
  color: #b5b5b5;
  text-align: center;
`;

export const ContainerBox = styled.div`
  background-color: #fff;
  border: 1px solid #efefef;
  border-radius: 5px;
  padding: 2.14em;
  margin: 0 0 2.14em 0;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  ${media.sm`
    padding: 0;
    border: none;
    background: none;
  `};
`;

export default Home;

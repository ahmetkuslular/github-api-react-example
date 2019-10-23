import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { connect, Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Home from './Home';

import { persistor, store } from 'store';
import themes from 'themes';
import { changeTheme } from 'redux/appSettings/actions';

class App extends Component {
  changeTheme = () => {
    const {
      appSettings: { theme },
    } = this.props;

    const newTheme = theme === 'light' ? 'dark' : 'light';
    this.props.changeTheme(newTheme);
  };

  render() {
    const {
      appSettings: { theme },
    } = this.props;

    return (
      <ThemeProvider theme={themes[theme]}>
        <Main>
          <Container>
            <AppTitle>
              GITHUB API EXAMPLE{' '}
              <MoonButton onClick={this.changeTheme}>
                {theme === 'light' ? (
                  <span role="img" aria-label={theme}>
                    🌒
                  </span>
                ) : (
                  <span role="img" aria-label={theme}>
                    🌔
                  </span>
                )}
              </MoonButton>
            </AppTitle>
            <Home />
          </Container>
        </Main>
      </ThemeProvider>
    );
  }
}

const mapDispatchToProps = ({ appSettings }) => ({
  appSettings,
});

export default connect(
  mapDispatchToProps,
  { changeTheme },
)(App);

const Main = styled.div`
  position: absolute
  background-color: ${props => props.theme.background};
  height: 100%;
  width:100%;
`;

const Container = styled.div`
  flex: 1;
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
`;

const AppTitle = styled.div`
  color: #b5b5b5;
  text-align: center;
  font-size: 30px;
  font-weight: 600;
  &:hover {
    color: #f50;
  }
`;

const MoonButton = styled.button`
  background-color: transparent;

  text-transform: capitalize;
  font-size: 25px;
  outline: none;
  border: none;
  cursor: pointer;
`;

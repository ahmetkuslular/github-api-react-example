import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import styled from 'styled-components'

import { store, persistor } from 'store';
import Home from 'pages/Home';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Container>
          <Home />
        </Container>
      </PersistGate>
    </Provider>
  );
}

const Container = styled.div`
  flex: 1;
  max-width: 1000px;
  margin: 0 auto;
`;

export default App;

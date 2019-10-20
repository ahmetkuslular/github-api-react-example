import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import styled from 'styled-components';

import App from 'pages/App';

import { store, persistor } from 'store';
import './index.css';

const Container = styled.div`
  flex: 1;
  max-width: 1000px;
  margin: 0 auto;
`;

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Container>
        <App />
      </Container>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);



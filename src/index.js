import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
// import { PersistGate } from 'redux-persist/integration/react';

import './index.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <Router>
        <App />
      </Router>
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
// import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import './index.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <Router basename="goit-react-hw-08-phonebook">
        <App />
      </Router>
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>
);

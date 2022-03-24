import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store';
import AppContainer from "./components/hoc/AppContainer.jsx";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <AppContainer>
    <App />
    </AppContainer>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


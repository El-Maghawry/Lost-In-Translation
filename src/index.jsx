import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import store from './store/store'
import AppContainer from './components/hoc/AppContainer.jsx'
import {sessionInitAction} from './store/actions/sessionActions'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

store.dispatch(sessionInitAction());


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

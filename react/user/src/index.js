import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import configureStore from './Store/configureStore';
import Home from './containers/Home';


const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <React.Fragment>
      <App />
      <Home />
    </React.Fragment>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();

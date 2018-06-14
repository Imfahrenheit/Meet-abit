import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import './index.css';
import {BrowserRouter as Router} from 'react-router-dom'
import App from '../src/app/layout/App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import configureStore  from './app/strore/configureStore'
const store = configureStore()

ReactDOM.render(
  <Provider store={store} > 
  <Router>
    <App />
  </Router>
</Provider>,
  
  document.getElementById("root")
);
registerServiceWorker();

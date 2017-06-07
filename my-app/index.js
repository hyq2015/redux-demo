import React ,{Component} from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import Routes from './routes/index';
// import DevTool from './containers/DevTool';
const store = configureStore();
const history = createHistory()
// console.log(store);
import Frame from './containers/Frame';
import App from './containers/App';

render((
  <Provider store={store}>
    { /* ConnectedRouter will use the store from Provider automatically */ }
    <ConnectedRouter history={history}>
      <div>
          {Routes()}
      </div>
    </ConnectedRouter>
    
  </Provider>
),document.getElementById('root'))
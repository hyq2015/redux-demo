import React ,{Component} from 'react';
import {render} from 'react-dom';
import { hashHistory } from 'react-router';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import {syncHistoryWithStore} from 'react-router-redux';
import Routes from './routes/index';
// import DevTool from './containers/DevTool';
const store = configureStore();
// console.log(store);
// const history=syncHistoryWithStore(hashHistory,store);
import Frame from './containers/Frame';
import App from './containers/App';
/*render((
  <Provider store={store}>
    {routes(history)}
  </Provider>
),document.getElementById('root'))*/
render((
  <Provider store={store}>
    <div>
      <Routes/>
      {/*<DevTool/>*/}
    </div>
  </Provider>
),document.getElementById('root'))
import React, { Component} from 'react'
import { createStore, applyMiddleware,compose,combineReducers } from 'redux';
import 'core-js/fn/object/assign';
import 'babel-polyfill';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';
import {createLogger} from 'redux-logger';
import promiseMiddleware from 'redux-promise';

// import DevTools from '../containers/DevTool';
import {fromJS} from 'immutable'
//applyMiddleware来自redux可以包装 store 的 dispatch
//thunk作用是使action创建函数可以返回一个function代替一个action对象
const logger=createLogger();
const middlewares=[
  thunk,
  promiseMiddleware,
  logger
];
const createStoreWithMiddleware = compose(
    applyMiddleware(...middlewares)
    // DevTools.instrument()
)(createStore)

export default function configureStore(initialState=fromJS({})) {
 
  const store = createStoreWithMiddleware(rootReducer, initialState)
  // const store = createStore(rootReducer, initialState,applyMiddleware(...middlewares))
  //热替换选项
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}

import { createStore, applyMiddleware,compose,combineReducers } from 'redux';
import 'core-js/fn/object/assign';
import 'babel-polyfill';
import thunk from 'redux-thunk';
import {routerReducer} from 'react-router-redux';
import rootReducer from '../reducers/index';
import DevTools from '../containers/DevTool';
//applyMiddleware来自redux可以包装 store 的 dispatch
//thunk作用是使action创建函数可以返回一个function代替一个action对象
const createStoreWithMiddleware = compose(
    applyMiddleware(
        thunk
    ),
    DevTools.instrument()
)(createStore)
// const reducer=combineReducers(Object.assign({},rootReducer,{
//   counter:0
// }));
export default function configureStore(initialState) {
  console.log(initialState)
  const store = createStoreWithMiddleware(rootReducer, initialState)

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

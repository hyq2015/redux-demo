import { combineReducers } from 'redux-immutable'
import counter from './counterRecucer'
import play from './playReducer'
import {routerReducer } from 'react-router-redux';
//使用redux的combineReducers方法将所有reducer打包起来
const rootReducer = combineReducers({
  counter,
  play,
  router: routerReducer
})
// const rootReducer = combineReducers({counter:counter,play:play,routing:routerReducer})

export default rootReducer

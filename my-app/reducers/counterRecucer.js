import { INCREMENT_COUNTER, DECREMENT_COUNTER,FETCH_DATA } from '../actions/counterActions'
//reducer其实也是个方法而已,参数是state和action,返回值是新的state
const initialState={
  name:'huangyunqi',
  counter:10,
  imgarr:[]
}
export default function counter(state =initialState, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        counter:action.payLoad.counter
      }
    case DECREMENT_COUNTER:
      return {
        ...state,
        counter:action.payLoad.counter
      }
    case FETCH_DATA:
      return {
        ...state,
        counter:action.payLoad.counter,
        imgarr:action.payLoad.imgarr
      }
    default:
      return state
  }
}

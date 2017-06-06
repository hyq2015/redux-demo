import { FETCH_DATA } from '../actions/playActions'
//reducer其实也是个方法而已,参数是state和action,返回值是新的state
const initialState1={
  mallarr:[]
}
export default function play(state =initialState1, action) {
  switch (action.type) {
    
    case FETCH_DATA:
      return {
        ...state,
        mallarr:action.payLoad.mallarr
      }
    default:
      return state
  }
}

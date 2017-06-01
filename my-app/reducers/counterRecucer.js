import { INCREMENT_COUNTER, DECREMENT_COUNTER,FETCH_DATA } from '../actions/counterActions'

//reducer其实也是个方法而已,参数是state和action,返回值是新的state
let initialState={
  counter:0
}
export default function counter(state =10, action) {
    console.log(action);
    console.log(state);
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state+1
    case DECREMENT_COUNTER:
      return state - 1
    case FETCH_DATA:
      return fetchData('/alpha/api/app/index/mall/query',{'isRecommend':true,'onSale':true,'size':10},state)
    default:
      return state
  }
}
function fetchData(url,body,state){
  let option = {
      'method':'POST',
      'headers':{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      'credentials':'include'
    };
    option = Object.assign({},option, {'body':JSON.stringify(body)});
    fetch(url,option).then(res=>res.json()).then((res)=>{
      return {
        ...state,
        name:'jack'
      }
    })
}
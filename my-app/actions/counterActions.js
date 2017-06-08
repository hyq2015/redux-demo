
import types from '../src/js/actiontypes'
import { push } from 'react-router-redux';
//导出加一的方法
export function increment() {
  return (dispatch, getState) => {
    dispatch({
      type: types.INCREMENT_COUNTER,
      payLoad:{
        counter:getState().get('counter').counter+1
      }
    })
  }
  
}
//导出减一的方法
export function decrement() {
  return (dispatch, getState) => {
    dispatch({
      type: types.DECREMENT_COUNTER,
      payLoad:{
        counter:getState().get('counter').counter-1
      }
    })
  }
}
//导出奇数加一的方法，该方法返回一个方法，包含dispatch和getState两个参数，dispatch用于执行action的方法，getState返回state
export function incrementIfOdd() {
  return (dispatch, getState) => {
    //获取state对象中的counter属性值
    const { counter } = getState().get('counter')
    console.log(counter);
    //偶数则返回
    if (counter % 2 === 0) {
      return
    }
    //没有返回就执行加一
    dispatch(increment())
  }
}
//导出一个方法,包含一个默认参数delay,返回一个方法,一秒后加一
export function incrementAsync(delay = 1000) {
  return dispatch => {
    setTimeout(() => {
      dispatch(increment())
    }, delay)
  }
}

//请求数据
export function fetchData(){
   return (dispatch, getState) => {
    //  dispatch(push('play'))
     fetchData1('/alpha/api/app/index/mall/query',{'isRecommend':true,'onSale':true,'size':10}).then(res=>res.json()).then(res=>{
       console.log(res);
       dispatch({
          type:types.FETCH_DATA_COUNTER,
          payLoad:{
            counter:getState().get('counter').counter+5,
            imgarr:res.content
          }
      })
     })
      
   }
}
//这些方法都导出,在其他文件导入时候,使用import * as actions 就可以生成一个actions对象包含所有的export

function fetchData1(url,body){
  let option = {
      'method':'POST',
      'headers':{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      'credentials':'include'
    };
    option = Object.assign({},option, {'body':JSON.stringify(body)});
    return fetch(url,option)
}
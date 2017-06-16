export const FETCH_DATA_PLAY = 'FETCH_DATA_PLAY'
import types from '../src/js/actiontypes'
import XHR from '../src/js/XHR'
//请求数据
export function fetchData(jsondata){
   return (dispatch, getState) => {
     XHR('getTheme',jsondata)
      .then(res=>{
        console.log(res)
          dispatch({
              type:types.FETCH_DATA_PLAY,
              payLoad:{
                theme:res
              }
          })
        })
      .catch(err=>{
        console.log(err)
      })
   }
}
export function noticeLoading(loadingStatus){
  return (dispatch, getState)=>{
    dispatch({
        type:types.PLAY_LOADING_STATUS,
        payLoad:{
          loading:loadingStatus
        }
    })
  }
}

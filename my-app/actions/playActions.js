export const FETCH_DATA_PLAY = 'FETCH_DATA_PLAY'
import types from '../src/js/actiontypes'
import XHR from '../src/js/XHR'
//请求数据
export function fetchData(){
   return (dispatch, getState) => {
     XHR('getTheme',{'page':1,'pageSize':10})
      .then(res=>{
        console.log(res)
          dispatch({
              type:types.FETCH_DATA_PLAY,
              payLoad:{
                mallarr:res.content
              }
          })
        })
      .catch(err=>{
        console.log(err)
      })
   }
}

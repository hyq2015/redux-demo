export const FETCH_DATA = 'FETCH_DATA1'
//请求数据
export function fetchData(){
   return (dispatch, getState) => {
     fetchData1('/alpha/api/theme/sortQuery',{'page':1,'pageSize':10}).then(res=>res.json()).then(res=>{
       console.log(res);
       dispatch({
          type:FETCH_DATA,
          payLoad:{
            mallarr:res.content
          }
      })
     })
      
   }
}

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
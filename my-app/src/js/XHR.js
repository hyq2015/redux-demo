import axios from 'axios'
import 'babel-polyfill'
const BASE_URL='/alpha'
export const URL={
    'saveAddress':{
        'url':BASE_URL+'/api/user/saveshippingaddr',
        'method':'post'
    },
    'mallInfo':{
        'url':BASE_URL+'/api/app/index/mall/query',
        'method':'post'
    },
    'getTheme':{
        'url':BASE_URL+'/api/theme/sortQuery',
        'method':'post'
    }

}
const XHR=(name,jsondata,loadtype)=>{
    console.log(name)
    console.log(jsondata)
    if(URL[name]){
        if(URL[name].method=='post'){
            return new Promise((resolve, reject)=>{
                REQUESTS.post(URL[name].url,jsondata)
                .then(res=>{
                    console.log(res)
                    if(res.data){
                        resolve(res.data)
                    }
                    
                })
                .catch(err=>{
                    if(err.response){
                        console.log(err.response);
                    }else if(err.request){
                        console.log(err.request);
                    }else{
                        console.log('Error', err.message);
                    }
                    reject({'message':'你的请求出错啦'})
                })

            })
        }
    }else{
        return false
    }
}
const REQUESTS={
    post:function(url,jsondata){
        return axios.post(url,jsondata)
    }
}
export default XHR
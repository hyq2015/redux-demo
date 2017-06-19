import types from '../src/js/actiontypes'
//reducer其实也是个方法而已,参数是state和action,返回值是新的state
const initialState1={
    dataLoaded:false,
    loading:true,
    theme:{
        content:[]
    },
    banner:{
      content:[]
    },
    bannerImgs:[],
    reverseBannerImgs:[],
    currentActive:0,
    currentActiveCircle:0,
    reverseCurrentActive:0
}
export default function play(state =initialState1, action) {
  switch (action.type) {
    
    case types.FETCH_DATA_PLAY:
      let newTheme=action.payLoad.theme;
      newTheme.content=state.theme.content.concat(newTheme.content)
      console.log(newTheme)
      return {
        ...state,
        theme:newTheme,
        dataLoaded:true,
        loading:false
      }
    case types.PLAY_LOADING_STATUS:
      return{
        ...state,
        loading:action.payLoad.loading
      }
    case types.FETCH_BANNER_PLAY:
      return{
        ...state,
        banner:action.payLoad.banner
      }
    case types.BANNER_HANDLED:
      return{
        ...state,
        bannerImgs:action.payLoad.bannerImgs,
        reverseBannerImgs:action.payLoad.reverseBannerImgs
      }

    case types.SAVE_BANNER:
      return{
        ...state,
        bannerImgs:action.payLoad.setting.bannerImgs,
        reverseBannerImgs:action.payLoad.setting.reverseBannerImgs,
        currentActive:action.payLoad.setting.currentActive,
        currentActiveCircle:action.payLoad.setting.currentActiveCircle,
        reverseCurrentActive:action.payLoad.setting.reverseCurrentActive
      }

    default:
      return state
  }
}

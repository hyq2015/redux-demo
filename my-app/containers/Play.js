import React ,{Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as PlayActions from '../actions/playActions'
import * as frameActions from '../actions/frameActions'
import { withRouter } from 'react-router-dom'
import SCROLL_POSITION from '../src/js/catcheState'
 class Play extends Component{
    constructor(props){
        super(props)
    }
    componentWillMount(){
        document.title='游玩'
    }
    componentDidMount(){
        if(this.props.mallarr.length<1){
            this.props.play.fetchData()
        }
        if(this.props.dataLoaded){
           
            let scrollBarPosition=SCROLL_POSITION.getCache(this.props.location.pathname);
            
            if(scrollBarPosition){
                window.scrollTo(0,scrollBarPosition)
            }
        }else{
            window.scrollTo(0,0)
        }
        this.props.frame.noticeTabbar(1,true)
    }
    componentWillUnmount(){
        SCROLL_POSITION.addCatche(this.props.location.pathname,document.body.scrollTop)
    }
    render(){
        const {mallarr} =this.props;
        return(
            <div>
                <div>
                    {mallarr && mallarr.length>0 ? mallarr.map((item,index)=>
                        <img key={index} src={item.imgurl} style={{width:'100%',height:200}} alt=""/>
                    ) : null}
                </div>
            </div>
        )
    }
}
//将state.counter绑定到props的counter
function mapStateToProps(state) {
  return state.get('play')
}
//将action的所有方法绑定到props上
function mapDispatchToProps(dispatch) {
  return {
      play:bindActionCreators(PlayActions, dispatch),
      frame:bindActionCreators(frameActions, dispatch)
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Play))
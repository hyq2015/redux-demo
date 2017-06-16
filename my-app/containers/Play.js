import React ,{Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as PlayActions from '../actions/playActions'
import * as frameActions from '../actions/frameActions'
import { withRouter } from 'react-router-dom'
import SCROLL_POSITION from '../src/js/catcheState'

import '../src/styles/play.less'
import SinglePlaycard from '../components/SinglePlaycard'
import Rscroller from '../components/Rscroller'
let pageSize=2;
 class Play extends Component{
    constructor(props){
        super(props)
        this.state={
            loading:false,
            loadMore:true
        }
        this.loadMoreData=this.loadMoreData.bind(this)
    }
    componentWillMount(){
        document.title='游玩'
    }
    componentDidMount(){
        if(this.props.theme.content.length<1){
            this.props.play.fetchData({'page':1,'pageSize':pageSize})
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
    loadMoreData(){
        if(!this.props.theme.last){
            this.props.play.noticeLoading(true)
            this.props.play.fetchData({'page':(this.props.theme.content.length/pageSize)+1,'pageSize':pageSize})
        }
        
    }
    render(){
        const {theme} =this.props;
        return(
            <div id="playContainer">
                <Rscroller
                    loadMore={this.props.theme.last ? false : true}
                    loading={this.props.loading}
                    loadMoreData={this.loadMoreData}
                >
                    {theme && theme.content.length>0 ? theme.content.map((item,index)=>
                        <SinglePlaycard
                            cardIndex={index}
                            key={item.id}
                            idIndex={item.id}
                            imgarr={item.imageDtos.slice(0,4)}
                            title={item.name ? item.name : '跟我耍'}
                            desc={item.simpleDesc ? item.simpleDesc : '跟我耍'}
                            toTheme={()=>{}}
                        />
                    ) : null}
                </Rscroller>
                
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
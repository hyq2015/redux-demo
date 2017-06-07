import React ,{Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as PlayActions from '../actions/playActions'
import { withRouter } from 'react-router-dom'
 class Play extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        console.log(this.props.location)
    }
    render(){
        const {mallarr,fetchData} =this.props;
        console.log(mallarr)
        return(
            <div>
                <p>this is play page</p>
                <button onClick={fetchData}>请求数据</button>
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
  return bindActionCreators(PlayActions, dispatch)
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Play))
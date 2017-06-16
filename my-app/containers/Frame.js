import React,{Component} from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as frameActions from '../actions/frameActions'
import { withRouter } from 'react-router-dom'
import {
  Link
} from 'react-router-dom'
import '../src/styles/app.less'
import Tabbar from '../components/Tabbar'


class Frame extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        console.log(this.props)
    }
    render(){
        const {activebar,tabshow,noticeTabbar}=this.props;
        return(
            <div className="frame">
                <section className="container">
                    {this.props.children}
                </section>
                {tabshow ? 
                    <Tabbar
                        activetab={activebar}
                        changeTab={(activeIndex)=>noticeTabbar(activeIndex,true)}
                    /> : null
                }
            </div>
        )
    }
}
//将state.counter绑定到props的counter
function mapStateToProps(state) {
  return state.get('frame')
}
//将action的所有方法绑定到props上
function mapDispatchToProps(dispatch) {
  return bindActionCreators(frameActions, dispatch)
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Frame))
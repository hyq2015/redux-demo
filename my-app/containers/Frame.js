import React,{Component} from 'react';
import {
  Link
} from 'react-router-dom'
import Tabbar from '../components/Tabbar'
export default class Frame extends Component{
    constructor(props){
        super(props)
    }
    
    render(){
        return(
            <div className="frame">
                <div style={{position:'fixed',top:0}}>
                    <Link to="main">主页</Link>
                    <Link to="play" style={{marginLeft:20}}>游玩</Link>
                     
                </div>
               
                <div style={{height:40}}></div>
                <section className="container">
                    {this.props.children}
                </section>
                <Tabbar/>
            </div>
        )
    }
}
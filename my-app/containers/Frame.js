import React,{Component} from 'react';
export default class Frame extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="frame">
                <div style={{position:'fixed',top:0}}>
                    <a href="#">主页</a>
                    <a href="#play">游玩</a>
                </div>
                <div style={{height:40}}></div>
                <section className="container">
                    {this.props.children}
                </section>
            </div>
        )
    }
}
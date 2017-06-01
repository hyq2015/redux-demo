import React,{Component} from 'react';
export default class Frame extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="frame">
                <a href="#">主页</a>
                <a href="#play">游玩</a>
                <section className="container">
                    {this.props.children}
                </section>
            </div>
        )
    }
}
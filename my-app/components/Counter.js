import React, { Component} from 'react'
import { push } from 'react-router-redux';
// import PropTypes from 'prop-types';
class Counter extends Component {
  constructor(props){
    super(props)
    this.goPlay=this.goPlay.bind(this);
  }
  componentDidMount(){
    if(this.props.imgarr.length<1){
      this.props.fetchData()
    }
  }
  goPlay(){
    this.props.history.push('/play')
  }
  render() {
    // console.log(this.props)
    //从组件的props属性中导入四个方法和一个变量
    const { 
      increment, incrementIfOdd, incrementAsync, decrement, counter ,fetchData,indexData,
      imgarr,history
    } = this.props;
   
    //渲染组件，包括一个数字，四个按钮
    return (
      <div>
        Clicked: {counter} times
        {' '}
        <button onClick={increment}>+</button>
        {' '}
        <button onClick={decrement}>-</button>
        {' '}
        <button onClick={incrementIfOdd}>Increment if odd</button>
        {' '}
        <button onClick={() => incrementAsync()}>Increment async</button>
        <button onClick={fetchData}>请求首页的数据</button>
        <div>首页数据:{indexData}</div>
        <button style={{marginLeft:20}} onClick={this.goPlay}>点击跳转到游玩页面</button>
        <div style={{backgroundColor:'#fff',width:'100%'}}>
          {imgarr ? imgarr.map((item,index)=>
            <img key={index} src={item.imgurl} style={{width:'100%',height:200}} alt=""/>
          ) : null}
        </div>
      </div>
    )
  }
}


export default Counter
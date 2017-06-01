import React, { Component} from 'react'
// import PropTypes from 'prop-types';
class Counter extends Component {
  render() {
    //从组件的props属性中导入四个方法和一个变量
    const { increment, incrementIfOdd, incrementAsync, decrement, counter ,fetchData,indexData} = this.props;
    // PropTypes.checkPropTypes(myPropTypes,{
    //   increment:increment,
    //   incrementIfOdd:incrementIfOdd,
    //   incrementAsync:incrementAsync,
    //   decrement:decrement,
    //   counter:counter
    // },'prop','Counter')
    //渲染组件，包括一个数字，四个按钮
    return (
      <p>
        Clicked: {counter} times
        {' '}
        <button onClick={increment}>+</button>
        {' '}
        <button onClick={decrement}>-</button>
        {' '}
        <button onClick={incrementIfOdd}>Increment if odd</button>
        {' '}
        <button onClick={() => incrementAsync()}>Increment async</button>
        <button onClick={fetchData}>请求首页</button>
        <div>首页数据:{indexData}</div>
      </p>
    )
  }
}
// const myPropTypes = {
//    //increment必须为fucntion,且必须存在
//   increment: PropTypes.func.isRequired,
//   incrementIfOdd: PropTypes.func.isRequired,
//   incrementAsync: PropTypes.func.isRequired,
//   decrement: PropTypes.func.isRequired,
//   //counter必须为数字，且必须存在
//   counter: PropTypes.number.isRequired
// };
// //限制组件的props安全
// Counter.propTypes = {
//   //increment必须为fucntion,且必须存在
//   increment: PropTypes.func.isRequired,
//   incrementIfOdd: PropTypes.func.isRequired,
//   incrementAsync: PropTypes.func.isRequired,
//   decrement: PropTypes.func.isRequired,
//   //counter必须为数字，且必须存在
//   counter: PropTypes.number.isRequired
// };


export default Counter


import React, { Component } from 'react';
import { HashRouter, Switch, Route, Redirect,withRouter } from 'react-router-dom';
import {update} from '../../redux/actions'
import { connect } from 'react-redux'
class Dlist extends React.Component {
    constructor(props) {
        super(props)
        this.state = {isToggleOn: true,dmt:'12'};
        // this.handleClick2 = this.handleClick2.bind(this); 
    }
    handClick=()=>{
        console.log('btn is click');
        this.setState({
            dmt: '13'
          });
        console.log(this.refs.myNum.value);
    }
    // 必须使用箭头函数才能取到this
    handClick2=()=>{
        console.log('接收传递的消息');
        this.props.func();
        console.log(this);
    }
   
render() {
    // const { getFieldProps } = this.props.form;
    const { PayIncrease } = this.props
    return (
       <div>
          <div> delist</div>
          <div> {this.props.list}</div>
          <div> {this.props.title}</div>
          <div> {this.props.userName}</div>
          
          <input type="text" ref="myNum" />
          <div> {React.Children.map(this.props.children,function(child){
              return child

          })}</div>
          <button onClick={this.handClick}>clik me</button>
          <button onClick={this.props.func}>注册</button>
          <button onClick={this.handClick2}>方法传递</button>
          <button onClick={PayIncrease}>升职加薪</button>
        </div>
        
    );
  }
  componentDidMount(){
      console.log(this)
    //   console.log(store);
    this.props.func();
    // setTimeout(()=>{
    // this.props.history.push('/layout/second');
    // },2000)
}
}

// const BasicInputExampleWrapper = createForm()(BasicInputExample);
// ReactDOM.render(<BasicInputExampleWrapper />, mountNode);
// class Login extends Component {
//   render() {
//     return (
//       <BasicInputExample />
//     );
//   }
// }
//需要渲染什么数据
const getList = state => {
    console.log(state,'state')
    return {
        list: state.userInfo.cityName,
        userName:state.userInfo.userName
    }
}
console.log(getList, 'getList')
//需要触发什么行为,必须要引用redux中actions的方法
function mapDispatchToProps(dispatch) {
    // console.log(dispatch(update()),'dispatch')
    return {
        PayIncrease: () => {dispatch(update('libai'));console.log()},
        PayDecrease: () => dispatch()
    }
  }
// Dlist = connect()(Dlist)
export default connect(getList,mapDispatchToProps)(Dlist);

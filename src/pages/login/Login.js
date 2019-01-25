import React, { Component } from 'react';
import { List, InputItem, WhiteSpace, Flex, Button } from 'antd-mobile';
// import { createForm } from 'rc-form';
import './Login.css'
class Login extends React.Component {
  componentDidMount() {
    // this.autoFocusInst.focus();
  }
  handleClick = () => {
    // this.inputRef.focus();
    console.log(123)
  }
  render() {
    // const { getFieldProps } = this.props.form;
    return (
      <div className="login">
      <div className="loginlist">
        <div className="logindelist">
          <div className="title">欢迎登录AI智能系统</div> 
          <List>
            <InputItem
              // {...getFieldProps('autofocus')}
              clear
              placeholder="请输入用户账号"
              ref={el => this.autoFocusInst = el}
            >用户账号：</InputItem>
            <InputItem
              // {...getFieldProps('focus')}
              clear
              placeholder="请输入用户密码"
              ref={el => this.inputRef = el}
            >用户密码：</InputItem>
            <List.Item>
              {/* <div
                style={{ width: '100%', color: '#108ee9', textAlign: 'center' }}
                onClick={this.handleClick}
              >
                click to focus
              </div> */}
              <Button size="small" type="primary" onClick={this.handleClick}>登录</Button><WhiteSpace />
            </List.Item>
          </List>
        </div>
      </div>   
      </div>
    );
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

export default Login;

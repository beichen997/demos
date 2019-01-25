
import React, { Component } from 'react';
import { HashRouter, Switch, Route, Redirect,withRouter } from 'react-router-dom';
class Second extends React.Component {
    // constructor(props) {
    //     super(props)
    //     }
  render() {
    // const { getFieldProps } = this.props.form;
    return (
       <div>
           second
        </div>
        
    );
  }
  componentDidMount(){
    setTimeout(()=>{
    this.props.history.push('/layout/first');
    },2000)
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

export default Second;

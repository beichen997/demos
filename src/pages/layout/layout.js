import './layout.css'
import React, { Component } from 'react';
import {Route, Link, Switch} from 'react-router-dom';
// import { createForm } from 'rc-form';
import First from './first';
import Second from './secong';
import Dlist from './dlist';
class Layout extends React.Component {
    handleList (){
        console.log('方法传递');
    }
  render() {
    // const { getFieldProps } = this.props.form;
   
    return (
       <div>
           <div>
               layout
           </div>
           <Dlist title="组件传值" func={this.handleList}>
                <div>组件插入</div>
           </Dlist>
           <Switch>
                <Route path="/layout/first" component={First}/>
                <Route path="/layout/second" component={Second}/>
            </Switch>
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

export default Layout;

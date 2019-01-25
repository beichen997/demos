import React from 'react'
// import { Router, Route, IndexRoute, hashHistory, childRoutes/* , Redirect */ } from 'react-router'
import {BrowserRouter as Router, Route, Switch, hashHistory} from 'react-router-dom';
import App from '../App';
import About from '../pages/About'
import Login from '../pages/login/Login'
import Undefined from '../pages/404/404'
import List2 from '../pages/routerlist/list2';
import List3 from '../pages/routerlist/list3';
import Layout from '../pages/layout/layout'
// const Routes = function () {
//   return (<Router history={hashHistory}>
//     <Route path="/app" component={App} />
//     <Route path="/about" component={About} />
//     <Route path="/list" component={List}>
//       <Route path="" component={List2} />
//       <Route path="/list3" component={List3} />
//     </Route>
//     <Route path="/" component={Login} />
//     <Route path="*" component={Undefined} />
//   </Router>);
// }
const Routes = function () {
  return (<Router>
    <Switch>
      <Route path="/app" component={App} />
      <Route path="/about" component={About} />
      {/* <Route path="/list" component={List} /> */}
        <Route path="/layout" component={Layout} />
        <Route path="/list/list3" component={List3} />
      {/* </Route> */}
      <Route path="/" component={Login} />
      <Route path="*" component={Undefined} />
    </Switch>
  </Router>);
}
export default Routes;

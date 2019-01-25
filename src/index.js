import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Routes from './configs/router.config'
import 'antd-mobile/dist/antd-mobile.css';  // or 'antd-mobile/dist/antd-mobile.less'
import { Provider } from 'react-redux';
import configureStore from './redux/index.js';
import {
    update,
    add,
    rm
  } from './redux/actions'
  
// import { Button } from 'antd-mobile';
// ReactDOM.render(<Button>Start</Button>, mountNode);
const store = configureStore();
// console.log(store.getState(),'123');
// store.dispatch(update('libai'))
console.log(store.getState(),'123')
ReactDOM.render( 
    <Provider store={store}>
        <Routes />
    </Provider>
    , 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

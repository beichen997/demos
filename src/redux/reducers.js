//定义Redux规则
import { combineReducers } from 'redux';
import * as actionTypes from './action-types.js';
import initialState from './state.js';

const userInfo = (state = initialState, action) => { 
    console.log(action.data,'action')
    switch (action.type) {
        case actionTypes.STORE_UPDATE:
            // state.userName=action.data;
            // console.log(state.userName)
            // return state;
            // 利用拷贝进行动态渲染 
            return Object.assign({}, state,{userName:action.data});
        case actionTypes.STORE_ADD:
            state.id.unshift(action.data.id);
            return state;
        case actionTypes.STORE_RM:
            state.id = state.id.filter(item => {
                if(item !== action.data.id) {
                    return state.id;
                }
            })
            return state;
        default:
            return state
    }
}
export default combineReducers({
    userInfo
})
// export default combineReducers({
//     userInfo
// })
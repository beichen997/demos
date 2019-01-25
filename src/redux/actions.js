//定义`action`创建函数生成`action`对象
import * as actionTypes from './action-types.js'

export function update(data) {
    console.log(data,'data')
    return {
        type: actionTypes.STORE_UPDATE,
        data:data
    }
}

export function add(item) {
    return {
        type: actionTypes.STORE_ADD,
        data: item
    }
}

export function rm(item) {
    return {
        type: actionTypes.STORE_RM,
        data: item
    }
}
// 包含n个reducer函数：根据老的state和指定的action返回新的state

import {combineReducers} from 'redux'
import {AUTH_SUCCESS, ERROR_MSG} from './action-types'
import getRedirectTo from '../utils/getRedirectTo'

const initUser = {
    username: '',
    type: '',
    msg: '',
    redirectTo: ''
}

function user (state = initUser, action) {
    switch (action.type) {
        case AUTH_SUCCESS:
            const {type, header} = action.data
            return {...action.data, redirectTo: getRedirectTo(type, header)}
        case ERROR_MSG:
            return {...state, msg: action.data}
        default:
            return state
    }
}


function yyy (state = 0, action) {
    return state
}

export default combineReducers({
    user,
    yyy
})

// 像外暴露的状态的结构：{xxx: 0, yyy: 0}
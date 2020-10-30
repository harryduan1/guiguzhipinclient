// 包含n个action creator
// 异步action
// 同步action


import {ReqLogin, ReqRegister, ReqUpdate, ReqUser} from '../api/index'

import {AUTH_SUCCESS, ERROR_MSG, RECEIVE_USER, RESET_USER} from './action-types'

// 授权成功的同步action
const authsuccess = (user) => ({type: AUTH_SUCCESS, data: user})

// 错误提示信息的同步action
const errmsg = (msg) => ({type: ERROR_MSG, data: msg})

// 接受用的的同步action
const receiveUser = (user) => ({type: RECEIVE_USER, data: user})

// 重置用户的同步action
const resetUser = (msg) => ({type: RESET_USER, data: msg})

// 注册异步action
export const register = user => {
    const {username, password, password2, type} = user
    if (!username) {
        return errmsg('用户名不能为空！')
    } else if (!password) {
        return errmsg('密码不能为空！')
    } else if (password !== password2) {
        return errmsg('两次密码不一致！')
    }
    return async dispatch => {
        const res = await ReqRegister({username, password, type})
        const result = res.data
        if (result.code === 0) {
            dispatch(authsuccess(result.data))
        } else {
            dispatch(errmsg(result.msg))
        }
    }
}


// 注册登陆action
export const login = user => {
    const {username, password} = user
    if (!username) {
        return errmsg('用户名不能为空！')
    } else if (!password) {
        return errmsg('密码不能为空！')
    }
    return async dispatch => {
        const res = await ReqLogin(user)
        const result = res.data
        if (result.code === 0) {
            dispatch(authsuccess(result.data))
        } else {
            dispatch(errmsg(result.msg))
        }
    }
}

// 更新用户异步action
export const updateUser = (user) => {
    return async dispatch => {
        const res = await ReqUpdate(user)
        const result = res.data
        if (result.code === 0) {
            dispatch(receiveUser(result.data))
        } else if (result.code === 1) {
            dispatch(resetUser(result.msg))
        }
    }
}

// 获取用户异步action
export const getUser = () => {
    return async dispatch => {
        const res = await ReqUser()
        const result = res.data
        if (result.code === 0) {
            dispatch(receiveUser(result.data))
        } else {
            dispatch(resetUser(result.msg))
        }
    }
}
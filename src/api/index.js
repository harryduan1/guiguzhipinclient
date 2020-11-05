/*
包含了n个接口请求的函数的模块
函数返回值为: promise
 */

import ajax from './ajax'

const baseUrl = '/zhaopin'

// 注册接口
export const reqRegister = (user) => ajax(`${baseUrl}/register`, user, 'POST')
// 登陆接口
export const reqLogin = ({username, password}) => ajax(`${baseUrl}/login`,{username, password}, 'POST')
// 更新用户接口
export const reqUpdateUser = (user) => ajax(`${baseUrl}/update`, user, 'POST')
// 获取用户信息
export const reqUser = () => ajax(`${baseUrl}/user`)

// 获取用户列表
export const reqUserList = (type) => ajax(`${baseUrl}/userlist`, {type})

// 获取当前用户的聊天消息列表
export const reqChatMsgList = () => ajax(`${baseUrl}/msglist`)

// 修改指定消息为已读
export const reqReadMsg = (from) => ajax(`${baseUrl}/readmsg`, {from}, 'POST')
// 包含n个api

import ajax from "./ajax";

const baseUrl = '/zhaopin'

// 注册接口
export const ReqRegister = (user) => ajax(`${baseUrl}/register`, user, 'POST')

// 登录接口

export const ReqLogin = (user) => ajax(`${baseUrl}/login`, user, 'POST')

// 更新用户
export const ReqUpdate = (user) => ajax(`${baseUrl}/update`, user, 'POST')
import React,{Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import LaobanInfo from '../laoban-info/laoban-info'
import DashenInfo from '../dashen-info/dashen-info'
import {connect} from 'react-redux'
import Cookies from 'js-cookie'
import getRedirectTo from '../../utils/getRedirectTo'
import {getUser} from '../../redux/actions'

class Main extends Component {

    componentDidMount () {
        // 登录过（以前登录过，浏览器中有cookie中有userid），但没有登录（redux中没有user信息），发请求获取user信息
        const path = Cookies.get('userid')
        const {_id} = this.props.user
        if (path && !_id) {
            // console.log('发送ajax请求，获取user')
            this.props.getUser()
        }
    }

    render() {
        // 读取cookie中的userid
        const userid = Cookies.get('userid')
        // 如果没有，自动重定向到登录界面
        if (!userid) {
            return <Redirect to="/login"></Redirect>
        }
        // 如果有，读取redux中的user状态
        const user = this.props.user
        // 如果user中没有_id，则返回null
        if (!user._id) {
            return null
        } else {
            // 如果有_id，显示对应的界面
            // 如果请求的是根路径，根据user和header来计算出一个重定向的路由路径，并自动重定向
            let path = this.props.location.pathname
            if (path === '/') {
                path = getRedirectTo(user.type, user.header)
                return <Redirect to={path}></Redirect>
            }
        }


        if (!this.props.user._id) {
            return <Redirect to="/login"></Redirect>
        }
        return (
        <div>
            <Switch>
                <Route path="/laobaninfo" component={LaobanInfo}></Route>
                <Route path="/dasheninfo" component={DashenInfo}></Route>
            </Switch>
        </div>
        )
    }
}

export default connect(
    state => ({user: state.user}),
    {getUser}
)(Main)
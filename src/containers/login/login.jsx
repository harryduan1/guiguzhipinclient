import React,{Component} from 'react'
import {
    NavBar, 
    WingBlank, 
    List, 
    InputItem,
    WhiteSpace,
    Button
} from 'antd-mobile'

import Logo from '../../components/logo/logo'

import {connect} from 'react-redux'

import {login} from '../../redux/actions'
import {Redirect} from 'react-router-dom'


class Login extends Component {

    state = {
        username: '',
        password: ''
    }

    login = () => {
        // console.log(this.state)
        this.props.login(this.state)
    }

    toRegister = () => {
        this.props.history.replace('/register')
    }

    render() {
        const {msg, redirectTo} = this.props.user
        if (redirectTo) {
            return <Redirect to={redirectTo}></Redirect>
        }
        return (
            <div>
                <NavBar>速&nbsp;度&nbsp;与&nbsp;激&nbsp;情</NavBar>
                <Logo/>
                <WingBlank>
                    <List>
                    {msg ? <div className='error-msg'>{msg}</div> : null}
                        <WhiteSpace/>
                        <InputItem placeholder="请输入用户名" onChange={val => {this.setState({username: val})}}>用&nbsp;&nbsp;户&nbsp;&nbsp;名：</InputItem>
                        <WhiteSpace/>
                        <InputItem type="password" placeholder="请输入密码" onChange={val => {this.setState({password: val})}}>密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码：</InputItem>
                        <WhiteSpace/>
                        <Button type="primary" onClick={this.login}>登录</Button>
                        <WhiteSpace/>
                        <Button onClick={this.toRegister}>没有账户？</Button>
                    </List>
                </WingBlank>
            </div>
        )
    }
}

export default connect(
    state => ({user: state.user}),
    {login}
)(Login)
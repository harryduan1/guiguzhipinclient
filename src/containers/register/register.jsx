import React,{Component} from 'react'
import {
    NavBar, 
    WingBlank, 
    List, 
    InputItem,
    WhiteSpace,
    Radio,
    Button
} from 'antd-mobile'

import Logo from '../../components/logo/logo'

import {connect} from 'react-redux'

import {register} from '../../redux/actions'
import {Redirect} from 'react-router-dom'

const ListItem = List.Item

class Register extends Component {

    state = {
        username: '',
        password: '',
        password2: '',
        type: 'dashen'
    }

    Register = () => {
        // console.log(this.state)
        this.props.register(this.state)
    }

    toLogin = () => {
        this.props.history.replace('/login')
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
                        <InputItem type="password" placeholder="请再次输入密码" onChange={val => {this.setState({password2: val})}}>确认密码：</InputItem>
                        <WhiteSpace/>
                        <ListItem>
                            <span>角&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;色：</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Radio onChange={() => {this.setState({type: 'dashen'})}} checked={this.state.type === 'dashen'}>大神</Radio>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Radio onChange={() => {this.setState({type: 'laoban'})}} checked={this.state.type === 'laoban'}>老板</Radio>
                        </ListItem>
                        <WhiteSpace/>
                        <Button type="primary" onClick={this.Register}>注册</Button>
                        <WhiteSpace/>
                        <Button onClick={this.toLogin}>已有账户</Button>
                    </List>
                </WingBlank>
            </div>
        )
    }
}

export default connect(
    state => ({user: state.user}),
    {register}
)(Register)
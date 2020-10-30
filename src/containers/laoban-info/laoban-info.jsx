import React,{Component} from 'react'
import {connect} from 'react-redux'
import {NavBar, InputItem, TextareaItem, Button} from 'antd-mobile'
import HeaderSelect from '../../components/header-select/header-select'
import {updateUser} from '../../redux/actions'
import {Redirect} from 'react-router-dom'

class LaobanInfo extends Component {

    state = {
        header: '',
        post: '',
        info: '',
        company: '',
        salary: ''
    }

    setHeader = (header) => {
        this.setState({
            header
        })
    }

    save = () => {
        console.log(this.state, '保存')
        this.props.updateUser(this.state)
    }

    render() {
        // const {header, type} = this.props.user
        const {header} = this.props.user
        if (header) {
            // const path = type === 'dashen' ? '/dashen' : '/laoban'
            const path = '/laoban'
            return <Redirect to={path}></Redirect>
        }
        return (
            <div>
                <NavBar>老&nbsp;板&nbsp;信&nbsp;息&nbsp;完&nbsp;善</NavBar>
                <HeaderSelect setHeader={this.setHeader}></HeaderSelect>
                <InputItem placeholder="请输入" onChange={val => {this.setState({post: val})}}>招聘职位：</InputItem>
                <InputItem placeholder="请输入" onChange={val => {this.setState({company: val})}}>公司名称：</InputItem>
                <InputItem placeholder="请输入" onChange={val => {this.setState({salary: val})}}>职位薪资：</InputItem>
                <TextareaItem placeholder="请输入" title="职位要求：" rows={3} onChange={val => {this.setState({info: val})}}></TextareaItem>
                <Button type="primary" onClick={this.save}>保&nbsp;&nbsp;存</Button>
            </div>
        )
    }
}

export default connect(
    state => ({user: state.user}),
    {updateUser}
)(LaobanInfo)
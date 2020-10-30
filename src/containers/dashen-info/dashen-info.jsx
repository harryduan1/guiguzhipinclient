import React,{Component} from 'react'
import {connect} from 'react-redux'
import {NavBar, InputItem, TextareaItem, Button} from 'antd-mobile'
import HeaderSelect from '../../components/header-select/header-select'

class DashenInfo extends Component {

    state = {
        header: '',
        post: '',
        info: ''
    }

    setHeader = (header) => {
        this.setState({
            header
        })
    }

    save = () => {
        console.log(this.state, '保存')
    }

    render() {
        return (
            <div>
                <NavBar>大&nbsp;神&nbsp;信&nbsp;息&nbsp;完&nbsp;善</NavBar>
                <HeaderSelect setHeader={this.setHeader}></HeaderSelect>
                <InputItem placeholder="请输入" onChange={val => {this.setState({post: val})}}>求职岗位：</InputItem>
                <TextareaItem placeholder="请输入" title="个人介绍" rows={3} onChange={val => {this.setState({info: val})}}></TextareaItem>
                <Button type="primary" onClick={this.save}>保&nbsp;&nbsp;存</Button>
            </div>
        )
    }
}

export default connect(
    state => ({}),
    {}
)(DashenInfo)
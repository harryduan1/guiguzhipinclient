import React,{Component} from 'react'
import {List, Grid} from 'antd-mobile'
import PropTypes from 'prop-types'

import icon1 from '../../assets/images/头像1.png'
import icon2 from '../../assets/images/头像2.png'
import icon3 from '../../assets/images/头像3.png'
import icon4 from '../../assets/images/头像4.png'
import icon5 from '../../assets/images/头像5.png'
import icon6 from '../../assets/images/头像6.png'
import icon7 from '../../assets/images/头像7.png'
import icon8 from '../../assets/images/头像8.png'
import icon9 from '../../assets/images/头像9.png'
import icon10 from '../../assets/images/头像10.png'
import icon11 from '../../assets/images/头像11.png'
import icon12 from '../../assets/images/头像12.png'
import icon13 from '../../assets/images/头像13.png'
import icon14 from '../../assets/images/头像14.png'
import icon15 from '../../assets/images/头像15.png'
import icon16 from '../../assets/images/头像16.png'
import icon17 from '../../assets/images/头像17.png'
import icon18 from '../../assets/images/头像18.png'
import icon19 from '../../assets/images/头像19.png'
import icon20 from '../../assets/images/头像20.png'

// for(let i = 1; i <= 20; i++) {
//     import `icon${i}` from '../../assets/images/头像1.png`
// }

const headerList = [
    {
        icon: icon1,
        text: `头像1`,
    },
    {
        icon: icon2,
        text: `头像2`,
    },
    {
        icon: icon3,
        text: `头像3`,
    },
    {
        icon: icon4,
        text: `头像4`,
    },
    {
        icon: icon5,
        text: `头像5`,
    },
    {
        icon: icon6,
        text: `头像6`,
    },
    {
        icon: icon7,
        text: `头像7`,
    },
    {
        icon: icon8,
        text: `头像8`,
    },
    {
        icon: icon9,
        text: `头像9`,
    },
    {
        icon: icon10,
        text: `头像10`,
    },
    {
        icon: icon11,
        text: `头像11`,
    },
    {
        icon: icon12,
        text: `头像12`,
    },
    {
        icon: icon13,
        text: `头像13`,
    },
    {
        icon: icon14,
        text: `头像1`,
    },
    {
        icon: icon15,
        text: `头像1`,
    },
    {
        icon: icon16,
        text: `头像16`,
    },
    {
        icon: icon17,
        text: `头像17`,
    },
    {
        icon: icon18,
        text: `头像18`,
    },
    {
        icon: icon19,
        text: `头像19`,
    },
    {
        icon: icon20,
        text: `头像20`,
    }
]

Array.from(new Array(20)).map((_val, i) => ({
    // icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    // icon: require('../../assets/images/头像${i + 1}.png`),
    icon: icon1,
    text: `头像${i + 1}`,
  }));

export default class HeaderSelect extends Component {

    static propTypes = {
        setHeader: PropTypes.func.isRequired
    }

    state = {
        icon: null
    }

    // constructor (props) {
    //     super(props)
    //     this.headerList = []
    //     for(let i = 1; i <= 20; i++) {
    //         this.headerList.push({
    //             text: `头像${i}`,
    //             icon: require('../../assets/images/头像${i}.png`)
    //         })
    //     }
    // }

    

    handleClick = (el) => {
        this.setState({icon: el.icon})
        this.props.setHeader(el.text)
    }

    render() {
        const {icon} = this.state
        const listHeader = !icon ? '请选择头像' : (
            <div>
                <span>已选头像</span>
                <img src={icon} alt="icon"></img>
            </div>
        )
        return (
            <List renderHeader={() => listHeader}>
                <Grid onClick={this.handleClick} data={headerList} columnNum={5}></Grid>
            </List>
        )
    }
}
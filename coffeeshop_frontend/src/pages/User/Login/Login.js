import React, { Component } from 'react'
import { DANGKY } from '../../../redux/constants/type'
import DangKy from '../../DangKy/DangKy'
import DangNhap from '../../DangNhap/DangNhap'

import { style } from './Login.scss'
export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            check: localStorage.getItem(DANGKY) ? 2 : 1
        }
    }
    kindLog = (index) => {
        this.setState({
            check: index
        })
    }
    componentDidMount() {
        localStorage.removeItem(DANGKY)
    }
    render() {
        const { check } = this.state
        return (
            <div className="LoginPage">
                <div className="LoginPage_kind ">
                    <p className={check === 1 ? 'active' : ''} onClick={() => this.kindLog(1)}>ĐĂNG NHẬP</p>
                    <p className={check === 2 ? 'active' : ''} onClick={() => this.kindLog(2)}>ĐĂNG KÝ</p>
                </div>
                <div className="LoginPage_item">
                    {check === 1 ? <DangNhap /> : <DangKy />}
                </div>
            </div>

        )
    }
}

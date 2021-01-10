import React, { Component } from "react";
import { style } from "./DangNhap.scss";
import { connect } from 'react-redux'
import { Fade } from "react-reveal";
import { login } from "../../redux/actions/user";
export class DangNhap extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fromValue: {
                email: '',
                password: '',
            },
            message: {
                kind: 'error',
                title: 'Vui lòng kiểm tra lại tài khoản hoặc mật khẩu'
            }
        }
    }
    handleInPut = (e) => {
        const { name, value } = e.target;
        this.setState(state => ({
            fromValue: {
                ...state.fromValue, [name]: value
            }
        }))
    }
    onSubmit = (e) => {
        {
            e.preventDefault();
            const { fromValue } = this.state
            this.props.dispatch(login(fromValue))
        }
    }
    render() {
        return (
            <Fade>
                <div className="dangnhap">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Tài Khoản</label>
                            <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Nhập tài khoản email" name='email' onChange={(e) => this.handleInPut(e)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" placeholder="Nhập password" name='password' onChange={(e) => this.handleInPut(e)} />
                        </div>
                        <button className="btn">ĐĂNG NHẬP</button>
                    </form>
                </div>
            </Fade>
        );
    }
}

export default connect()(DangNhap);

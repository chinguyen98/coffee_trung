import React, { Component } from "react";
import style from "./DangKy.scss";
import { Redirect } from "react-router-dom";
import { Fade } from "react-reveal";
import { userService } from '../../services'
import Swal from 'sweetalert2'
export class DangKy extends Component {
    constructor(props) {
        super(props)
        this.state = {
            form: {
                name: "",
                email: "",
                password: "",
                diachi: "",
                sdt: ""
            },
            checkPassword: true,
            message: '',
            success: 'false'
        }
    }
    handleHiddenPassword = () => {
        this.setState(state => ({
            ...state, checkPassword: !state.checkPassword
        }))
    }
    handleForForm = (e) => {
        const { name, value } = e.target;
        this.setState(state => ({
            ...state
            , form: {
                ...state.form,
                [name]: value
            }
        }))
    }
    subMitForm = (e) => {
        e.preventDefault()
        console.log()
        userService.signUp(this.state.form)
            .then(result => {
                this.setState(prev_state => {
                    return {
                        ...prev_state
                    }
                }, () => {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Đăng ký thàng công',
                        showConfirmButton: false,
                        timer: 1200
                    })
                    return true
                })
                setTimeout(() => {
                    window.location.href = '/login'
                }, 1200)
            })
            .catch(err => {
                this.setState(prev_state => {
                    return {
                        ...prev_state
                    }
                }, () => {
                    Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: "EMAIL VÀ TÀI KHOẢN ĐÃ TỒN TẠI!",
                        showConfirmButton: false,
                        timer: 1200
                    })
                    return true
                })
            })
    }
    render() {
        return (
            <Fade clear>
                <div className="dangky">
                    {this.state.success && <Redirect to='/login' />}
                    <form className='row' onSubmit={this.subMitForm}>
                        <div className='col-12 col-md-6'>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1" for="nameInput">
                                    Họ tên
                            </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="nameInput"
                                    placeholder="Nhập họ tên"
                                    name='name'
                                    onChange={(e) => this.handleForForm(e)}
                                />
                            </div>
                            <div className="form-group">
                                <label for="phone">Số điện thoại</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="phone"
                                    placeholder="Nhập số điện thoại"
                                    name='sdt'
                                    onChange={(e) => this.handleForForm(e)}
                                />
                            </div>
                            <div className="form-group">
                                <label for="address">Địa chỉ</label>
                                <input
                                    id="diachi"
                                    type="text"
                                    className="form-control"
                                    placeholder="Nhập địa chỉ"
                                    name='diachi'
                                    onChange={(e) => this.handleForForm(e)}
                                />
                            </div>
                        </div>
                        <div className='col-12 col-md-6'>
                            <div className="form-group">
                                <label for="email">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    className="form-control"
                                    placeholder="Nhập email đăng ký"
                                    name='email'

                                    onChange={(e) => this.handleForForm(e)}
                                />
                            </div>

                            <div className="form-group">
                                <label for="password">Password</label>
                                <input
                                    type={this.state.checkPassword ? 'password' : 'text'}
                                    id="password"
                                    className="form-control"
                                    placeholder="Nhập password"
                                    name='password'

                                    onChange={(e) => this.handleForForm(e)}
                                />
                            </div>
                            <div className="form-group">
                                <input type="checkbox" name='checkPassword' checked={this.state.checkPassword}
                                    onChange={this.handleHiddenPassword}
                                />
                                <label className='ml-1' >Hidden password</label>
                            </div>
                            <div className='d-flex justify-content-end' width='80%' >
                                <button className="btn">ĐĂNG KÝ</button>
                            </div>
                        </div>
                    </form>
                </div>
            </Fade>
        );
    }
}

export default DangKy;

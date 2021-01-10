import React, { Component } from 'react'
import { style } from './Footer.scss'
import logo from '../../../assets/images/bo-cong-thuong.png'
export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer>
                    <div className="footer-detail">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4 footer__about-us mb-3 mb-md-0">
                                    <h2>VỀ CHÚNG TÔI</h2>
                                    <p>
                                        Nam libero tempore cum vulputate id est id, pretium semper enim.
                                        Morbi viverra congue nisi vel pulvinar posuere sapien eros.
                                    </p>
                                    <img src={logo} alt="Logo" />
                                </div>
                                <div className="col-md-4 footer__news mb-3 mb-md-0">
                                    <h2>HƯỚNG DẪN MUA HÀNG</h2>
                                    <p>
                                        <i className="fa fa-long-arrow-right" />
                                        <span>Lorem ipsum neque vulputate</span>
                                    </p>
                                    <p>
                                        <i className="fa fa-long-arrow-right" />
                                        <span>Lorem ipsum neque vulputate</span>
                                    </p>
                                    <p>
                                        <i className="fa fa-long-arrow-right" />
                                        <span>Lorem ipsum neque vulputate</span>
                                    </p>
                                    <p>
                                        <i className="fa fa-long-arrow-right" />
                                        <span>Lorem ipsum neque vulputate</span>
                                    </p>
                                    <p>
                                        <i className="fa fa-long-arrow-right" />
                                        <span>Lorem ipsum neque vulputate</span>
                                    </p>
                                </div>
                                <div className="col-md-4 footer__contact mb-3 mb-md-0">
                                    <h2>LIÊN HỆ</h2>
                                    <p>
                                        <i className="fa fa-map-marker" />
                                        <span>180 Đường Cao Lỗ, Phường 4, Quận 8, Thành phố Hồ Chí Minh.</span>
                                    </p>
                                    <p>
                                        <i className="fa fa-envelope-o" />
                                        <span>huynhquoctrung@gmail.com</span>
                                    </p>
                                    <p>
                                        <i className="fa fa-phone" />
                                        <span>+0123456789</span>
                                    </p>
                                </div>
                            </div>
                            <div className="row footer__form mt-md-5">
                                <div className="col-md-5 col-lg-4">
                                    <h2 className="text-left text-md-right">
                                        TƯ VẤN TẠI ĐÂY
                                    </h2>
                                </div>
                                <div className="col-md-7 col-lg-8">
                                    <input type="email" name="email" placeholder="Enter Email Address..." />
                                    <button className="btn btn-footer-submit text-white">GỬI</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="copy-right py-3 text-center text-white">
                        <p className="mb-0">
                            © 2020 Cà phê sạch – NGUYEN CHAT COFFEE &amp; TEA. All rights reserved
                        </p>
                    </div>
                </footer>

            </div>
        )
    }
}

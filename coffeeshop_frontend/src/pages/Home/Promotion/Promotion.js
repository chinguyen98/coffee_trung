import React, { Component } from "react";
import style from './Promotion.scss'
import OweCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import promotion1 from '../../../assets/images/promotion-1.jpg'


class Promotion extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <h1 className="text-center">SẢN PHẨM KHUYẾN MÃI</h1>
                    <hr />
                    <OweCarousel items="4" autoplay dots className="owl-theme" loop>
                        <div className="ml-2 mr-2">
                            <div className="card text-white bg-dark ">
                                <div className="image">
                                    <a href="#">
                                        <img src={promotion1} className="w-100" />
                                        <div className="overlay">
                                            <div className="detail">Xem Chi Tiết</div>
                                        </div>
                                    </a>
                                </div>
                                <div className="card-body">
                                    <h5 className="text-center">Apple Watch Series 3 Aluminium</h5>
                                    <h5 className="text-center">$550.00</h5>
                                </div>
                                <a href="#" className="btn buy">THÊM VÀO GIỎ HÀNG</a>
                            </div>
                        </div>
                        <div className="ml-2 mr-2">
                            <div className="card text-white bg-dark ">
                                <div className="image">
                                    <a href="#">
                                        <img src={promotion1} className="w-100" />
                                        <div className="overlay">
                                            <div className="detail">Xem Chi Tiết</div>
                                        </div>
                                    </a>
                                </div>
                                <div className="card-body">
                                    <h5 className="text-center">Apple Watch Series 3 Aluminium</h5>
                                    <h5 className="text-center">$550.00</h5>
                                </div>
                                <a href="#" className="btn buy">THÊM VÀO GIỎ HÀNG</a>
                            </div>
                        </div>
                        <div className="ml-2 mr-2">
                            <div className="card text-white bg-dark ">
                                <div className="image">
                                    <a href="#">
                                        <img src={promotion1} className="w-100" />
                                        <div className="overlay">
                                            <div className="detail">Xem Chi Tiết</div>
                                        </div>
                                    </a>
                                </div>
                                <div className="card-body">
                                    <h5 className="text-center">Apple Watch Series 3 Aluminium</h5>
                                    <h5 className="text-center">$550.00</h5>
                                </div>
                                <a href="#" className="btn buy">THÊM VÀO GIỎ HÀNG</a>
                            </div>
                        </div>
                        <div className="ml-2 mr-2">
                            <div className="card text-white  bg-dark">
                                <div className="image">
                                    <a href="#">
                                        <img src={promotion1} className="w-100" />
                                        <div className="overlay">
                                            <div className="detail">Xem Chi Tiết</div>
                                        </div>
                                    </a>
                                </div>
                                <div className="card-body">
                                    <h5 className="text-center">Apple Watch Series 3 Aluminium</h5>
                                    <h5 className="text-center">$550.00</h5>
                                </div>
                                <a href="#" className="btn buy">THÊM VÀO GIỎ HÀNG</a>
                            </div>
                        </div>
                        <div className="ml-2 mr-2">
                            <div className="card text-white bg-dark ">
                                <div className="image">
                                    <a href="#">
                                        <img src={promotion1} className="w-100" />
                                        <div className="overlay">
                                            <div className="detail">Xem Chi Tiết</div>
                                        </div>
                                    </a>
                                </div>
                                <div className="card-body">
                                    <h5 className="text-center">Apple Watch Series 3 Aluminium</h5>
                                    <h5 className="text-center">$550.00</h5>
                                </div>
                                <a href="#" className="btn buy">THÊM VÀO GIỎ HÀNG</a>
                            </div>
                        </div>
                        <div className="ml-2 mr-2">
                            <div className="card text-white bg-dark ">
                                <div className="image">
                                    <a href="#">
                                        <img src={promotion1} className="w-100" />
                                        <div className="overlay">
                                            <div className="detail">Xem Chi Tiết</div>
                                        </div>
                                    </a>
                                </div>
                                <div className="card-body">
                                    <h5 className="text-center">Apple Watch Series 3 Aluminium</h5>
                                    <h5 className="text-center">$550.00</h5>
                                </div>
                                <a href="#" className="btn buy">THÊM VÀO GIỎ HÀNG</a>
                            </div>
                        </div>
                        <div className="ml-2 mr-2">
                            <div className="card text-white bg-dark ">
                                <div className="image">
                                    <a href="#">
                                        <img src={promotion1} className="w-100" />
                                        <div className="overlay">
                                            <div className="detail">Xem Chi Tiết</div>
                                        </div>
                                    </a>
                                </div>
                                <div className="card-body">
                                    <h5 className="text-center">Apple Watch Series 3 Aluminium</h5>
                                    <h5 className="text-center">$550.00</h5>
                                </div>
                                <a href="#" className="btn buy">THÊM VÀO GIỎ HÀNG</a>
                            </div>
                        </div>
                    </OweCarousel>
                </div>
            </div>
        );
    }
}
export default Promotion


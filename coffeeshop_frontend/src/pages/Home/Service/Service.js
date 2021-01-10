import React, { Component } from 'react'
import style from './Service.scss'
export default class Service extends Component {
    render() {
        return (
            <div className="service_home">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="icon_service">
                                <i className="fa fa-phone" />
                            </div>
                            <div className="text_service">
                                <h3>(+84) 344549065</h3>
                                <p>Mọi lúc mọi nơi</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="icon_service">
                                <i className="fa fa-map-marker" />
                            </div>
                            <div className="text_service">
                                <h3>180 Đường Cao Lỗ, Phường 4, Quận 8, Thành phố Hồ Chí Minh</h3>
                                <p>Lô B5-Khu Công Nghiệp Trà Đa, Pleiku, Gia Lai</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="icon_service">
                                <i className="fa fa-clock" />
                            </div>
                            <div className="text_service">
                                <h3>Mở cửa: Thứ 2 - Thứ 7</h3>
                                <p>6:00 - 19:00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

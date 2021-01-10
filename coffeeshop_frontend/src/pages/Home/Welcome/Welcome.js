import React, { Component } from 'react'
import style from './Welcome.scss'
export default class Welcome extends Component {
    render() {
        return (
            <section className="container welcome-section">
                <div className="row">
                    <div className="col text-center welcome-title">
                        <h1>NGUYÊN CHẤT COFFEE &amp; TEA</h1>
                        <span>Chuyên gia SỐ 1 về cà phê nguyên chất – cà phê sạch</span>
                        <div className="welcome-title__line mx-auto mt-3 mb-5" />
                        <p>Đặc sản Cà Phê Sạch – Cà Phê Nguyên Chất gắn liền Văn Hóa Tây Nguyên KHÔNG THỂ SAO CHÉP
                        cùng quy
                        trình
                        khép kín TỪ TRANG TRẠI ĐẾN LY CAFE với 100% hạt cà phê KHÔNG TẨM ƯỚP thượng hạng Cầu Đất và Đăk Mil.
                        Thông qua BÍ QUYẾT rang xay, chế biến cà phê sạch ĐỘC NHẤT VÔ NHỊ và khâu kiểm tra chất lượng GẮT
                        GAO để
        cho ra những ly cà phê SẠCH NHẤT, NGON NHẤT, ĐẶC BIỆT CHO SỨC KHỎE</p>
                    </div>
                </div>
                <div className="row" />
            </section>
        )
    }
}

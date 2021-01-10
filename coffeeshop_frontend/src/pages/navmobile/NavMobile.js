import React, { Component } from "react";
import { nameOfLocalStore } from "../../redux/constants/type";
import { custumNAvMoble } from "../Support";
import style from "./NavMobile.scss";
export class NavMobile extends Component {
    handleClose = () => {
        custumNAvMoble("100vw", 400);
    };
    render() {
        return (
            <div className="nav-mobile">
                {localStorage.getItem(nameOfLocalStore.TaiKhoan) && <p>Hồ Sơ</p>}
                {localStorage.getItem(nameOfLocalStore.TaiKhoan) ? (
                    <p onClick={() => this.props.handleLoging(1)}>Đăng Xuất</p>
                ) : (
                        <p onClick={() => this.props.handleLoging(2)}>Đăng Nhập</p>
                    )}
            </div>

        );
    }
}

export default NavMobile;

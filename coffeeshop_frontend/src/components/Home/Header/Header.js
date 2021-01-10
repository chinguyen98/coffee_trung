import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import style from './Header.scss'
import { DANGKY, nameOfLocalStore } from '../../../redux/constants/type'
import NavMobile from '../../../pages/navmobile/NavMobile'
import { custumNAvMoble } from '../../../pages/Support'
import { connect } from 'react-redux'
import { fetchCategoryProduct } from '../../../redux/actions/product'
import Category from '../CategoryProduct/Category'
import Cart from '../../../redux/reducers/cart'
class Header extends Component {
    constructor(props) {
        super(props);
    }

    handleLoging = (index) => {
        if (index === 1) {
            localStorage.removeItem(nameOfLocalStore.TaiKhoan)
            window.location.reload()
        }
        else if (index === 2) {
            window.location.pathname = '/login'

        }
        else if (index === 3) {
            window.location.pathname = '/login'
            localStorage.setItem(DANGKY, 'abc')
        }
    }
    openNavMoble = () => {
        custumNAvMoble(0, 400)
    }

    render() {
        const { userImg } = this.props;
        return (
            <header className="header">
                <NavMobile handleLoging={this.handleLoging} />
                <div className="header__detail">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-7 text-center text-md-left header-left pt-1">
                                <i className="fa fa-phone" />
                                <span className="mr-2">+84 45 49065</span>
                                <i className="fa fa-envelope" />
                                <span>huynhquoctrung271@gmail.com</span>
                            </div>
                            <div className="col-md-5 text-center text-md-right header-right text-right">
                                <NavLink to="/cart" className="btn btn-danger" >
                                    <i className="fa fa-shopping-cart mr-2" />
                                    <span> GIỎ HÀNG ({this.props.cart.length})</span>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="navbar header__navbar navbar-expand-sm ">
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#myNavbar" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="navbar-nav ml-auto mt-2 mb-0 ">
                            <li className="nav-item">
                                <NavLink activeClassName="activeNavItem" activeStyle={{ fontWeight: 'bold' }} to="/home" className="nav-link">TRANG CHỦ</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="activeNavItem" activeStyle={{ fontWeight: 'bold' }} to="/about" className="nav-link">GIỚI THIỆU</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="activeNavItem" activeStyle={{ fontWeight: 'bold' }} to="/product" className="nav-link">SẢN PHẨM</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="#" className="nav-link">TIN TỨC</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="activeNavItem" activeStyle={{ fontWeight: 'bold' }} to="/contact" className="nav-link">LIÊN HỆ</NavLink>
                            </li>
                            <li className="header_loging">
                                <div className="loging">
                                    <img src={userImg} alt="img-acount" />
                                    {localStorage.getItem(nameOfLocalStore.TaiKhoan) &&
                                        <span style={{ fontSize: "20px" }}>
                                            {
                                                JSON.parse(localStorage.getItem(nameOfLocalStore.TaiKhoan)).data.ten
                                            }
                                        </span>}
                                    <div className='header_loging_dropdown'>
                                        {localStorage.getItem(nameOfLocalStore.TaiKhoan) ? <p onClick={() => this.handleLoging(1)}>ĐĂNG XUẤT</p> : <p onClick={() => this.handleLoging(2)}>ĐĂNG NHẬP</p>}
                                        <p onClick={() => this.handleLoging(3)}>ĐĂNG KÝ</p>
                                        {localStorage.getItem(nameOfLocalStore.TaiKhoan) && <NavLink to='/ho-so'><p>HỒ SƠ</p></NavLink>}
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header >
        )
    }
}
Header.defaultProps = {
    userImg: "https://123phim.vn/app/assets/img/avatar.png"
};

const mapStateToProps = (state) => ({
    cart: state.Cart,
})

export default connect(mapStateToProps)(Header)

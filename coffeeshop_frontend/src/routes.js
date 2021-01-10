import React, { Component } from 'react'
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import ProductContainers from './redux/containers/ProductContainers';
import CartContainer from './redux/containers/CartContainer';
import Login from './pages/User/Login/Login';
import Detail from './pages/Detail/Detail';
import DanhMucSanPham from './pages/DanhMucSanPham/DanhMucSanPham';
import DanhSachSanPham from './pages/DanhSachSanPham/DanhSachSanPham';

const routeHome = [
    {
        path: '/home',
        exact: true,
        component: Home
    },
    {
        path: '/about',
        exact: false,
        component: About
    },
    {
        path: '/contact',
        exact: false,
        component: Contact
    },
    {
        path: '/product',
        exact: false,
        component: ProductContainers
    },
    {
        path: '/login',
        exact: false,
        component: Login
    },
    {
        path: '/detail/:productId',
        exact: false,
        component: Detail
    },
    {
        path: '/cart',
        exact: false,
        component: CartContainer

    },
    {
        path: '/search',
        exact: false,
        component: DanhSachSanPham
    }
    ,
    {
        path: '/',
        exact: true,
        component: Home
    }


];
export default routeHome
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { style } from './DanhSachSanPham.scss'
import { NavLink, Link } from 'react-router-dom'
import Category from '../../components/Home/CategoryProduct/Category'
import ProductContainers from '../../redux/containers/ProductContainers'
import Search from '../../components/Home/Search/Search'
import SearchSanPham from '../SearchSanPham/SearchSanPham'
import { fetchProductByKey } from '../../redux/actions/product'
import { actAddToCart } from '../../redux/actions/cart'

class DanhSachSanPham extends Component {
    render() {
        const elementProduct = this.props.products.map((item, index) => {
            return (
                <>
                    <div className="col-md-4 product-grid pt-5">
                        <div className="product-image" key={index}>
                            <Link to="">
                                <img className="pic-1 w-100" src={item.hinhanh} />
                            </Link>
                            <ul className="social">
                                <li><Link to={`/detail/${item.id}`} className="detail"> <i className="fa fa-search" /></Link></li>
                            </ul>
                        </div>
                        <div className="product-content">
                            <h3 className="title"><a>{item.name}</a></h3>
                            <div className="price">{item.gia.toLocaleString()} VND </div>
                            <Link className="add-to-cart" onClick={() => this.props.onAddToCart(item, 1)}>+ Thêm Giỏ Hàng</Link>
                        </div>
                    </div>
                </>
            )
        })
        return (
            <>
                <div className="padding-section"></div>
                <div className="container">
                    <Category />
                    <hr />
                    <div className="row">
                        {elementProduct}
                    </div>
                </div >
            </ >
        )
    }
    componentDidMount() {
        this.props.onFetchProductByKey();
    }
}

const mapStateToProps = state => ({
    maDanhMuc: state.products.maDanhMuc,
    products: state.products.productMaDanhMuc,
    productCategory: state.products.productCategory,
});

const mapDispatchToProps = (dispatch, props) => ({
    onAddToCart: (product, quantity) => {
        dispatch(actAddToCart(product, quantity))
    },
    onFetchProductByKey: () => {
        dispatch(fetchProductByKey())
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(DanhSachSanPham)
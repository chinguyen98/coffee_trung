import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProductItem from '../../pages/Product/ProductItem/ProductItem'
import Products from '../../pages/Product/Products/Products'
import PropTypes from 'prop-types'
import { actAddToCart, importCartFormStorage } from '../../redux/actions/cart'
import { maDanhMuc } from '../actions/product'
import Category from '../../components/Home/CategoryProduct/Category'
import Form from 'antd/lib/form/Form'
import SearchProduct from '../../pages/Search'
class ProductContainer extends Component {
    render() {
        let { products, searchDanhSach } = this.props
        return (
            <div>
                <SearchProduct />
                <Products >
                    {this.renderProduct(products, searchDanhSach)}
                </Products>
            </div>
        )
    }

    componentDidMount() {
        this.props.onImportCartFormStorage(JSON.parse(localStorage.getItem('CART') || '[]'));
    }

    renderProduct = (products, searchDanhSach) => {
        console.log({ searchDanhSach })
        let result = null;
        let { onAddToCart } = this.props
        if (products.length > 0 && searchDanhSach.length === 0) {
            result = products;
        }
        else if (searchDanhSach.length !== 0) {
            result = searchDanhSach;
        }

        const renderResult = result !== null && result.map((product, index) => {
            return (
                <>
                    <div className="col-md-4 product-grid" key={index}>
                        <ProductItem
                            product={product}
                            onAddToCart={onAddToCart}
                        />
                    </div>
                </>
            )
        })
        return renderResult;
    }
}
ProductContainer.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            mota: PropTypes.string.isRequired,
            hinhanh: PropTypes.string.isRequired,
            gia: PropTypes.number.isRequired,
            soluong: PropTypes.number.isRequired,
            trangthai: PropTypes.number.isRequired
        })
    ).isRequired
}
const mapStateToProps = (state) => ({
    products: state.products.products,
    maDanhMuc: state.products.maDanhMuc,
    searchDanhSach: state.products.searchDanhSach,
})
const mapDispatchToProps = (dispatch, props) => ({
    onAddToCart: (product) => {
        dispatch(actAddToCart(product, 1))
    },
    onImportCartFormStorage: (carts) => {
        dispatch(importCartFormStorage(carts))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);
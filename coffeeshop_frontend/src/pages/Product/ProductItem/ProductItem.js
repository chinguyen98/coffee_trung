import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import product1 from '../../../assets/images/product_1.jpg'
import { style } from '../../Product/Product.scss'

class ProductItem extends Component {
    render() {
        let { product } = this.props
        return (
            <>
                <div className="padding-section"></div>
                <div className="product-image">
                    <Link to="">
                        <img className="pic-1 w-100" src={this.props.product.hinhanh} />
                    </Link>
                    <ul className="social">
                        <li><Link to={`/detail/${this.props.product.id}`} className="detail"> <i className="fa fa-search" /></Link></li>
                    </ul>
                </div>
                <ul className="rating">
                    <li className="fa fa-star" />
                    <li className="fa fa-star" />
                    <li className="fa fa-star" />
                    <li className="fa fa-star" />
                    <li className="fa fa-star disable" />
                </ul>
                <div className="product-content">
                    <h3 className="title"><a>{this.props.product.name}</a></h3>
                    <div className="price">{this.props.product.gia.toLocaleString()} VND </div>
                    <Link className="add-to-cart" onClick={() => this.onAddToCart(product)}>+ Thêm Giỏ Hàng</Link>
                </div>
            </>
        )
    }
    onAddToCart = (product) => {
        this.props.onAddToCart(product)
    }
}
export default ProductItem

import React, { Component } from 'react'
import { style } from '../../Cart/Cart.scss'
import product1 from '../../../assets/images/product_1.jpg'
import { Link } from 'react-router-dom'
export default class CartItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            quantity: 1
        }
    }
    render() {
        let { item } = this.props
        let { quantity } = item.quantity > 0 ? item : this.state.quantity
        console.log(quantity)
        return (
            <>
                <tr>
                    <td>
                        <div className="main">
                            <div className="d-flex">
                                <img src={item.product.hinhanh} alt={item.product.name} />
                            </div>
                        </div>
                    </td>
                    <td>
                        <h6>{item.product.name} VND</h6>
                    </td>
                    <td>
                        <h6>{item.product.gia.toLocaleString()} VND</h6>
                    </td>
                    <td className="center-on-small-only">
                        <span className="qty">{quantity} </span>
                        <div className="btn-group radio-group" data-toggle="buttons">
                            <label
                                onClick={() => {
                                    this.onUpdateQuantity(item.product, item.quantity - 1)
                                }}
                                style={{ cursor: 'pointer' }}
                                className="btn btn-sm btn-danger btn-rounded waves-effect waves-light"
                            >
                                <a>—</a>
                            </label>
                            <label
                                onClick={() => {
                                    this.onUpdateQuantity(item.product, item.quantity + 1)
                                }}
                                style={{ cursor: 'pointer' }}
                                className="btn btn-sm btn-danger btn-rounded waves-effect waves-light"
                            >
                                <a>+</a>
                            </label>
                        </div>
                    </td>
                    <td>
                        <h5>{this.showSubTotal(item.product.gia, item.quantity).toLocaleString() + " VND"}</h5>
                    </td>
                    <td>
                        <a className="btn btn-info" style={{ cursor: 'pointer' }} onClick={() => this.onDelete(item.product)}>
                            <i className="fa fa-trash"></i>
                        </a>
                    </td>
                </tr>
            </>
        )
    }
    onDelete = (product) => {
        let { onDeleteProductInCart } = this.props;
        onDeleteProductInCart(product)
    }
    showSubTotal = (price, quantity) => {
        return price * quantity
    }
    onUpdateQuantity = (product, quantity) => {
        if (quantity > 0) {
            this.setState({
                quantity: quantity
            });
            this.props.onUpdateProductInCart(product, quantity)
        }

    }
}

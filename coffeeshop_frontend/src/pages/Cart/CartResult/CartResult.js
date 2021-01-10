import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class CartResult extends Component {
    render() {
        let { cart } = this.props
        return (
            <div className="checkout">
                <ul>
                    <li className="subtotal">
                        <p>THÀNH TIỀN:</p>
                        <h3>{this.showToTalAmount(cart)}</h3>
                    </li>
                    <Link to="/login" className="proceed-btn">TIẾN HÀNH THANH TOÁN</Link>
                </ul>
            </div>
        )
    }
    showToTalAmount = (cart) => {
        let total = 0;
        if (cart.length > 0) {
            for (let i = 0; i < cart.length; i++) {
                total += cart[i].product.gia * cart[i].quantity
            }
        }
        return total.toLocaleString() + " VND";
    }
}

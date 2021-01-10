import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Cart from '../../pages/Cart/Carts/Cart'
import * as Message from '../../redux/constants/message'
import CartItem from '../../pages/Cart/CartItem/CartItem'
import CartResult from '../../pages/Cart/CartResult/CartResult'
import { actRemoveProductInCart, actUpdateProductInCart } from '../actions/cart'


class CartContainer extends Component {
    render() {
        let { cart } = this.props
        return (
            <Cart>
                {this.showCartItem(cart)}
                { this.showCartToTalAmount(cart)}
                {this.showToTalQuantity(cart)}
            </Cart>
        )
    }
    showCartItem = (cart) => {
        let { onDeleteProductInCart, onUpdateProductInCart } = this.props
        let result =
            <tr className="text-danger" style={{ fontWeight: "bold" }}>
                <td>
                    {Message.MSG_CART_EMPTY}
                </td>
            </tr>
        if (cart.length > 0) {
            result = cart.map((item, index) => {
                return (
                    <CartItem
                        key={index}
                        item={item}
                        index={index}
                        onDeleteProductInCart={onDeleteProductInCart}
                        onUpdateProductInCart={onUpdateProductInCart}
                    />
                )
            })
        }
        return result
    }
    showCartToTalAmount = (cart) => {
        let result = null;
        if (cart.length > 0) {
            result = <CartResult cart={cart} />
        }
        return result
    }
    showToTalQuantity = (cart) => {
        let result = null;
        if (cart.length > 0) {
            result = cart.reduce((quantity, product, index) => {
                return quantity += product.gia * product.quantity;
            }, 0)
        }
        return result
    }

}
CartContainer.propTypes = {
    cart: PropTypes.arrayOf(
        PropTypes.shape({
            product: PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                mota: PropTypes.string.isRequired,
                hinhanh: PropTypes.string.isRequired,
                gia: PropTypes.number.isRequired,
                soluong: PropTypes.number.isRequired,

            }).isRequired,
            quantity: PropTypes.number.isRequired
        })
    ).isRequired
}
const mapDispatchToProps = (dispatch, props) => ({
    onDeleteProductInCart: (product) => {
        dispatch(actRemoveProductInCart(product))
    }
    , onUpdateProductInCart: (product, quantity) => {
        dispatch(actUpdateProductInCart(product, quantity))
    }
})
const mapStateToProps = state => ({
    cart: state.Cart
})

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
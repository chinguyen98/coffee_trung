import * as Types from '../../redux/constants/type'
let data = JSON.parse(localStorage.getItem('CART'))
let initialState = data ? data : []
const Cart = (state = initialState, action) => {
    let { product, quantity } = action
    let index = -1
    switch (action.type) {
        case Types.IMPORT_CART_FROM_STORAGE:
            return [...action.carts];
        case Types.ADD_TO_CART:
            console.log({ product, quantity })
            index = findProductInCart(state, product);
            console.log(index);
            if (index !== -1) {
                state[index].quantity += quantity
            }
            else {
                state.push({
                    product, quantity
                })
            }
            localStorage.setItem('CART', JSON.stringify([...state]));
            return [...state]

        case Types.DELETE_PRODUCT_IN_CART:
            index = findProductInCart(state, product)
            if (index !== -1) {
                state.splice(index, 1)
            }
            localStorage.setItem('CART', JSON.stringify(state))
            return [...state]
        default: return [...state]
        case Types.UPDATE_PRODUCT_IN_CART: {
            index = findProductInCart(state, product)
            if (index !== -1) {
                state[index].quantity = quantity
            }
            localStorage.setItem('CART', JSON.stringify(state))
            return [...state]
        }
    }
}
let findProductInCart = (cart, product) => {
    let index = -1
    if (cart.length > 0) {
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].product.id === product.id) {
                index = i;
                break;
            }
        }
    }
    return index
}
export default Cart
import * as Types from '../../redux/constants/type'
export const actAddToCart = (product, quantity) => {
    return {
        type: Types.ADD_TO_CART,
        product,
        quantity
    }
}
export const actRemoveProductInCart = (product) => {
    return {
        type: Types.DELETE_PRODUCT_IN_CART,
        product
    }
}
export const actUpdateProductInCart = (product, quantity) => {
    return {
        type: Types.UPDATE_PRODUCT_IN_CART,
        product,
        quantity
    }
}
export const importCartFormStorage = (carts) => {
    return {
        type: Types.IMPORT_CART_FROM_STORAGE,
        carts
    }
}
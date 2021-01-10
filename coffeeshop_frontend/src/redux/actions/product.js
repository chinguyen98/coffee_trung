import { createAction } from ".";
import { productService } from "../../services";
import ProductService from "../../services/product";
import { FETCH_CATEGORY_PRODUCT, FETCH_PRODUCTS, FETCH_PRODUCT_DETAIL, FETCH_SLIDER, MADANHMUC, PRODUCTMADANHMUC, SEARCH } from "../constants/type";
//async action
//Lấy danh sách sản phẩm
export const fetchProduct = () => {
    return dispatch => {
        productService.getListProduct()
            //promise
            .then(result => {
                dispatch(createAction(FETCH_PRODUCTS, result.data));
            })
            .catch(error => {
                console.log(error);
            });
    };
}

//Lấy chi tiết sản phẩm theo mã
export const fetchDetailProduct = (id) => {
    return dispatch => {
        productService
            .getListDetailProduct(id)
            .then(res => {
                console.log(res.data)
                dispatch(createAction(FETCH_PRODUCT_DETAIL, res.data))
                console.log(res)
            })
            .catch(err => {
                console.log(err);
            });
    }
}
export const fetchProductByKey = (keyword) => {
    return dispatch => {
        productService.getProductByKeyWord(keyword)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }
}
//Lấy danh mục khóa học
export const fetchCategoryProduct = () => {
    return dispatch => {
        productService
            .getCategoryProduct()
            .then(res => {
                dispatch(createAction(FETCH_CATEGORY_PRODUCT, res.data))
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }
}
//Lấy mã danh mục của sản phẩm
export const maDanhMuc = (payload) => {
    return dispatch => {
        dispatch(createAction(MADANHMUC, payload))
    }
}
//Lấy sản phẩm theo mã danh mục
export const productMaDanhMuc = (maDanhMuc) => {
    return dispatch => {
        productService
            .getProductMaDanhMuc(maDanhMuc)
            .then(res => {
                dispatch(createAction(PRODUCTMADANHMUC, res.data))
                console.log(res)
            }).catch(err => {
                console.log(err);
            })
    }
}
export const fetchSlider = () => {
    return dispatch => {
        productService.getSlider()
            .then(res => {
                dispatch(createAction(FETCH_SLIDER, res.data))
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }
}
export const searchCoffeeByName = (productName) => {
    return (dispatch) => {
        productService.searchProductByName(productName)
            .then(res => {
                dispatch(createAction(SEARCH, res.data));
            })
            .catch((err) => {
                dispatch(createAction(SEARCH, []));
            })
    }
}
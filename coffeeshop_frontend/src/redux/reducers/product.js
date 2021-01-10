import { FETCH_CATEGORY_PRODUCT, FETCH_NEWS_PRODUCT, FETCH_PRODUCTS, FETCH_PRODUCT_DETAIL, FETCH_SLIDER, KEYWORD, MADANHMUC, PRODUCTMADANHMUC, SEARCH } from "../constants/type";
let initialState = {
    products: [],
    productDetail: null,
    productCategory: [],
    maDanhMuc: "5",
    productMaDanhMuc: [],
    slider: [],
    keyWord: "",
    searchDanhSach: [],
}

const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            state.products = action.payload;
            return { ...state }
        case FETCH_PRODUCT_DETAIL:
            state.productDetail = action.payload[0];
            return { ...state }
        case FETCH_CATEGORY_PRODUCT:
            state.productCategory = action.payload;
            return { ...state }
        case MADANHMUC:
            state.maDanhMuc = action.payload;
            return { ...state }
        case PRODUCTMADANHMUC:
            state.productMaDanhMuc = action.payload
            return { ...state }
        case FETCH_SLIDER:
            state.slider = action.payload
            return { ...state }
        case KEYWORD:
            state.keyWord = action.payload
            return { ...state }
        case SEARCH:
            state.searchDanhSach = action.payload
            return { ...state }
        default:
            return { ...state }
    }
}

export default ProductReducer
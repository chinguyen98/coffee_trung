import axios from 'axios'
const backendUrl = 'http://127.0.0.1:8000/api';
class ProductService {
    //Lấy danh sách sản phẩm:
    getListProduct() {
        return axios({
            url: `${backendUrl}/product/get`,
            method: 'GET'
        })
    }
    //Lấy thông tin của sản phẩm
    getListDetailProduct(id) {
        return axios({
            url: `${backendUrl}/product/find/${id}`,
            method: 'GET',
        })
    }
    getProductByKeyWord(keyword) {
        return axios({
            url: `${backendUrl}/product/search/${keyword}`,
            method: 'GET',
        })
    }
    //Lấy danh mục của sản phẩm
    getCategoryProduct() {
        return axios({
            url: `${backendUrl}/category/get`,
            method: 'GET'
        })
    }
    //Lấy sản phẩm theo mã danh mục
    getProductMaDanhMuc(maDanhMuc) {
        return axios({
            url: `${backendUrl}/product/products-category/${maDanhMuc}`,
            method: "GET"
        })
    }
    getSlider() {
        return axios({
            url: `${backendUrl}/slideqc/get`,
            method: 'GET'
        })
    }
    searchProductByName(tensanpham) {
        return axios({
            url: `${backendUrl}/product/search/${tensanpham}`,
            method: 'GET',
        })
    }
}
export default ProductService
import React, { Component } from 'react'
import { productMaDanhMuc } from '../../redux/actions/product'
import { connect } from 'react-redux'
import DanhSachSanPham from '../DanhSachSanPham/DanhSachSanPham'
import ProductContainer from '../../redux/containers/ProductContainers'
import SearchSanPham from '../SearchSanPham/SearchSanPham'
import _ from 'lodash'
import Search from '../../components/Home/Search/Search'

class DanhMucSanPham extends Component {
    componentDidMount() {
        this.props.dispatch(productMaDanhMuc(this.props.maDanhMuc));
    }
    render() {
        return (
            <div>
                {
                    !this.props.keyWord ?
                        <ProductContainer danhSachSanPham={this.props.productMaDanhMuc} /> : (_.isEmpty(this.props.searchDanhSach)) ?
                            <h1 className="btn btn-outline-danger border-danger w-100 text-center "> Không tìm thấy khóa học theo từ khóa "{this.props.keyWord}" </h1>
                            : <SearchSanPham keyWord={this.props.keyWord} danhSachSanPham={this.props.searchDanhSach} />
                }
            </div>
        )
    }

}

const mapStateToProps = (state) => ({
    maDanhMuc: state.products.maDanhMuc,
    productMaDanhMuc: state.products.productMaDanhMuc,
    keyWord: state.products.keyWord,
    danhSachSanPham: state.products.products,
    searchDanhSach: state.products.searchDanhSach
})
export default connect(mapStateToProps)(DanhMucSanPham)
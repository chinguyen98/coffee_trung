import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

class SearchSanPham extends Component {
    render() {
        const elmSearchDS = this.props.danhSachSanPham.map((item, index) => {
            return (
                <div className="card text-left w-100" key={index}>
                    <div className="row my-3">
                        <div className="col-4">
                            <img className="card-img-top" style={{ width: "100%", height: "200px" }} src={item.hinhanh} alt />

                        </div>
                        <div className="col-8">
                            <div className="card-body">
                                <h4 className="card-title">{item.name}</h4>
                                <p className="text-danger">{item.gia} VNĐ</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <>
                <h1 className="btn btn-outline-danger border-danger w-100 text-center ">
                    {" "}
              Tìm kiếm theo từ khóa "{this.props.keyWord}"{" "}
                </h1>
                {elmSearchDS}
            </>
        )
    }
}
const mapStateToProps = (state) => ({
    danhSachSanPham: state.products.products
})
export default connect(mapStateToProps)(SearchSanPham)
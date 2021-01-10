import React, { Component } from 'react'
import { style } from '../Cart.scss'
export default class Cart extends Component {
    render() {
        let { children } = this.props
        return (
            <section className="mt-5 cart">
                <div className="container">
                    <div className="table-responsive">
                        <table className="table">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col" className="text-white">Ảnh sản Phẩm</th>
                                    <th scope="col" className="text-white">Tên sản phẩm</th>
                                    <th scope="col" className="text-white">Giá</th>
                                    <th scope="col" className="text-white">Số lượng</th>
                                    <th scope="col" className="text-white">Tổng giá</th>
                                    <th scope="col" className="text-white">Xóa</th>
                                </tr>
                            </thead>
                            <tbody>
                                {children}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        )
    }
}

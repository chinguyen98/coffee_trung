import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { style } from './Detail.scss'
import { fetchDetailProduct } from '../../redux/actions/product';
import { productService } from "../../services";

import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';
import { actAddToCart } from '../../redux/actions/cart';
class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1
        }
    }


    componentDidMount = () => {
        const id = this.props.match.params.productId;
        this.props.onFetchDetailProduct(id);
    }

    // componentDidUpdate(prev, next){
    //     console.log(prev, next)
    // }

    handleAdd = () => {
        console.log('add')
        const id = this.props.match.params.productId;
        productService.getListDetailProduct(id).then(res => {
            this.props.onAddToCart(res.data[0], this.state.count);
        })
    }

    handlePlus = () => {
        this.setState({
            count: ++this.state.count,
        })
    }

    handleMinus = () => {
        let newValue = this.state.count - 1;
        if (newValue <= 0) {
            newValue = 1;
        }
        this.setState({
            count: newValue,
        })
    }

    render() {
        const { productDetail } = this.props
        return (
            productDetail !== null && (
                <section className="detail__section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5">
                                <div className="carousel-item active">
                                    <img className="w-100" src={productDetail.hinhanh} height={450} alt="First Slide" />
                                </div>
                            </div>
                            <div className="col-md-7">
                                <h3 className="text-center text-white">{productDetail.name}</h3>
                                <hr />
                                <p >Mô tả:
                                    <Fragment>
                                        <div dangerouslySetInnerHTML={{ __html: productDetail.mota }}>

                                        </div>
                                    </Fragment>
                                </p>
                                <p>Giá:<b className="price"></b> {productDetail.gia} VND</p>
                                <label>Số lượng đặt mua:</label>
                                <div className="input-group col-md-6 d-flex mb-3">
                                    <span className="input-group-btn mr-2">
                                        <button onClick={this.handleMinus} type="button" className="quantity-left-minus btn" data-type="minus" data-field>
                                            <i className="fa fa-minus" />
                                        </button>
                                    </span>
                                    <input type="text" id="quantity" name="quantity" className="form-control input-number" value={this.state.count} min={1} max={100} />
                                    <span className="input-group-btn ml-2">
                                        <button onClick={this.handlePlus} type="button" className="quantity-right-plus btn" data-type="plus" data-field>
                                            <i className="fa fa-plus" />
                                        </button>
                                    </span>
                                </div>
                                <p><Button onClick={this.handleAdd} className="btn btn-danger py-3 px-5">THÊM VÀO GIỎ HÀNG</Button></p>
                            </div>
                        </div>
                    </div>
                </section >
            )
        )
    }

}
const mapStateToProps = state => ({
    productDetail: state.products.productDetail
})
const mapDispatchToProps = (dispatch, props) => ({
    onAddToCart: (product, quantity) => {
        dispatch(actAddToCart(product, quantity))
    },
    onFetchDetailProduct: (id) => {
        dispatch(fetchDetailProduct(id))
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Detail)


import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { fetchCategoryProduct, maDanhMuc, productMaDanhMuc } from '../../../redux/actions/product'
import { style } from './Category.scss'
class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            maDanhMuc: "",
        }
    }
    componentDidMount() {
        this.props.dispatch(fetchCategoryProduct())
    }
    onChangeDanhMuc = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        }, () => {
            this.props.dispatch(maDanhMuc(this.state.maDanhMuc))
            this.props.dispatch(productMaDanhMuc(this.state.maDanhMuc));
        })
    }
    render() {
        const renderCategoryProduct = this.props.productCategory.map((item, index) => {
            return (
                <>
                    <option value={item.id} style={{ cursor: "pointer" }} className="dropdown-item" href="#" key={index}>{item.name}</option>
                </>

            )
        })
        return (
            <div className="col-12 col-lg-4 col-md-4 category-section">
                <NavLink to="/search">
                    <select
                        name="maDanhMuc"
                        id="inlineFormInput"
                        className=" p-1"
                        onChange={this.onChangeDanhMuc}
                    >
                        {renderCategoryProduct}
                    </select>
                </NavLink>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    productCategory: state.products.productCategory,
    maDanhMuc: state.products.maDanhMuc,
    productMaDanhMuc: state.products.productMaDanhMuc,
})
export default connect(mapStateToProps)(Category)
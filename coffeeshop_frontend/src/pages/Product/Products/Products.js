import React, { Component } from 'react'
import { fetchProduct } from '../../../redux/actions/product'
import { connect } from 'react-redux'
import Category from '../../../components/Home/CategoryProduct/Category'
class Product extends Component {
    render() {
        return (
            <>
                <section className="product-section pt-5">
                    <div className="container">
                        <div className="row">
                            {this.props.children}
                        </div>
                    </div>
                </section>
            </>

        )
    }
    componentDidMount() {
        this.props.dispatch(fetchProduct())
    }
}
export default connect()(Product);



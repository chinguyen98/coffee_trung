import React, { Component } from 'react'
import Slider from './Carousel/Slider'
import News from './News/News'
import OurStart from './OurStart/OurStart'
import Service from './Service/Service'
import Welcome from './Welcome/Welcome'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchProduct } from '../../redux/actions/product'
import './Home.scss'
import ProductContainer from '../../redux/containers/ProductContainers'
import Category from '../../components/Home/CategoryProduct/Category'
import Search from '../../components/Home/Search/Search'
import SearchSanPham from '../SearchSanPham/SearchSanPham'
class Home extends Component {
    render() {

        return (
            <div>
                <Slider />
                <Service />
                <Welcome />
                <section>
                    <div className="container">
                        <h1 className="text-center">SẢN PHẨM</h1>
                        <Category />
                        <ProductContainer />
                    </div>
                </section>
                <News />
                <OurStart />
            </div>
        )
    }
    componentDidMount() {
        this.props.dispatch(fetchProduct())
    }
}
const mapStateToProps = (state) => ({
    products: state.products.products,
})
export default connect(mapStateToProps)(Home)

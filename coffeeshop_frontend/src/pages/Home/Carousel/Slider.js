import React, { Component } from 'react';
import style from './Slider.scss'
import Carousel from 'react-bootstrap/Carousel'
import { fetchSlider } from '../../../redux/actions/product';
import { connect } from 'react-redux'
class Slider extends Component {
    render() {
        return (
            <Carousel>
                {this.props.Slider.map((item, index) => {
                    return (
                        <Carousel.Item key={index}>
                            <img
                                style={{ height: "800px" }}
                                className="d-block w-100"
                                src={item.image}
                                alt=""
                            />
                            <div>
                                <div className="carousel-item__overplay" />
                                <div className="carousel-item__caption text-white">
                                    <span className="title">Chuổi Thương Hiệu</span>
                                    <h1 className="display-4">NGUYÊN CHẤT COFFEE</h1>
                                    <p>Bạn sẽ CHƯA BIẾT UỐNG cafe, trà SẠCH, NGON và KHÔNG BẢO VỆ SỨC KHỎE mình cho đến khi thưởng thức
                                    NGUYEN CHAT COFFEE
                                        </p>
                                </div>
                            </div>
                        </Carousel.Item>
                    )
                })}
            </Carousel>

        )
    }
    componentDidMount() {
        this.props.dispatch(fetchSlider())
    }


}
const mapStateToProps = (state) => ({
    Slider: state.products.slider,
})
export default connect(mapStateToProps)(Slider)
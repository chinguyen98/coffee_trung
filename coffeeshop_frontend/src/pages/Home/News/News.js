import React, { Component } from 'react'
import style from './News.scss'
import News1 from '../../../assets/images/news_1.jpg'
import News2 from '../../../assets/images/news_2.jpg'

export default class News extends Component {
    render() {
        return (
            <section className="event-section">
                <div className="container">
                    <div className="row">
                        <div className="col event-title text-center">
                            <h1>KIẾN THỨC VỀ CÀ PHÊ</h1>
                            <span>Exclusive Holidays For Any Travelers</span>
                            <div className="event-title__line welcome-title__line mx-auto mt-3 mb-3 mb-sm-5" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-md-5">
                            <img src={News1} className="img-fluid" alt="News1" />
                        </div>
                        <div className="col sm-6 col-md-7 event-info">
                            <h5>
                                <a href data-toggle="modal" data-target="#myModal">Đôi điều về Moka pot</a>
                            </h5>
                            <span>3/01/2018</span>
                            <p>
                                Dù không thể so sánh chất lượng cafe với một tách Espresso pha máy thực thụ song trải nghiệm pha
                                chế bằng Moka pot...
                            </p>
                        </div>
                        <div className="event-section__spacing" />
                        <div className="col sm-6 col-md-7 event-info">
                            <h5>
                                <a href data-toggle="modal" data-target="#myModal">Đôi điều về Moka pot</a>
                            </h5>
                            <span>5/01/2018</span>
                            <p>
                                Dù không thể so sánh chất lượng cafe với một tách Espresso pha máy thực thụ song trải nghiệm pha
                                chế bằng Moka pot...
                            </p>
                        </div>
                        <div className="col-sm-6 col-md-5">
                            <img src={News2} className="img-fluid" alt="News2" />
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}

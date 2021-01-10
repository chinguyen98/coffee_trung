import React, { Component } from 'react'
import style from './OurStart.scss'
export default class OurStart extends Component {
    render() {
        return (
            <section className="star-section">
                <div className="container">
                    <div className="row">
                        <div className="col star-title text-center">
                            <h1>OUR STATS</h1>
                            <span>When Climbing The Carrer Ladder</span>
                            <div className="welcome-title__line mx-auto my-5 mt-4 mb-5" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-3 star-detail">
                            <i className="fa fa-coffee" />
                            <p className="counter">100</p>
                            <h3>Coffee Branches</h3>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3 star-detail">
                            <i className="fa fa-coffee" />
                            <p className="counter">85</p>
                            <h3>Number Award</h3>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3 star-detail">
                            <i className="fa fa-coffee" />
                            <p className="counter">10,567</p>
                            <h3>Happy Customer</h3>
                        </div>
                        <div className="col-12 col-sm-6 col-md-3 star-detail">
                            <i className="fa fa-coffee" />
                            <p className="counter">900</p>
                            <h3>Staff</h3>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

import React from 'react'
import Header from '../../components/Home/Header/Header'
import Footer from '../../components/Home/Footer/Footer'
import { Route } from 'react-router-dom'
const LayoutHeader = (props) => {
    return (
        <>
            <Header />
            {props.children}
            <Footer />
        </>
    )
}
export const HomeTemplate = ({ Component, ...rest }) => {
    return (
        <Route {...rest} render={(props) => {
            return (
                <LayoutHeader >
                    <Component {...props} />
                </LayoutHeader>
            )
        }} />
    )
}
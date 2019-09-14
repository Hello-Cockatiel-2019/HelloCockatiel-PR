import React, { Component } from 'react'
import Slider from "react-slick"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min'
import 'bootstrap/dist/js/bootstrap.min'

import GlobalStyle from './GlobalStyle'
import { BrownSmall } from './Text'

// import FAQs from '../FAQs'
import NavBar from './NavBar'
import ChangeSize from './ChangeSize'

export default class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <GlobalStyle />
                <ChangeSize />
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <NavBar />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

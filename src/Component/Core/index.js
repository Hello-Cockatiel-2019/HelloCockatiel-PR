import React, { Component } from 'react'
import Slider from "react-slick"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min'
import 'bootstrap/dist/js/bootstrap.min'

import GlobalStyle from './GlobalStyle'
import FAQs from '../FAQs/FAQs'
import { BrownSmall } from './Text'

export default class Index extends Component {
    render() {
        const settings = {
            dots: true,
            fade: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <React.Fragment>
                <GlobalStyle />
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <Slider {...settings}>
                            <div>
                                <BrownSmall> 55 </BrownSmall>
                            </div>
                            <div>
                                <FAQs />
                            </div>
                        </Slider>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

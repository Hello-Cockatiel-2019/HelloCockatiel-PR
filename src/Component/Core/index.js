import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min'
import 'bootstrap/dist/js/bootstrap.min'

import GlobalStyle from './GlobalStyle'

import NavBar from './NavBar'
import ChangeSize from './ChangeSize'



export default class Index extends Component {
    state = {
        blur: 0
    }
    
    ChangeBlur = (i) => {
        this.setState({
            blur: i
        })
    }
    
    render() {
        return (
            <React.Fragment>
                <GlobalStyle />
                <ChangeSize />
                <div className="container-fluid p-0">
                    <NavBar Blur={this.ChangeBlur} />
                </div>
            </React.Fragment>
        )
    }
}

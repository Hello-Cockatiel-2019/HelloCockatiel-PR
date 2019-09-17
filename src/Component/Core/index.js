import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min'
import 'bootstrap/dist/js/bootstrap.min'

import GlobalStyle from './GlobalStyle'

import NavBar from './NavBar'
import ChangeSize from './ChangeSize'

export default class Index extends Component {
    
    render() {
        return (
            <React.Fragment>
                <GlobalStyle />
                <ChangeSize />
                <div className="container-fluid p-0">
                    <NavBar />
                </div>
            </React.Fragment>
        )
    }
}

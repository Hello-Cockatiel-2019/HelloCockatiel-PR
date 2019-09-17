import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min'
import 'bootstrap/dist/js/bootstrap.min'

import GlobalStyle from './GlobalStyle'

import Background from './Background'
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
                <Background BgBlur={this.state.blur} />
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <NavBar Blur={this.ChangeBlur}/>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

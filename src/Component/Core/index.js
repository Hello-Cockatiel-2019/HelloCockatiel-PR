import React, { Component } from 'react'
import webfont from 'webfontloader';

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min'
import 'bootstrap/dist/js/bootstrap.min'
import SideBar from './Sidebar';


webfont({
    files: ["../../../public/fonts/Quark-Bold.otf","../../../public/fonts/paaymaay_regular.ttf"],
    fontName: ["Quark","paaymaay"]
});

export default class componentName extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <SideBar />
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react'
import styled from 'styled-components'

const Qwood = styled.div `
    background-color :#DB9B51;
    width: 462px;
    height: 38px;
    font-family: quark bold;
    padding-left:0.7em;
`
const Awood = styled.div `
    background-color:#987245;
    width: 462px;
    padding-bottom: 1em;
    padding-left:0.7em;
    font-family: quark bold;
`

export default class Woodsign extends Component {
    render() {
        return (
            <React.Fragment>
                <Qwood>Q: {this.props.q}</Qwood>
                <Awood>A: {this.props.a}</Awood>

            </React.Fragment>
        )
    }
}

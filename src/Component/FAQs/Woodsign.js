import React, { Component } from 'react'
import styled from 'styled-components'

const Qwood = styled.div `
    background-color :#DB9B51;
    width: 462px;
    height: 38px;
    padding-left:0.7em;
    padding-top:0.3em;
`
const Awood = styled.div `
    background-color:#987245;
    width: 462px;
    padding-top:0.5em;
    padding-bottom: 1em;
    padding-left:0.7em;
`

export default class Woodsign extends Component {
    render() {
        return (
                <div className="d-flex flex-column">
                <Qwood>Q: {this.props.q}</Qwood>
                <Awood>A: {this.props.a}</Awood>
                </div>
        )
    }
}

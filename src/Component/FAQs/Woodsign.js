import React, { Component } from 'react'
import styled from 'styled-components'
import { Paragraph, BrownParagraph } from '../Core/Text'

const Qwood = styled(BrownParagraph) `
    background-color :#DB9B51;
    width: 462px;
    height: 38px;
    padding-left:0.7em;
    padding-top:0.3em;
    margin-top: 0.5em;
    @media only screen and (max-width:1024px) {
        width: 370px;
        margin:0.3em 2em 0em 2em;
    }
`
const Awood = styled(Paragraph)`
    background-color:#987245;
    width: 462px;
    padding-top:0.5em;
    padding-bottom: 1em;
    padding-left:0.7em;
    margin-bottom: 3em;
    @media only screen and (max-width:1024px) {
        width: 370px;
        margin:0em 2em 3em 2em;
    }
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

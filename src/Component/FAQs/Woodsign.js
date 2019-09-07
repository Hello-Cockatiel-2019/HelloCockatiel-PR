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
`
const Awood = styled(Paragraph)`
    background-color:#987245;
    width: 462px;
    padding-top:0.5em;
    padding-bottom: 1em;
    padding-left:0.7em;
    margin-bottom: 3em;
`

export default class Woodsign extends Component {
    render() {
        return (
                <div className="d-flex flex-column pr-2">
                <Qwood>Q: {this.props.q}</Qwood>
                <Awood>A: {this.props.a}</Awood>
                </div>
        )
    }
}

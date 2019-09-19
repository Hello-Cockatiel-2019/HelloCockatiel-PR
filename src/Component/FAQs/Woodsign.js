import React, { Component } from 'react'
import styled from 'styled-components'
import { Paragraph, BrownParagraph } from '../Core/Text'

const Qwood = styled(BrownParagraph) `
    background-color :#DB9B51;
    width: 400px;
    /* height: 38px; */
    padding-left:0.7em;
    padding-top:0.3em;
    box-shadow: 5px 5px 8px black;
    margin: 0em 0em 0em 0em;
    @media only screen and (max-width:1400px) {
        width: 370px;
        margin:0em 0em 0em 0em;
    }
    @media only screen and (max-width:1320px) {
        width: 320px;
        margin:0em 0em 0em 0em;
    }
    @media only screen and (max-width:1320px) {
        width: 290px;
    }
    @media only screen and (max-width:1024px) {
        width: 270px;
        margin: 0em 0em 0em 0em;
    }
    @media only screen and (max-width:768px) {
        width: 300px;
    }
    @media only screen and (max-width:500px) {
        width: 330px;
    }
    @media only screen and (max-width:400px) {
        width: 300px;
        font-size:1em;
    }
    @media only screen and (max-width:320px) {
        width: 250px;
        margin: 0em 1em 0em 0em;
        font-size:1em;
    }
    @media only screen and (max-width:1024px) and (orientation: portrait) and (min-height:1366px)  {
        width: 250px;
        margin: 0em 0em 0em 0em;
    }
`
const Awood = styled(Paragraph)`
    background-color:#987245;
    width: 400px;
    padding-top:0.5em;
    padding-bottom: 1em;
    padding-left:0.7em;
    box-shadow: 5px 5px 8px black;

    @media only screen and (max-width:1400px) {
        width: 370px;
    }
    @media only screen and (max-width:1320px) {
        width: 290px;
    }
    @media (max-width:1120px) {
        width: 290px;
    }
    @media only screen and (max-width:1024px) {
        width: 270px;
    }
    @media only screen and (max-width:768px) {
        width: 300px;
    }
    @media only screen and (max-width:500px) {
        width: 330px;
    }
    @media only screen and (max-width:400px) {
        width: 300px;
        font-size:1em;
    }
    @media only screen and (max-width:320px) {
        width: 250px;
        font-size:1em;
    }
    @media only screen and (max-width:1024px) and (orientation: portrait) and (min-height:1366px)  {
        width: 250px;
    }
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

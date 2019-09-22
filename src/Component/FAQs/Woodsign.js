import React, { Component } from 'react'
import styled from 'styled-components'
import { Paragraph, BrownParagraph } from '../Core/Text'

const Qwood = styled(BrownParagraph) `
    background-color :#DB9B51;
    width: 600px;
    /* height: 38px; */
    padding-left:0.7em;
    padding-top:0.3em;
    box-shadow: 5px 5px 8px black;
    margin: 0em 0em 0em 0em;
    @media only screen and (max-width:1400px) {
        width: 500px;
        margin:0em 0em 0em 0em;
    }
    @media only screen and (max-width:1320px) {
        width: 390px;
    }
    @media only screen and (max-width:1024px) {
        width: 390px;
    }
    @media only screen and (max-width:999px) {
        width: 330px;
    }
    @media only screen and (max-width:991px) {
        width: 330px;
    }
    @media only screen and (max-width:768px) {
        width: 330px;
    }
    @media only screen and (max-width:600px) {
        width: 330px;
    }
    @media only screen and (max-width:500px) {
        width: 320px;
    }
    @media only screen and (max-width:400px) {
        width: 300px;
        font-size:1em;
    }
    @media only screen and (max-width:320px) {
        width: 230px;
        font-size:0.75em;
    }
    @media only screen and (max-width:1024px) and (orientation: landscape) and (min-height:768px) {
        width: 400px;
    }
    @media only screen and (max-width:1024px) and (orientation: portrait) and (min-height:1366px)  {
        width: 330px;
        font-size:1.25em;
    }
`
const Awood = styled(Paragraph)`
    background-color:#987245;
    width: 600px;
    padding-top:0.4em;
    padding-bottom:0.4em;
    padding-left:0.7em;
    box-shadow: 5px 5px 8px black;

    @media only screen and (max-width:1400px) {
        width: 500px;
    }
    @media only screen and (max-width:1320px) {
        width: 390px;
    }
    @media (max-width:1120px) {
        width: 390px;
    }
    @media only screen and (max-width:1024px) {
        width: 390px;
    }
    @media only screen and (max-width:999px) {
        width: 330px;
    }
    @media only screen and (max-width:991px) {
        width: 330px;
    }
    @media only screen and (max-width:768px) {
        width: 330px;
    }
    @media only screen and (max-width:600px) {
        width: 330px;
    }
    @media only screen and (max-width:500px) {
        width: 320px;
    }
    @media only screen and (max-width:400px) {
        width: 300px;
        font-size:1em;
    }
    @media only screen and (max-width:320px) {
        width: 230px;
        font-size:0.75em;
    }
    @media only screen and (max-width:1024px) and (orientation: landscape) and (min-height:768px) {
        width: 400px;
    }
    @media only screen and (max-width:1024px) and (orientation: portrait) and (min-height:1366px)  {
        width: 330px;
        font-size:1.25em;
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

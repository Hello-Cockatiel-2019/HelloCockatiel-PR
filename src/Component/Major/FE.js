import React, { Component } from 'react'
import styled from 'styled-components'

const FEbg = styled.div`
    background-color :#CEBA52;
    opacity: 0.9;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
    width: 27em;
    height: 9em;
`
const Bird = styled.img`
padding-left:2em;
padding-top:0.7em;
width:26%;
`
const Frame = styled.img`
margin-left:2em;
width:7%;
position:absolute;
z-index: 2;
padding-top:5.7em;
margin-left:-5.1em;
`
const Text = styled.div`
font-family: Quark;
font-size: 18px;
line-height: 25px;
letter-spacing: 0.05em;
position:absolute;
z-index: 3;
padding-left:8em;
margin-top:-4.5em;
`

export default class FE extends Component {
    render() {
        return (
            <FEbg>
                <Bird src="/images/Objects/c1.png" />
                <Text>
                <div>Lorem Ipsum is simply dummy </div>
                <div>text of the printing and </div>
                <div>typesetting industry. Lorem Ipsum </div>
                <div>has been the industry's standard </div>
                <div>dummy text ever</div> 
                </Text> 
                <Frame src="/images/Objects/frame.png" />
            </FEbg>
        )
    }
}

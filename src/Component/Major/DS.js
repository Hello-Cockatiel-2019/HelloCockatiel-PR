import React, { Component } from 'react'
import styled from 'styled-components'

const DSbg = styled.div`
    background-color :#DB9B51;
    opacity: 0.9;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
    width: 25em;
    height: 9em;
`
const Bird = styled.img`
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 
            0px 4px 4px rgba(0, 0, 0, 0.25), 
            0px 4px 4px rgba(0, 0, 0, 0.25), 
            0px 4px 4px rgba(0, 0, 0, 0.25), 
            0px 4px 4px rgba(0, 0, 0, 0.25), 
            0px 4px 4px rgba(0, 0, 0, 0.25);
            width:20%;
`
const Frame = styled.img`
width:35%;
`
export default class DS extends Component {
    render() {
        return (
            <DSbg>
                <Bird src="/images/Objects/c2.png" />
                <Frame src="/images/Objects/frame.png" />
            </DSbg>
        )
    }
}

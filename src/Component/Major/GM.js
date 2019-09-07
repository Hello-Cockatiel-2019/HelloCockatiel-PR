import React, { Component } from 'react'
import styled from 'styled-components'

const GMbg = styled.div`
    background-color :#ACA89C;
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
export default class GM extends Component {
    render() {
        return (
            <GMbg>
                <Bird src="/images/Objects/c3.png" />
                <Frame src="/images/Objects/frame.png" />
            </GMbg>
        )
    }
}

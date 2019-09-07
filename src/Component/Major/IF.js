import React, { Component } from 'react'
import styled from 'styled-components'

const IFbg = styled.div`
    background-color :#B3660B;
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
export default class IF extends Component {
    render() {
        return (
            <IFbg>
                <Bird src="/images/Objects/c4.png" />
                <Frame src="/images/Objects/frame.png" />
            </IFbg>
        )
    }
}

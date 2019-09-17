import React, { Component } from 'react'
import styled from 'styled-components'
import { Small, Small2 } from '../Core/Text'
import color from '../../Config/Color';

const Box = styled.div`
    background-color : ${props => props.colorBox};
    /* opacity:0.9 ; */
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
    width:65em;
    height: 12em;
`

const TextContent = styled(Small) `
    margin-top:-7em;
    padding-left:8em;
    padding-right:1em;  
    position: absolute;
    color:${color.font2};
    line-height: 25px;
    letter-spacing: 0.05em;
`
const TextTopic = styled(Small2) `
    position: absolute;
    margin-top:-2em;
    padding-left:${props => props.topic === 0 ? '2.8em' 
                : props.topic === 1? '3.4em': '3.7em'};
`

const Frame = styled.img`
    margin-top : 7em;
    width :20%;
    margin-left:-6em;
    box-shadow: 0px 7px 5px rgba(0, 0, 0, 0.25),   
                0px 7px 5px rgba(0, 0, 0, 0.25), 
                0px 7px 5px rgba(0, 0, 0, 0.25), 
                0px 7px 5px rgba(0, 0, 0, 0.25);
`

const Bird = styled.img`
    margin-top:-2em;
    margin-left:2em;
    width : 90px;
    box-shadow: 0px 7px 5px rgba(0, 0, 0, 0.25),   
                0px 7px 5px rgba(0, 0, 0, 0.25), 
                0px 7px 5px rgba(0, 0, 0, 0.25), 
                0px 7px 5px rgba(0, 0, 0, 0.25);
    border-radius:100px;
`

export default class Field extends Component {
    render() {
        return (
                <Box colorBox={this.props.colorBox} >
                    <Bird src={`/images/Objects/${this.props.imgbird}`}></Bird>
                    <TextTopic topic={this.props.keytopic}>{this.props.topic}</TextTopic>
                    <TextContent>{this.props.content}</TextContent>
                    <Frame src = "/images/Objects/frame.png" />
                </Box>
        )
    }
}

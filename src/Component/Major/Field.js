import React, { Component } from 'react'
import styled from 'styled-components'
import { Small, Small2 } from '../Core/Text'

const Box = styled.div`
    background-color : ${props => props.color};
    opacity: 0.9;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
    width:60em;
    height: 10em;
`

const TextContent = styled(Small) `
    padding-left:2em;
    padding-right:5em;  
    position: absolute;
`
const TextTopic = styled(Small2) `
    position: absolute;
`

const IMG = styled.img`
    padding-top : -1em;
    width :25%;
`

const IMG1 = styled.img`
    margin-left:2em;
    padding-top : 6em;
    width : 100%;
    background-image:url('/images/Objects/${props => props.imgbird}');
    background-repeat:no-repeat;
    /* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),  
                0px 4px 4px rgba(0, 0, 0, 0.25), 
                0px 4px 4px rgba(0, 0, 0, 0.25), 
                0px 4px 4px rgba(0, 0, 0, 0.25), 
                0px 4px 4px rgba(0, 0, 0, 0.25), 
                0px 4px 4px rgba(0, 0, 0, 0.25); */
    border-radius:100px;
`

export default class Field extends Component {
    render() {
        return (
                <Box color={this.props.color} >
                    <IMG1 imgbird= {this.props.imgbird}></IMG1>
                    <TextTopic>{this.props.topic}</TextTopic>
                    <TextContent>{this.props.content}</TextContent>
                    <IMG src = "/images/Objects/frame.png" />
                </Box>
        )
    }
}

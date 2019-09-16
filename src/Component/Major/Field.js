import React, { Component } from 'react'
import styled from 'styled-components'
import { Small, Small2 } from '../Core/Text'

const Box = styled.div`
    background-color : ${props => props.color};
    opacity: 0.9;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
    width:40em;
    height: 12em;
    background-image:url('/images/Objects/${props => props.imgbird}'),url('/images/Objects/${props => props.imgframe}');
    background-repeat:no-repeat;
`

const TextContent = styled(Small) `
    padding-left:2em;
    padding-right:5em;
`
const TextTopic = styled(Small2) `
    
`

export default class Field extends Component {
    render() {
        return (
                <Box color={this.props.color} imgbird={this.props.imgbird} imgframe={this.props.imgframe}>
                    <TextTopic>{this.props.topic}</TextTopic>
                    <TextContent>{this.props.content}</TextContent>
                </Box>
        )
    }
}

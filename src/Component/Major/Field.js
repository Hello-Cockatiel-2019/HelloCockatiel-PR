import React, { Component } from 'react'
import styled from 'styled-components'
import { Small, Small2 } from '../Core/Text'
import color from '../../Config/Color'

const Box = styled.div`
    background-color : ${props => props.colorBox};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
    width:65em;
    height: 12em;
    @media (max-width:420px){
        width:22em;
        height:7em;
    }
    @media (max-width:380px){
        width:20em;
        height:7em;
    } 
    @media (max-width:325px){
        width:17em;
        height:6em;
    }
`

const TextContent = styled(Small) `
    margin-top:-7em;
    padding-left:8em;
    padding-right:1em;  
    position: absolute;
    color:${color.font2};
    line-height: 25px;
    letter-spacing: 0.05em;
    @media (max-width:420px){
        line-height: 16px;
        margin-top:-7em;
        padding-left:8em;
        padding-right:2em;
        font-size:0.8em;
    }
    @media (max-width:380px){
        line-height: 16px;
        margin-top:-5em;
        padding-left:6em;
        padding-right:2em;
        font-size:0.8em;
    }
    @media only screen and (max-width:325px){
        line-height: 16px;
        margin-top:-8em;
        padding-left:9em;
        padding-right:4em;
        font-size:0.3em;
    }
`
const TextTopic = styled(Small2) `
    position: absolute;
    margin-top:-2em;
    padding-left:${props => props.topic === 0 ? '2.8em' 
                : props.topic === 1? '3.4em': '3.7em'};
    @media (max-width:420px){
        font-size:0.7em;
        padding-left:${props => props.topic === 0 ? '3.1em' 
                : props.topic === 1? '3.7em'
                : props.topic === 3? '3.7em'
                : '4em'};
        margin-top:-1.8em;
    }
    @media (max-width:380px){
        font-size:0.7em;
        padding-left:${props => props.topic === 0 ? '1.6em' 
                : props.topic === 1? '2.3em'
                : props.topic === 3? '2.3em'
                : '2.7em'};
        margin-top:-1.8em;
    }
    @media (max-width:325px){
        font-size:0.1em;
        padding-left:${props => props.topic === 0 ? '2.5em' 
                : props.topic === 1? '3.1em'
                : props.topic === 3? '3.2em'
                : '3.5em'};
        margin-top:-1.8em;
    }
`

const Frame = styled.img`
    margin-top : 7em;
    width :20%;
    margin-left:-6em;
    box-shadow: 0px 7px 5px rgba(0, 0, 0, 0.25),   
                0px 7px 5px rgba(0, 0, 0, 0.25), 
                0px 7px 5px rgba(0, 0, 0, 0.25), 
                0px 7px 5px rgba(0, 0, 0, 0.25);
    @media (max-width:420px){
        width:17%;
        margin-top:4.5em;
        margin-left:-3.8em;
    }
    @media (max-width:380px){
        width:17%;
        margin-top:3.5em;
        margin-left:-3.2em;
    }
    @media only screen and (max-width:325px){
        width:3em;
        margin-top:3.5em;
        margin-left:-3em;
    }
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
    @media (max-width:420px){
        width:18%;
        margin-top:-1.3em;
        margin-left:1.5em;
    }
    @media (max-width:380px){
        width:3em; 
        margin-top:-1em;
        margin-left:1em;
    }
    @media (max-width:325px){
        width:3em;
        margin-top:-1em;
        margin-left:1em;
    }
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

import React, { Component } from 'react'
import styled from 'styled-components'
import {Small} from '../Core/Text'
import color from '../../Config/Color'

const Box = styled.div`
    background-color : ${props => props.colorBox};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width:26em;
    height: 11em;
    @media only screen and (max-width: 1196px) and (max-height: 834px) and (orientation: landscape){
        width:26em;
        height: 11em;
    }
    @media only screen and (max-width: 1024px) and (max-height: 1467px) and (orientation: portrait){
        width:45em;
        height:11em;
    }
    @media only screen and (max-width: 1024px) and (max-height: 1366px) and (orientation: portrait){
        width:45em;
        height:11em;
    }
    @media only screen and (max-width: 1024px) and (max-height: 768px) and (orientation: landscape){
        width:26em;
        height: 11em;
    }
    @media only screen and (max-width: 834px) and (max-height: 1196px) and (orientation: portrait){
        width:30em;
        height:11em;
    }
    @media (max-width:770px) and (orientation: portrait){
        width:25em;
        height:9em;
    }
    @media (max-width:570px){
        width:22em;
        height:7em;
    }
    @media (max-width:500px){
        width:22em;
        height:7em;
    }
    @media (max-width:420px){
        width:20em;
        height:7em;
    }
    @media (max-width:380px){
        width:20em;
        height:7em;
    } 
    @media (max-width:330px){
        width:18em;
        height:6.5em;
    }
`

const TextContent = styled(Small)`
    margin-top:-7em;
    padding-left:7em;
    padding-right:2em;  
    color:${color.font2};
    line-height: 25px;
    @media only screen and (max-width: 1196px) and (max-height: 834px) and (orientation: landscape){
        line-height: 20px;
        margin-top:-6.5em;
        padding-left:7em;
        padding-right:1em;
        font-size:1.2em;
    }
    @media only screen and (max-width: 1024px) and (max-height: 1467px) and (orientation: portrait){
        line-height: 25px;
        margin-top:-7em;
        padding-left:9em;
        padding-right:1em;
        font-size:1.2em;
    }
    @media only screen and (max-width: 1024px) and (max-height: 1366px) and (orientation: portrait){
        line-height: 25px;
        margin-top:-7em;
        padding-left:9em;
        padding-right:1em;
        font-size:1.2em;
    }
    @media only screen and (max-width: 1024px) and (max-height: 768px) and (orientation: landscape){
        line-height: 17px;
        margin-top:-6.5em;
        padding-left:7em;
        padding-right:1em;
        font-size:1em;
    }
    @media only screen and (max-width: 834px) and (max-height: 1196px) and (orientation: portrait){
        line-height: 25px;
        margin-top:-7em;
        padding-left:8em;
        padding-right:1em;
        font-size:1.2em;
    }
    @media (max-width:770px) and (orientation: portrait){
        line-height: 25px;
        margin-top:-8em;
        padding-left:8em;
        padding-right:2em;
    }
    @media (max-width:570px){
        line-height: 16px;
        margin-top:-6.5em;
        padding-left:8em;
        padding-right:2em;
        font-size:0.9em;
    }
    @media (max-width:500px){
        line-height: 16px;
        margin-top:-6.5em;
        padding-left:8em;
        padding-right:2em;
        font-size:0.9em;
    }
    @media (max-width:420px){
        line-height: 16px;
        margin-top:-7em;
        padding-left:7em;
        padding-right:1em;
    }
    @media (max-width:380px){
        line-height: 16px;
        margin-top:-6.5em;
        padding-left:7em;
        padding-right:1em;
        
    }
    @media (max-width:330px){
        line-height: 16px;
        margin-top:-5.5em;
        padding-left:5em;
        padding-right:0.5em;
    }
`

const Bird = styled.img`
    margin-top:2em;
    margin-left:1em;
    width : 90px;
    @media only screen and (max-width: 1196px) and (max-height: 834px) and (orientation: landscape){
        width:22%;
        margin-top:-1.8em;
        margin-left:1.5em;
    }
    @media only screen and (max-width: 1024px) and (max-height: 1467px) and (orientation: portrait){
        width:18%;
        margin-top:-1.6em;
        margin-left:3.5em;
    }
    @media only screen and (max-width: 1024px) and (max-height: 1366px) and (orientation: portrait){
        width:18%;
        margin-top:-1.6em;
        margin-left:3.5em;
    }
    @media only screen and (max-width: 1024px) and (max-height: 768px) and (orientation: landscape){
        width:22%;
        margin-top:-2em;
        margin-left:1.5em;
    }
    @media only screen and (max-width: 834px) and (max-height: 1196px) and (orientation: portrait){
        width:18%;
        margin-top:-2em;
        margin-left:2em;
    }
    @media (max-width:770px) and (orientation: portrait){
        width:18%;
        margin-top:-0.9em;
        margin-left:1.5em;
    }
    @media (max-width:570px){
        width:18%;
        margin-top:-1.3em;
        margin-left:1.5em;
    }
    @media (max-width:500px){
        width:18%;
        margin-top:-1.3em;
        margin-left:1.5em;
    }
    @media (max-width:420px){
        width:5em;
        margin-top:0.5em;
        margin-left:0.5em;
    }
    @media (max-width:380px){
        width:5em;
        margin-top:0.5em;
        margin-left:0.5em;
    }
    @media (max-width:330px){
        width:4em;
        margin-top:0.5em;
        margin-left:0.5em;
    }
`

export default class Field extends Component {
    render() {
        return (
            <Box colorBox={this.props.colorBox} >
                <Bird src={`/images/Objects/${this.props.imgbird}`}></Bird>
                <TextContent>{this.props.content}</TextContent>
            </Box>
        )
    }
}

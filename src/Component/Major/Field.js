import React, { Component } from 'react'
import styled from 'styled-components'
import {Small} from '../Core/Text'
import color from '../../Config/Color'

const Box = styled.div`
    background-color : ${props => props.colorBox};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width:26em;
    height: 11em;
    @media (max-width: 1550px) and (max-height: 750px) and (orientation: landscape)  {
        width:27em;
        height: 10em;
    }
    @media (max-width: 1280px) and (max-height:680px){
        width:26em;
        height: 10em;
    }
    @media only screen and (max-width: 1196px) and (max-height: 834px) and (orientation: landscape){
        width:26em;
        height: 11em;
    }
    @media (max-width: 1196px) and (max-height: 840px){
        width:23em;
        height: 10em;
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
        width:22em;
        height: 10em;
    }
    @media (max-width:1010px) {
        width:60em;
        height: 8em;
    }
    @media (max-width:991px) {
        width:35em;
        height: 8em;
    }
    @media (max-width:850px) and (max-height:850px){
        width:35em;
        height: 10em;
    }
    @media only screen and (max-width: 834px) and (max-height: 1196px) and (orientation: portrait){
        width:30em;
        height:11em;
    }
    @media (max-width:834px) and (max-height:900px){
        margin-top:${props => props.mt === 0 ? -20
                        : props.mt === 1 ? -100 
                        : props.mt === 2 ? -100  :  -100 }px;
    }
    @media (max-width:834px) and (max-height:680px){
        width:34em;
        height:7em;
    }
    @media (max-width:800px) and (max-height:800px){
        width:30em;
        height:10em;
    }
    @media (max-width:780px){
        width:30em;
        height:9em;
    }
    @media (max-width:770px) and (orientation: portrait){
        width:30em;
        height:9em;
    }
    @media (max-width:590px){
        width:30em;
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
        margin-top:${props => props.mt === 0 ? -20
                        : props.mt === 1 ? -150 
                        : props.mt === 2 ? -190  :  -230 }px;
    }
    @media (max-width:380px){
        margin-top:${props => props.mt === 0 ? 0 
                        : props.mt === 1 ? -130 
                        : props.mt === 2 ? -150  :  -170 }px;
        width:20em;
        height:7em;
    } 
    @media (max-width:330px){
        margin-top:${props => props.mt === 0 ? 0 : -100 }px;
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
    @media (max-width: 1550px) and (max-height: 750px) and (orientation: landscape)  {
        line-height: 25px;
        margin-top:-6.5em;
        padding-left:6em;
        padding-right:1em;
    }
    @media only screen and (max-width: 1196px) and (max-height: 834px) and (orientation: landscape){
        line-height: 20px;
        margin-top:-6.5em;
        padding-left:7em;
        padding-right:1em;
        font-size:1.2em;
    }
    @media (max-width: 1196px) and (max-height: 840px){
        line-height: 20px;
        margin-top:-6.5em;
        padding-left:6em;
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
        line-height: 18px;
        margin-top:-6em;
        padding-left:6em;
        padding-right:1em;
    }
    @media (max-width:1010px) {
        line-height: 18px;
        margin-top:-6em;
        padding-left:7em;
        padding-right:1em;
    }
    @media (max-width:991px) {
        line-height: 18px;
        margin-top:-5.5em;
        padding-left:7em;
        padding-right:1em;
    }
    @media (max-width:850px) and (max-height:850px){
        line-height: 25px;
        margin-top:-6em;
        padding-left:7em;
        padding-right:1em;
    }
    @media only screen and (max-width: 834px) and (max-height: 1196px) and (orientation: portrait){
        line-height: 25px;
        margin-top:-7em;
        padding-left:8em;
        padding-right:1em;
        font-size:1.2em;
    }
    @media (max-width:834px) and (max-height: 800px){
        line-height: 25px;
        margin-top:-6em;
        padding-left:8em;
        padding-right:1em;
    }
    @media (max-width: 834px) and (max-height: 680px) {
        line-height: 25px;
        margin-top:-5em;
        padding-left:5em;
        padding-right:1em;
        font-size:1.2em;
    }
    @media (max-width: 800px) and (max-height: 800px) {
        line-height: 25px;
        margin-top:-6em;
        padding-left:7em;
        padding-right:1em;
    }
    @media (max-width:780px){
        line-height: 25px;
        margin-top:-6.5em;
        padding-left:7em;
        padding-right:1em;
    }
    @media (max-width:770px) and (orientation: portrait){
        line-height: 25px;
        margin-top:-6.5em;
        padding-left:7em;
        padding-right:1em;
    }
    @media (max-width:570px){
        line-height: 16px;
        margin-top:-6.5em;
        padding-left:8em;
        padding-right:2em;
        font-size:0.9em;
    }
    @media (max-width:570px) and (max-height:800px) and (orientation: portrait){
        line-height: 16px;
        margin-top:-6em;
        padding-left:8em;
        padding-right:2em;  
    }
    @media (max-width:570px) and (max-height:680px) and (orientation: portrait){
        line-height: 16px;
        margin-top:-6em;
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
    @media (max-width:550px) and (max-height:760px) and (orientation: portrait){
        line-height: 16px;
        margin-top:-6em;
        padding-left:8em;
        padding-right:2em;
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
    @media (max-width: 1550px) and (max-height: 750px) and (orientation: landscape)  {
        width:22%;
        margin-top:1em;
        margin-left:0.5em;
    }
    @media only screen and (max-width: 1196px) and (max-height: 834px) and (orientation: landscape){
        width:22%;
        margin-top:-1.8em;
        margin-left:1.5em;
    }
    @media (max-width: 1196px) and (max-height: 840px){
        width:26%;
        margin-top:1.5em;
        margin-left:1em;
    }
    @media only screen and (max-width: 1024px) and (max-height: 1467px) and (orientation: portrait){
        width:22%;
        margin-top:1em;
        margin-left:2em;
    }
    @media only screen and (max-width: 1024px) and (max-height: 1366px) and (orientation: portrait){
        width:22%;
        margin-top:1em;
        margin-left:2em;
    }
    @media only screen and (max-width: 1024px) and (max-height: 768px) and (orientation: landscape){
        width:26%;
        margin-top:1em;
        margin-left:0.5em;
    }
    @media (max-width:1010px) {
        width:22%;
        margin-top:0.5em;
        margin-left:1em;
    }
    @media (max-width:991px) {
        width:20%;
        margin-top:0.5em;
        margin-left:1em;
    }
    @media only screen and (max-width: 834px) and (max-height: 1196px) and (orientation: portrait){
        width:22%;
        margin-top:1.5em;
        margin-left:2em;
    }
    @media (max-width:834px) and (max-height: 800px){
        width:16%;
        margin-top:0.5em;
        margin-left:2em;
    }
    @media (max-width:834px) and (max-height:680px){
        width:14%;
        margin-top:0.5em;
        margin-left:1em;
    }
    @media (max-width: 800px) and (max-height: 800px) {
        width:18%;
        margin-top:2em;
        margin-left:1em;
    }
    @media (max-width:780px){
        width:20%;
        margin-top:1em;
        margin-left:1em;
    }
    @media (max-width:770px) and (orientation: portrait){
        width:6em;
        margin-top:1em;
        margin-left:1.5em;
    }
    @media (max-width:570px){
        width:18%;
        margin-top:-1.3em;
        margin-left:1.5em;
    }
    @media (max-width:570px) and (max-height:800px) and (orientation: portrait){
        width:18%;
        margin-top:1em;
        margin-left:1.5em;  
    }
    @media (max-width:570px) and (max-height:680px) and (orientation: portrait){
        width:18%;
        margin-top:1em;
        margin-left:1.5em;
    }
    @media (max-width:500px){
        width:18%;
        margin-top:-1.3em;
        margin-left:1.5em;
    }
    @media (max-width:550px) and (max-height:760px) and (orientation: portrait){
        width:20%;
        margin-top:0.5em;
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
            <Box colorBox={this.props.colorBox} mt={this.props.mt}>
                <Bird src={`/images/Objects/${this.props.imgbird}`}></Bird>
                <TextContent>{this.props.content}</TextContent>
            </Box>
        )
    }
}

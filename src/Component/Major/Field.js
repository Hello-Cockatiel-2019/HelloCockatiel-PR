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
    
    @media only screen and (min-width: 1196px) and (max-height: 834px) and (orientation: landscape){
        width:54em;
        height:11em;
    }
    @media screen and (min-width: 1300px) and (orientation: landscape){
        width:65em;
        height: 12em;
    }
    @media only screen and (min-width: 1024px) and (max-height: 1467px) and (orientation: portrait){
        width:45em;
        height:11em;
    }
    @media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: portrait){
        width:45em;
        height:11em;
    }
    @media only screen and (min-width: 1024px) and (max-height: 768px) and (orientation: landscape){
        width:45em;
        height:9em;
    }
    @media only screen and (min-width: 834px) and (max-height: 1196px) and (orientation: portrait){
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
        width:22em;
        height:7em;
    }
    @media (max-width:380px){
        width:20em;
        height:7em;
    } 
    @media (max-width:325px){
        background-color : ${props => props.colorBox};
        width:17em;
        height:6em;
    }
`

const TextContent = styled(Small)`
    margin-top:-7em;
    padding-left:8em;
    padding-right:1em;  
    position: absolute;
    color:${color.font2};
    line-height: 25px;
    letter-spacing: 0.05em;
    
    @media only screen and (min-width: 1196px) and (max-height: 834px) and (orientation: landscape){
        line-height: 20px;
        margin-top:-6.5em;
        padding-left:7em;
        padding-right:1em;
        font-size:1.2em;
    }
    @media screen and (min-width: 1300px) and (orientation: landscape){
        line-height: 25px;
        margin-top:-7em;
        padding-left:8em;
        padding-right:1em;
    }
    @media only screen and (min-width: 1024px) and (max-height: 1467px) and (orientation: portrait){
        line-height: 25px;
        margin-top:-7em;
        padding-left:9em;
        padding-right:1em;
        font-size:1.2em;
    }
    @media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: portrait){
        line-height: 25px;
        margin-top:-7em;
        padding-left:9em;
        padding-right:1em;
        font-size:1.2em;
    }
    @media only screen and (min-width: 1024px) and (max-height: 768px) and (orientation: landscape){
        line-height: 17px;
        margin-top:-6.5em;
        padding-left:7em;
        padding-right:1em;
        font-size:1em;
    }
    @media only screen and (min-width: 834px) and (max-height: 1196px) and (orientation: portrait){
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
        padding-left:8em;
        padding-right:2em;
        font-size:0.8em;
    }
    @media (max-width:380px){
        line-height: 16px;
        margin-top:-5em;
        padding-left:6em;
        padding-right:2em;
        
    }
    @media only screen and (max-width:325px){
        line-height: 16px;
        margin-top:-6.5em;
        padding-left:6.5em;
        padding-right:2em;
        font-size:0.7em;
    }
`
const TextTopic = styled(Small2)`
    position: absolute;
    margin-top:-2em;
    padding-left:${props => props.topic === 0 ? '2.8em'
        : props.topic === 1 ? '3.4em' : '3.7em'};
    
    @media only screen and (min-width: 1196px) and (max-height: 834px) and (orientation: landscape){
        padding-left:${props => props.topic === 0 ? '1.9em'
        : props.topic === 1 ? '2.5em'
            : props.topic === 3 ? '2.7em'
                : '2.8em'};
        margin-top:-1.8em;
    }
    @media screen and (min-width: 1300px) and (orientation: landscape){
        padding-left:${props => props.topic === 0 ? '2.8em'
        : props.topic === 1 ? '3.4em'
            : props.topic === 3 ? '2.7em'
                : '2.8em'};
        margin-top:-2em;
    }
    @media only screen and (min-width: 1024px) and (max-height: 1467px) and (orientation: portrait){
        padding-left:${props => props.topic === 0 ? '4.3em'
        : props.topic === 1 ? '5em'
            : props.topic === 3 ? '5em'
                : '5.2em'};
        margin-top:-2em;
        font-size:1em;
    }            
    @media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: portrait){
        padding-left:${props => props.topic === 0 ? '4.3em'
        : props.topic === 1 ? '5em'
            : props.topic === 3 ? '5em'
                : '5.2em'};
        margin-top:-2em;
        font-size:1em;
    }
    @media only screen and (min-width: 1024px) and (max-height: 768px) and (orientation: landscape){
        padding-left:${props => props.topic === 0 ? '1.9em'
        : props.topic === 1 ? '2.5em'
            : props.topic === 3 ? '2.7em'
                : '2.8em'};
        margin-top:-1.8em;
    }
    @media only screen and (min-width: 834px) and (max-height: 1196px) and (orientation: portrait){
        padding-left:${props => props.topic === 0 ? '2.8em'
        : props.topic === 1 ? '3.4em'
            : props.topic === 3 ? '3.4em'
                : '3.7em'};
        margin-top:-2em;
        font-size:1em;
    } 
    @media (max-width:770px) and (orientation: portrait){
        padding-left:${props => props.topic === 0 ? '3.1em'
        : props.topic === 1 ? '3.7em'
            : props.topic === 3 ? '4em'
                : '4em'};
        margin-top:-1.8em;
    }
    @media (max-width:570px){
        font-size:0.7em;
        padding-left:${props => props.topic === 0 ? '3.1em'
        : props.topic === 1 ? '3.7em'
            : props.topic === 3 ? '3.7em'
                : '4em'};
        margin-top:-1.8em;
    }
    @media (max-width:500px){
        font-size:0.7em;
        padding-left:${props => props.topic === 0 ? '3.1em'
        : props.topic === 1 ? '3.7em'
            : props.topic === 3 ? '3.7em'
                : '4em'};
        margin-top:-1.8em;
    }
    @media (max-width:420px){
        font-size:0.7em;
        padding-left:${props => props.topic === 0 ? '3.1em'
        : props.topic === 1 ? '3.7em'
            : props.topic === 3 ? '3.7em'
                : '4em'};
        margin-top:-1.8em;
    }
    @media (max-width:380px){
        font-size:0.7em;
        padding-left:${props => props.topic === 0 ? '1.6em'
        : props.topic === 1 ? '2.3em'
            : props.topic === 3 ? '2.3em'
                : '2.7em'};
        margin-top:-1.8em;
    }
    @media (max-width:325px){
        font-size:0.1em;
        padding-left:${props => props.topic === 0 ? '2.5em'
        : props.topic === 1 ? '3.1em'
            : props.topic === 3 ? '3.2em'
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
    
    @media only screen and (min-width: 1196px) and (max-height: 834px) and (orientation: landscape){
        width:24%;
        margin-top:6.8em;
        margin-left:-5.8em;
    }
    @media screen and (min-width: 1300px) and (orientation: landscape){
        width :20%;
        margin-top : 7em;
        margin-left:-6em;
    }
    @media only screen and (min-width: 1024px) and (max-height: 1467px) and (orientation: portrait){
        width:19%;
        margin-top:6.5em;
        margin-left:-5.5em;
    }
    @media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: portrait){
        width:19%;
        margin-top:6.5em;
        margin-left:-5.5em;
    }
    @media only screen and (min-width: 1024px) and (max-height: 768px) and (orientation: landscape){
        width:24%;
        margin-top:5.3em;
        margin-left:-4.8em;
    }
    @media only screen and (min-width: 834px) and (max-height: 1196px) and (orientation: portrait){
        width:19%;
        margin-top:7em;
        margin-left:-5.5em;
    }
    @media (max-width:770px) and (orientation: portrait){
        width:17%;
        margin-top:6em;
        margin-left:-4.3em;
    }
    @media (max-width:570px){
        width:17%;
        margin-top:4.5em;
        margin-left:-3.8em;
    }
    @media (max-width:500px){
        width:17%;
        margin-top:4.5em;
        margin-left:-3.8em;
    }
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
    
    @media only screen and (min-width: 1196px) and (max-height: 834px) and (orientation: landscape){
        width:22%;
        margin-top:-1.8em;
        margin-left:1.5em;
    }
    @media screen and (min-width: 1300px) and (orientation: landscape){
        width : 90px;
        margin-top:-2em;
        margin-left:2em;;
    }
    @media only screen and (min-width: 1024px) and (max-height: 1467px) and (orientation: portrait){
        width:18%;
        margin-top:-1.6em;
        margin-left:3.5em;
    }
    @media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: portrait){
        width:18%;
        margin-top:-1.6em;
        margin-left:3.5em;
    }
    @media only screen and (min-width: 1024px) and (max-height: 768px) and (orientation: landscape){
        width:22%;
        margin-top:-2em;
        margin-left:1.5em;
    }
    @media only screen and (min-width: 834px) and (max-height: 1196px) and (orientation: portrait){
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
                <Frame src="/images/Objects/frame.png" />
            </Box>
        )
    }
}

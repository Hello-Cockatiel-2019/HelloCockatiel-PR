import React, { Component } from 'react'
import styled from 'styled-components'
import {Title, Header} from '../Core/Text'

const Woodplate = styled.div `
    background-image: url('/images/Objects/${props => props.source}');
    background-repeat: no-repeat;
    width:168px;
    height:127px;
    text-align:center;
    padding-top:3.9em;
    padding-right: 1em;
    
    margin-left:3.5em;
`
const HeadLogo = styled.img `
    width:72%;
`

const Facebook = styled.img `
    width: 44px;
    margin-top:.3em;
`

const RegPlate = styled.div `
    background-image: url('/images/Objects/${props => props.source}');
    background-repeat: no-repeat;
    width:233px;
    height:107px;
    text-align:center;
    box-shadow: black 2px 2px 5px;
    padding-top:2.3em;
    margin-top:1em;
    margin-left:1em;
    @media only screen and (max-width:320px) {
        margin-left:0em;
        width:225px;
        height:100px;
    }
`

const RespPad = styled.div `
@media only screen and (max-width:320px) {
        margin-left:2em;
        width:80px;
        height:1px;
    }
`
export default class Home extends Component {
    render() {
        return (
            
                <div className="row">
                <div className="col-10"></div>
                <div className="col-2"><Facebook src="/images/Objects/facebook.png" /></div>
                <div className="col-2"></div>
                <HeadLogo src="/images/Objects/logo.png" />
                <a href="#"><Woodplate source="Group 5.png"><Title>ข้อมูลโครงการ</Title></Woodplate></a>
                <div className="col-5"></div>
                <div className="col-5"></div>
               <RespPad></RespPad><a href="#"><Woodplate source="Group 6.png"><Title>ข้อมูลโครงการ</Title></Woodplate></a>
                <a href="#"><Woodplate source="Group 7.png"><Title>FAQs</Title></Woodplate></a>
                <div className="col-4"></div>
                <div className="col-2"></div>
               <div className="col-6"><a href="#"><RegPlate source="frame.png"><Header>Register</Header></RegPlate></a></div>
                </div>
            
        )
    }
}

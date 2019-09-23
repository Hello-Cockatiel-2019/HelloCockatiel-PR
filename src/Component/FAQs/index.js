import React, { Component } from 'react'
import styled from 'styled-components'
import MobileHeader from '../Core/MobileHeader';
import Woodsign from './Woodsign'
import { faqsHeader ,questionOne,answerOne,questionTwo,answerTwo,questionThree,answerThree,questionFour,answerFour } from '../Core/Messages';

const Sdiv = styled.div `
    transform: translate(27%,5%);
    @media (max-width:2600px) {
        transform: translate(26%,0%);
    }
    @media (max-width:2500px) {
        transform: translate(25%,5%);
    }
    @media (max-width:2434px) {
        transform: translate(23%,5%);
    }
    @media (max-width:1949px) {
        transform: translate(18%,3%);
    }
    @media (max-width:1679px) {
        transform: translate(19%,6%);
    }
    @media (max-width:1500px) {
        transform: translate(16%,15%);
    }
    @media (max-width:1500px) and (max-height:800px) {
        transform: translate(16%,10%);
    }
    @media (max-width:1500px) and (max-height:700px) {
        transform: translate(16%,15%);
    }
    @media (max-width:1500px) and (max-height:669px) {
        transform: translate(16%,15%);
    }
    @media (max-width:1468px) {
        transform: translate(15%,15%);
    }
    @media (max-width:1350px) {
        transform: translate(10%,12%);
    }
    @media (max-width:1320px) {
        transform: translate(13%,12%);
    }
    @media (max-width:1199px) {
        transform: translate(10%,15%);
    }
    @media (max-width:1099px) {
        transform: translate(10%,15%);
    }
    @media (max-width:1024px) {
        transform: translate(15%,3%);
    }
    @media (max-width:1024px) and (max-height:680px) {
        transform: translate(10%,15%);
    }
    @media (max-width:1014px) {
        transform: translate(15%,3%);
    }
    @media (max-width:999px){
        transform: translate(12%,18%);
    }
    @media (max-width:999px) and (max-height:671px){
        transform: translate(12%,18%);
    }
    @media (max-width:950px) {
        transform: translate(10%,10%);
    }
    @media (max-width:900px) and (max-height:680px) {
        transform: translate(20%,-15%);
    }
    @media (max-width:900px){
        transform: translate(15%,-15%);
    }
    @media (max-width:899px){
        transform: translate(15%,10%);
    }
    @media (max-width:850px) and (min-height:768px){
        transform: translate(15%,-15%)!important;
    }
    @media (max-width:834px){
        transform: translate(15%,-20%);
    }
    @media (max-width:810px) {
        transform: translate(20%,-20%);
    }
    @media (max-width:799px) {
        transform: translate(15%,-20%);
    }
    @media (max-width:768px) {
        transform: translate(15%,-15%);
    }
    @media only screen and (max-width:768px) and (orientation: portrait) and (min-height:1024px)  {
        transform: translate(15%,-13%)
    }
    @media (max-width:700px) {
        transform: translate(8%,-20%);
    }
    @media (max-width:600px) {
        transform: translate(20%,-20%);
    }
    @media (max-width:500px) {
        transform: translate(20%,-20%);
    }
    @media (max-width:490px) {
        transform: translate(13%,-19%);
    }
    @media (max-width:400px) {
        transform: translate(9%,-14%);
    }
    @media (max-width:376px) and (max-height:813px) {
        transform: translate(11%,-14%)!important;
    }
    @media (max-width:320px) and (min-height:567px) {
        transform: translate(14%,-15%);
    }
    
    @media only screen and (max-width:1367px) and (orientation: landscape) and (min-height:1024px)  {
        transform: translate(13%,5%);
    }
    @media only screen and (max-width:1024px) and (orientation: portrait) and (min-height:1366px)  {
        transform: translate(18%,9%);
    }
    @media only screen and (max-width:1024px) and (orientation: landscape) and (min-height:768px) {
        transform: translate(10%,9%);
    }
    @media only screen and (max-width:835px) and (orientation: portrait) and (min-height:1196px) {
        transform: translate(16%,-10%);
    }
`
const HeaderDiv = styled.div `
    @media only screen and (max-width:1024px) {
        transform: translate(0%,0%);
    }
    @media (max-width:990px) {
        transform: translate(0%,-75%);
    }
    @media (max-width:834px) {
        transform: translate(0%,-85%);
    }
    @media (max-width:768px) {
        transform: translate(0%,-90%);
    }
    @media (max-width:500px) {
        transform: translate(0%,-95%);
    }
    @media (max-width:400px) {
        transform: translate(0%,-99%);
    }
    @media (max-width:320px) {
        transform: translate(0%,-115%);
    }
`
const Div = styled.div `
    height: 100px;
    @media (max-width:1500px){
        height:98px;
        visibility:visible;
    }
    @media (max-width:1500px) and (max-height:690px){
        height:98px;
        visibility:${props => props.ml === 3 ? "hidden" : "visible"};
    }
    @media only screen and (max-width:1400px) {
        height:100px;
        visibility:visible;
    }
    @media only screen and (max-width:1400px) and (max-height:660px) {
        height:120px;
        visibility:${props => props.ml === 3 ? "hidden" : "visible"};
    }
    @media only screen and (max-width:1400px) and (orientation: landscape) and (min-height:1024px) {
        height:100px;
        visibility:visible;
    }
    
    @media only screen and (max-width:1350px) and (max-height:660px) {
        height: 95px;
        visibility:${props => props.ml === 3 ? "hidden" : "visible"};
    }
    @media only screen and (max-width:1300px) and (max-height:660px) {
        height: 95px;
        visibility:${props => props.ml === 3 ? "hidden" : "visible"};
    }
    @media only screen and (max-width:1024px) {
        height: 93px;
        visibility:visible;
    }
    @media only screen and (max-width:1024px) and (orientation: portrait) and (min-height:1366px)  {
        height:${props => props.ml === 3 ? 350 : 120}px;
        visibility:visible;
    }
    @media only screen and (max-width:1024px) and (orientation: landscape) and (min-height:768px) {
        height:100px;
        visibility:visible;
    }
    @media only screen and (max-width:998px) and (max-height:660px) {
        height: 100px;
        visibility:${props => props.ml === 3 ? "hidden" : "visible"};
    }
    @media only screen and (max-width:900px){
        height:${props => props.ml === 3 ? 200 : 110}px;
        visibility:visible;
    }
    @media only screen and (max-width:900px) and (max-height:660px) {
        height:${props => props.ml === 3 ? 200 : 100}px;
        visibility:${props => props.ml === 3 ? "hidden" : "visible"};
    }
    @media only screen and (max-width:835px) and (orientation: portrait) and (max-height:1197px) {
        height:${props => props.ml === 3 ? 270 : 120}px;
        visibility:visible;
    }
    @media only screen and (max-width:834px){
        height:${props => props.ml === 3 ? 200 : 125}px;
        visibility:visible;
    }
    @media only screen and (max-width:834px) and (max-height:660px) {
        height:${props => props.ml === 3 ? 350 : 110}px;
        visibility:${props => props.ml === 4 ? "hidden" : "visible"};
    }
    @media only screen and (max-width:768px) {
    height:${props => props.ml === 0 ? 130 : props => props.ml === 3 ? 250: 100}px;
    visibility:visible;
    }
    @media only screen and (max-width:768px) and (max-height:660px) {
    height:${props => props.ml === 3 ? 350 : 120}px;
    visibility:${props => props.ml === 3 ? "hidden" : "visible"};
    }
    @media only screen and (max-width:768px) and (orientation: portrait) and (min-height:1024px)  {
        height:${props => props.ml === 0 ? 130 : props => props.ml === 3 ? 250: 100}px;
    visibility:visible;
    }
    @media only screen and (max-width:700px){
        height:${props => props.ml === 0 ? 130 : props => props.ml === 3 ? 250: 100}px;
    visibility:visible;
    }
    @media only screen and (max-width:600px){
        height:${props => props.ml === 3 ? 250: 130}px;
        visibility:visible;
    }
    @media only screen and (max-width:600px) and (max-height:660px){
        height:${props => props.ml === 3 ? 250 : 125}px;
    visibility:${props => props.ml === 3 ? "hidden" : "visible"};
    }
    @media only screen and (max-width:500px){
        height:${props => props.ml === 3 ? 250: 130}px;
        visibility:visible;
    }
    @media only screen and (max-width:500px) and (min-height:660px){
        height:${props => props.ml === 3 ? 250 : 130}px;
    visibility:${props => props.ml === 3 ? "hidden" : "visible"};
    }
    @media only screen and (max-width:440px) and (orientation: portrait) and (min-height:736px)  {
    height:${props => props.ml === 3 ? 250 : 125}px;
    visibility:visible;
    }
    @media only screen and (max-width:390px) and (orientation: portrait) and (min-height:812px)  {
    height:${props => props.ml === 3 ? 250 : 125}px;
    visibility:visible;
    }
    @media only screen and (max-width:380px) and (orientation: portrait) and (min-height:600px)  {
    height:${props => props.ml === 3 ? 180 : 100}px;
    visibility:visible;
    }
    @media only screen and (max-width:330px) and (orientation: portrait) and (min-height:550px)  {
    height:${props => props.ml === 3 ? 120 : 90}px;
    visibility:visible;
    }
`
    
export default class FAQs extends Component {
    state = {
        data:[
        {
            q: `${questionOne}`,
            a: `${answerOne}`,
            class: "d-block col-lg-12 col-md-12 col-sm-12 m-0 p-0"
        },
        {
            q: `${questionTwo}`,
            a: `${answerTwo}`,
            class: "d-block col-lg-12 col-md-12 col-sm-12 m-0 p-0"
        },
        {
            q: `${questionThree}`,
            a: `${answerThree}`,
            class: "d-block col-lg-12 col-md-12 col-sm-12 m-0 p-0"
        },
        {
            q: `${questionFour}`,
            a: `${answerFour}`,
            class: "d-block col-lg-12 col-md-12 col-sm-12 m-0 p-0"
        },
        ]
}
    render() {
        return (
            <React.Fragment>
                <HeaderDiv>
            <MobileHeader text={faqsHeader} headerURl="Group-3.png" /> 
            </HeaderDiv>
               <Sdiv className="row m-0 p-0">
                   {
                        this.state.data.map((QA,i) => {
                        return (
                            <Div className={QA.class} 
                                key={i} ml={i}> 
                                <Woodsign q={QA.q} a={QA.a}/>
                            </Div>
                            )
                        })
                    }
               </Sdiv>
               </React.Fragment>
        )
    }
}

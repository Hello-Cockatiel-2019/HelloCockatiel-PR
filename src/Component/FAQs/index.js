import React, { Component } from 'react'
import styled from 'styled-components'
import MobileHeader from '../Core/MobileHeader';
import Woodsign from './Woodsign'

const Sdiv = styled.div `
    transform: translate(0%,0%);
    @media (max-width:2600px) {
        transform: translate(26%,0%);
    }
    @media (max-width:2500px) {
        transform: translate(25%,0%);
    }
    @media (max-width:2434px) {
        transform: translate(23%,0%);
    }
    @media (max-width:1949px) {
        transform: translate(18%,3%);
    }
    @media (max-width:1679px) {
        transform: translate(19%,0%);
    }
    @media (max-width:1500px) {
        transform: translate(16%,0%);
    }
    @media (max-width:1500px) and (min-height:690px) {
        transform: translate(16%,0%);
    }
    @media (max-width:1468px) {
        transform: translate(15%,0%);
    }
    @media (max-width:1350px) {
        transform: translate(18%,0%);
    }
    @media (max-width:1320px) {
        transform: translate(22%,0%);
    }
    @media (max-width:1199px) {
        transform: translate(21%,3%);
    }
    @media (max-width:1099px) {
        transform: translate(18%,2%);
    }
    @media (max-width:1024px) {
        transform: translate(18%,0%);
    }
    @media (max-width:999px) {
        transform: translate(18%,-1%);
    }
    @media (max-width:999px) and (max-height:680px){
        transform: translate(25%,-25%);
    }
    @media (max-width:950px) {
        transform: translate(18%,-2%);
    }
    @media (max-width:900px) and (max-height:680px) {
        transform: translate(20%,-15%);
    }
    @media (max-width:900px){
        transform: translate(18%,-2%);
    }
    @media (max-width:834px) {
        transform: translate(33%,-15%);
    }
    @media (max-width:810px) {
        transform: translate(28%,-15%);
    }
    @media (max-width:768px) {
        transform: translate(28%,-18%);
    }
    @media only screen and (max-width:768px) and (orientation: portrait) and (min-height:1024px)  {
        transform: translate(28%,-13%)
    }
    @media (max-width:600px) {
        transform: translate(20%,-20%);
    }
    @media (max-width:500px) {
        transform: translate(20%,-20%);
    }
    @media (max-width:490px) {
        transform: translate(10%,-19%);
    }
    @media (max-width:400px) {
        transform: translate(9%,-14%);
    }
    @media (max-width:320px) {
        transform: translate(12%,-15%);
    }
    @media only screen and (max-width:1367px) and (orientation: landscape) and (min-height:1024px)  {
        transform: translate(18%,5%);
    }
    @media only screen and (max-width:1024px) and (orientation: portrait) and (min-height:1366px)  {
        transform: translate(33%,9%);
    }
    @media only screen and (max-width:1024px) and (orientation: landscape) and (min-height:768px) {
        transform: translate(16%,3%);
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
    
    @media (max-width:1500px) {
        height:100px;
        visibility:${props => props.ml === 4 ? "hidden" : "visible"};
    }
    @media (max-width:1500px) and (min-height:700px) {
        height:100px;
        visibility:visible;
    }
    @media only screen and (max-width:1400px) and (orientation: landscape) and (min-height:1024px) {
    height:100px;
    }
    @media only screen and (max-width:1350px) {
    height: 95px;
    }
    @media only screen and (max-width:1300px) {
    height: 95px;
    }
    @media only screen and (max-width:1024px) and (orientation: portrait) and (min-height:1366px)  {
        height:${props => props.ml === 4 ? 350 : 100}px;
    }
    @media only screen and (max-width:1024px) and (orientation: landscape) and (min-height:768px) {
    height:95px;
    }
    @media only screen and (max-width:998px) {
    height: 100px;
    }
    @media only screen and (max-width:900px) {
    height:${props => props.ml === 4 ? 200 : 100}px;
    }
    @media only screen and (max-width:834px) {
    height:${props => props.ml === 4 ? 200 : 110}px;
    }
    @media only screen and (max-width:768px) {
    height:${props => props.ml === 4 ? 200 : 110}px;
    }
    @media only screen and (max-width:768px) and (orientation: portrait) and (min-height:1024px)  {
    height:${props => props.ml === 4 ? 200 : 110}px;
    }
    @media only screen and (max-width:600px){
    height:${props => props.ml === 4 ? 200 : 110}px;
    }
    @media only screen and (max-width:500px){
    height:${props => props.ml === 4 ? 200 : 100}px;
    }
    @media only screen and (max-width:440px) and (orientation: portrait) and (min-height:736px)  {
    height:${props => props.ml === 4 ? 200 : 100}px;
    }
    @media only screen and (max-width:390px) and (orientation: portrait) and (min-height:812px)  {
    height:${props => props.ml === 4 ? 200 : 125}px;
    }
    @media only screen and (max-width:380px) and (orientation: portrait) and (min-height:600px)  {
    height:${props => props.ml === 4 ? 200 : 80}px;
    }
    @media only screen and (max-width:330px) and (orientation: portrait) and (min-height:550px)  {
    height:${props => props.ml === 4 ? 200 : 65}px;
    }
`
    
export default class FAQs extends Component {
    state = {
        data:[
        {
            q: "ใครสมัครได้บ้าง สมัครแล้วได้เข้าทุกคนไหม?",
            a: "ไดโนเสาร์ค้าบ",
            class: "d-block col-lg-12 col-md-12 col-sm-12 m-0 p-0"
        },
        {
            q: "มีค่าใช้จ่ายไหม?",
            a: "ฟรี ไม่มีค่าใช้จ่าย",
            class: "d-block col-lg-12 col-md-12 col-sm-12 m-0 p-0"
        },
        {
            q: "ค่ายนี้จัดที่ไหน แล้วจะรบกวนเวลาเรียนไหม?",
            a: "นี่ก็วาดไม่เป็น ถถถถถถถถถถถถถถ",
            class: "d-block col-lg-12 col-md-12 col-sm-12 m-0 p-0"
        },
        {
            q: "ได้ชั่วโมงกิจกรรมไหม?",
            a: "WHAT",
            class: "d-block col-lg-12 col-md-12 col-sm-12 m-0 p-0"
        },
        {
            q: "มีของกินไหม?",
            a: "WHAT!?2",
            class: "d-block col-lg-12 col-md-12 col-sm-12 m-0 p-0"
        }
    ]
}
    render() {
        return (
            <React.Fragment>
                <HeaderDiv>
            <MobileHeader text="FAQs" headerURl="Group-3.png" /> 
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

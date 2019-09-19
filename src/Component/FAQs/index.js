import React, { Component } from 'react'
import styled from 'styled-components'
import MobileHeader from '../Core/MobileHeader';
import Woodsign from './Woodsign'

const Sdiv = styled.div `
    transform: translate(0%,0%);
    @media (max-width:1320px) {
        transform: translate(2%,-12%);
    }
    @media (max-width:1200px) {
        transform: translate(-20%,0%);
    }
    @media (max-width:1024px) {
        transform: translate(7%,0%);
    }
    @media (max-width:999px) {
        transform: translate(25%,-10%);
    }
    @media (max-width:999px) and (max-height:680px){
        transform: translate(25%,-25%);
    }
    @media (max-width:834px) {
        transform: translate(33%,-15%);
    }
    @media (max-width:768px) {
        transform: translate(28%,-18%);
    }
    @media only screen and (max-width:768px) and (orientation: portrait) and (min-height:1024px)  {
        transform: translate(30%,-3%)
    }
    @media (max-width:500px) {
        transform: translate(10%,-20%);
    }
    @media (max-width:400px) {
        transform: translate(9%,-10%);
    }
    @media (max-width:320px) {
        transform: translate(10%,-17%);
    }
    @media only screen and (max-width:1024px) and (orientation: portrait) and (min-height:1366px)  {
        transform: translate(14%,9%);
    }
`
const HeaderDiv = styled.div `
    @media only screen and (max-width:1024px) {
        transform: translate(0%,0%);
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
        transform: translate(0%,-145%);
    }
`
const Div = styled.div `
    height: 120px;
    @media only screen and (max-width:1400px) and (orientation: landscape) and (min-height:1024px) {
    height:155px;
    }
    @media only screen and (max-width:1350px) {
    height: 165px;
    }
    @media only screen and (max-width:1300px) {
    height: 150px;
    }
    @media only screen and (max-width:1024px) and (orientation: landscape) and (min-height:768px) {
    height:140px;
    }
    @media only screen and (max-width:1024px) and (orientation: portrait) and (min-height:1366px)  {
    height:${props => props.ml === 3 ? 250 : 145}px;
    }
    @media only screen and (max-width:998px) {
    height: 130px;
    }
    @media only screen and (max-width:834px) {
    height:${props => props.ml === 3 ? 250 : 135}px;
    }
    @media only screen and (max-width:768px) {
    height:${props => props.ml === 3 ? 250 : 140}px;
    }
    @media only screen and (max-width:768px) and (orientation: portrait) and (min-height:1024px)  {
    height:${props => props.ml === 3 ? 250 : 140}px;
    }
    @media only screen and (max-width:390px) and (orientation: portrait) and (min-height:812px)  {
    height:${props => props.ml === 3 ? 250 : 125}px;
    }
    @media only screen and (max-width:500px){
    height:${props => props.ml === 3 ? 250 : 135}px;
    }
    @media only screen and (max-width:440px) and (orientation: portrait) and (min-height:736px)  {
    height:${props => props.ml === 3 ? 250 : 135}px;
    }
    @media only screen and (max-width:380px) and (orientation: portrait) and (min-height:600px)  {
    height:${props => props.ml === 3 ? 250 : 100}px;
    }
    @media only screen and (max-width:330px) and (orientation: portrait) and (min-height:550px)  {
    height:${props => props.ml === 3 ? 250 : 115}px;
    }
`
    


export default class FAQs extends Component {
    state = {
        data:[
        {
            q: "ใครสมัครได้บ้าง สมัครแล้วได้เข้าทุกคนไหม?",
            a: "ไดโนเสาร์ค้าบ",
            class: "d-block col-lg-6 col-md-12 col-sm-12 m-0 p-0"
        },
        {
            q: "มีค่าใช้จ่ายไหม?",
            a: "ฟรี ไม่มีค่าใช้จ่าย",
            class: "d-block col-lg-6 col-md-12 col-sm-12 m-0 p-0"
        },
        {
            q: "ค่ายนี้จัดที่ไหน แล้วจะรบกวนเวลาเรียนไหม?",
            a: "นี่ก็วาดไม่เป็น ถถถถถถถถถถถถถถ",
            class: "d-block col-lg-6 col-md-12 col-sm-12 m-0 p-0"
        },
        {
            q: "ได้ชั่วโมงกิจกรรมไหม?",
            a: "WHAT",
            class: "d-block col-lg-6 col-md-12 col-sm-12 m-0 p-0"
        },
        {
            q: "มีสาขาอะไรให้ลงบ้าง แล้วแต่ละสาขาทำหน้าที่อ่ะไร?",
            a: "WHAT!?",
            class: "d-none d-lg-block col-lg-6 m-0 p-0"
        },
        {
            q: "มีของกินไหมครับ?",
            a: "WHAT!?2",
            class: "d-none d-lg-block col-lg-6 m-0 p-0"
        }
    ]
}
    render() {
        return (
            <React.Fragment>
                <HeaderDiv>
            <MobileHeader text="FAQs" headerURl="plate-m3.png" /> 
            </HeaderDiv>
               <Sdiv className="row m-0 p-0">
                   {
                        this.state.data.map((QA,i) => {
                        return (
                            <Div className={`${QA.class}`} 
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

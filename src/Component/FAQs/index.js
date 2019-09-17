import React, { Component } from 'react'
import styled from 'styled-components'
import MobileHeader from '../Core/MobileHeader';
import Woodsign from './Woodsign'

const Sdiv = styled.div `
    transform: translate(0%,8%);
    @media (max-width:1024px) {
        transform: translate(7%,0%);

    }
    @media (max-width:768px) {
        transform: translate(30%,-3%);

    }
    @media (max-width:500px) {
        transform: translate(7%,-10%);
    }
    @media (max-width:400px) {
        transform: translate(9%,-18%);
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
    @media (max-width:768px) {
        transform: translate(0%,-25%);
    }
    @media (max-width:500px) {
        transform: translate(0%,-50%);
    }
    @media (max-width:400px) {
        transform: translate(0%,-85%);
    }
    @media (max-width:320px) {
        transform: translate(0%,-75%);
    }
`
const Div = styled.div `
    @media only screen and (max-width:1400px) and (orientation: landscape) and (min-height:1024px) {
    height:150px;
    }
    @media only screen and (max-width:1024px) and (orientation: landscape) and (min-height:768px) {
    height:140px;
    }
    @media only screen and (max-width:1024px) and (orientation: portrait) and (min-height:1366px)  {
    height:${props => props.ml === 3 ? 250 : 125}px;
    }
    @media only screen and (max-width:768px) and (orientation: portrait) and (min-height:1024px)  {
    height:${props => props.ml === 3 ? 250 : 125}px;
    }
    @media only screen and (max-width:390px) and (orientation: portrait) and (min-height:812px)  {
    height:${props => props.ml === 3 ? 250 : 125}px;
    }
    @media only screen and (max-width:440px) and (orientation: portrait) and (min-height:736px)  {
    height:${props => props.ml === 3 ? 250 : 125}px;
    }
    @media only screen and (max-width:380px) and (orientation: portrait) and (min-height:667px)  {
    height:${props => props.ml === 3 ? 250 : 120}px;
    }
    @media only screen and (max-width:320px) and (orientation: portrait) and (min-height:568px)  {
    height:${props => props.ml === 3 ? 250 : 90}px;
    }
`
    


export default class FAQs extends Component {
    state = {
        data:[
        {
            q: "ไข่กับไก่อะไรเกิดก่อนกันอ่ะคับ",
            a: "ไดโนเสาร์ค้าบ",
            class: "d-block col-lg-6 col-md-12 col-sm-12 m-0 p-0"
        },
        {
            q: "ไข่กับไก้อะไรเกิดก่อนกันอ่ะคับ",
            a: "แมวค้าบ",
            class: "d-block col-lg-6 col-md-12 col-sm-12 m-0 p-0"
        },
        {
            q: "วาดรูปไม่เป็นเข้าได้ม้าย",
            a: "นี่ก็วาดไม่เป็น ถถถถถถถถถถถถถถ",
            class: "d-block col-lg-6 col-md-12 col-sm-12 m-0 p-0"
        },
        {
            q: "what",
            a: "WHAT",
            class: "d-block col-lg-6 col-md-12 col-sm-12 m-0 p-0"
        },
        {
            q: "what",
            a: "WHAT!?",
            class: "d-none d-lg-block col-lg-6 m-0 p-0"
        },
        {
            q: "what",
            a: "WHAT!?2",
            class: "d-none d-lg-block col-lg-6 m-0 p-0"
        }
    ]
}
    render() {
        return (
            <React.Fragment>
                <HeaderDiv>
            <MobileHeader text="FAQs" HeaderURl="plate-m3.png" /> 
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

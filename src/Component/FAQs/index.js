import React, { Component } from 'react'
import styled from 'styled-components'
import MobileHeader from '../Core/MobileHeader';
import Woodsign from './Woodsign'

const Sdiv = styled.div `
    transform: translate(0%,8%);
    @media only screen and (max-width:1024px) {
        transform: translate(7%,0%);
    }
    @media (max-width:768px) {
        transform: translate(27%,25%);
    }
    @media (max-width:500px) {
        transform: translate(9%,30%);
    }
    @media (max-width:400px) {
        transform: translate(6%,33%);
    }
    @media (max-width:320px) {
        transform: translate(5%,33.5%);
    }
`
export default class FAQs extends Component {
    state = {
        data:[
        {
            q: "ไข่กับไก่อะไรเกิดก่อนกันอ่ะคับ",
            a: "ไดโนเสาร์ค้าบ",
            class: "d-block col-lg-5 col-md-12 col-sm-12"
        },
        {
            q: "ไข่กับไก้อะไรเกิดก่อนกันอ่ะคับ",
            a: "แมวค้าบ",
            class: "d-block col-lg-5 col-md-12 col-sm-12"
        },
        {
            q: "วาดรูปไม่เป็นเข้าได้ม้าย",
            a: "นี่ก็วาดไม่เป็น ถถถถถถถถถถถถถถ",
            class: "d-block col-lg-5 col-md-12 col-sm-12"
        },
        {
            q: "what",
            a: "WHAT",
            class: "d-block col-lg-5 col-md-12 col-sm-12"
        },
        {
            q: "what",
            a: "WHAT!?",
            class: "d-none d-lg-block col-5"
        },
        {
            q: "what",
            a: "WHAT!?2",
            class: "d-none d-lg-block col-5"
        }
    ]
}
    render() {
        return (
            <React.Fragment>
            {/* <MobileHeader text="FAQs" HeaderURl="plate-m3.png" />  */}
               <Sdiv className="row m-0 p-0">
                   {
                        this.state.data.map((QA,i) => {
                        return (
                            <div className={QA.class} key={i}> 
                                <Woodsign q={QA.q} a={QA.a} />
                            </div>
                            )
                        })
                    }
               </Sdiv>
               </React.Fragment>
        )
    }
}

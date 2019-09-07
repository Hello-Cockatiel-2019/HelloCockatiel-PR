import React, { Component } from 'react'
import Woodsign from './Woodsign'

export default class FAQs extends Component {
    render() {
        const QAdata = [
            {
                id: '0',
                q: "ไข่กับไก่อะไรเกิดก่อนกันอ่ะคับ",
                a: "ไดโนเสาร์ค้าบ"
            },
            {
                id: '1',
                q: "ไข่กับไก้อะไรเกิดก่อนกันอ่ะคับ",
                a: "แมวค้าบ"
            },
            {
                id: '2',
                q: "วาดรูปไม่เป็นเข้าได้ม้าย",
                a: "นี่ก็วาดไม่เป็น ถถถถถถถถถถถถถถถถถถถถถถถถถถ"
            }
        ];
        

        const QAList = QAdata.map((QA) => {
            return (
                <Woodsign key={QA.id} q={QA.q} a={QA.a} />
            )
        })

        return (
            <div className="d-flex flex-column">
                {QAList}
            </div>
            
        )
    }
}

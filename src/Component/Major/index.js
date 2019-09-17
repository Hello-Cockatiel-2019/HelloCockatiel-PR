import React, { Component } from 'react'
import styled from 'styled-components'
import MobileHeader from '../Core/MobileHeader';
import Field from './Field'

const AllContent = styled.div `
    transform: translate(7%,0%);
    @media only screen and (min-width: 1024px) and (max-height: 1467px) and (orientation: portrait)  {
    transform: translate(24%,0%);
    grid-template-columns: none;
    display:grid;
    }
    @media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: portrait)  {
    transform: translate(24%,0%);
    grid-template-columns: none;
    display:grid;
    }
    @media only screen and (min-width: 1024px) and (max-height: 768px) and (orientation: landscape)  {
    transform: translate(10%,20%);
    }
    @media only screen and (min-width: 834px) and (max-height: 1196px) and (orientation: portrait)  {
    transform: translate(-21%,-15%);
    grid-template-columns: none;
    display:grid;
    }
    @media (max-width:770px) and (orientation: portrait){
      transform: translate(-25%,-15%);
    }
    @media (max-width:420px){
      transform: translate(-7%,-20%);
    }
    @media (max-width:380px){
      transform: translate(-7%,-20%);
    }
    @media (max-width:325px){
      transform: translate(-6%,-25%);
    }
`

const Header = styled.div `
    @media only screen and (min-width: 1024px) and (max-height: 1467px) and (orientation: portrait)  {
    transform: translate(2%,-30%);
    }
    @media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: portrait)  {
    transform: translate(2%,-30%);
    }
    @media only screen and (min-width: 834px) and (max-height: 1196px) and (orientation: portrait)  {
    transform: translate(2%,-80%);
    }
    @media (max-width:770px) and (orientation: portrait){
      transform: translate(0%,-60%);
    }
    @media (max-width:420px){
      transform: translate(0%,-60%);
    }
    @media (max-width:380px){
      transform: translate(0%,-60%);
    }
    @media (max-width:325px){
      transform: translate(0%,-60%);
    }
`

const SpaceBySpace = styled.div `
    padding-top:2em;
    padding-left:2em;
    @media only screen and (min-width: 1024px) and (max-height: 1467px) and (orientation: portrait){
      padding-top:2em;
    }
    @media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: portrait){
      padding-top:2em;
    }
    @media only screen and (min-width: 1024px) and (max-height: 768px) and (orientation: landscape){
      padding-top:1em;
    }
    @media only screen and (min-width: 834px) and (max-height: 1196px) and (orientation: portrait){
      padding-top:2em;
    }
    @media (max-width:770px) and (orientation: portrait){
      padding-top:2em;
    }
    @media (max-width:420px){
      padding-top:0.5em;
    }
    
    @media (max-width:380px){
      padding-top:0.5em;
    }
    @media (max-width:325px){
      padding-top:0.5em;
    }
`
export default class index extends Component {
  state = {
    data:[
      {
          topic: "Front-End",
          content: "ในสาขานี้จะเริ่มสอนตั้งแต่พื้นฐาน HTML CSS และ JavaScript และยังลงลึกไปถึงการเขียนโค้ดที่เป็นระเบียบและง่ายต่อการใช้งาน นอกจากนี้ยังสอนการนำ Git มาใช้งานเพื่อ ช่วยให้การสร้างเว็บไซต์ของเราสะดวกยิ่งขึ้น",
          imgbird : "c1.png",
          imgframe : "frame.png",
          class : "justify-content-end",
          colorBox: "rgb(216, 195, 85,0.9)"
      },
      {
        topic: "Design",
        content: "ในสาขานี้จะไปลงลึกเกี่ยวกับ วิธีการและ ขั้นตอนในการ Design หน้าเว็บไซต์ให้ เหมาะสมและน่าใช้งาน โดยจะเริ่มปูพื้นฐาน ตั้งแต่ องค์ประกอบของศิลป์ ลิขสิทธิ์ การ Drawing UX/UI ไปจนถึงการทำ Prototype ของงาน",
        imgbird : "c2.png",
        imgframe : "frame.png",
        class : "justify-content-end",
          colorBox: "rgb(219, 155, 81,0.9)"
      },
      {
        topic: "Infra",
        content: "ในสาขานี้จะสอนตั้งแต่หลักการการ วางโครงสร้างพื้นฐานที่เป็นส่วนสำคัญของการสร้างและพัฒนาเว็บไซต์ของเรา ให้สามารถเข้าถึงได้จากทั่วโลก นอกจากนี้ยังมีการสอนการใช้เครื่องมือ และเรียนรู้การ Deploy เว็บไซต์ด้วยนะ",
        imgbird : "c3.png",
        imgframe : "frame.png",
        class : "justify-content-end",
          colorBox: "rgb(172, 168, 156,0.9)"
      },
      {
        topic: "Game",
        content: "ในสาขานี้จะพาไปทำความรู้จักกับ Game ให้มากขึ้น และได้ลองสร้าง Game สำหรับ เล่นบนหน้าเว็บด้วย โดยตั้งแต่พื้นฐาน การใช้งาน Git การใช้ Command Line เบื้องต้น การวาง Object ใส่ Animation และได้เรียนรู้องค์ประกอบอื่น ๆ อีก มากมาย",
        imgbird : "c4.png",
        imgframe : "frame.png",
        class : "justify-content-end",
          colorBox: "rgb(179, 102, 11,0.9)"
      }
    ]
  }
  render() {
    return (
      <React.Fragment>
        <Header>
          <MobileHeader text="สาขาที่รับสมัคร" HeaderURl="plate-m2.png" />
        </Header>
           <AllContent className="row">
               {
                    this.state.data.map((TC,i) => {
                    return (
                        <SpaceBySpace className={`d-flex col-lg-6 col-md-12 col-12 ${TC.class}`} mrl={i} key={i} > 
                            <Field 
                              topic={TC.topic} 
                              content={TC.content} 
                              colorBox={TC.colorBox} 
                              imgbird={TC.imgbird} 
                              imgframe={TC.imgframe}
                              keytopic={i}
                              />
                        </SpaceBySpace>
                        )
                    })
                }
           </AllContent>
      </React.Fragment>

    )
}
}

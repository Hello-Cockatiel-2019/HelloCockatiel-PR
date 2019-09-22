import React, {Component} from 'react'
import styled from 'styled-components'

import {Paragraph} from '../Core/Text'

import MobileHeader from '../Core/MobileHeader';
import Footer from './Footer'

const Plate = styled.div`
    margin:0em;
    background-size:100%; 
    background-repeat: no-repeat;
    width: 100vh;
    height: 55vh;
    background-image: url(/images/Objects/big1.png);
    margin-right:4em;
     @media(max-width:1420px) {
      width: 83vh;
    height: 46vh;
    margin-right:1em;
     }
     @media only screen and (max-width: 1468px) and (min-height:925px) {
      width: 80vh;
    height: 44vh;
    }
     @media only screen and (max-width: 1468px) and (min-height:1024px) {
      width: 79vh;
    height: 44vh;
    margin-left: 4em;
    }
    @media only screen and (max-width: 1366x) and (min-height:1024px) {
      width: 75vh;
    height: 41vh;
    margin-left: 2em;
    }
    @media(max-width:1196px) {
      width: 75vh;
    height: 41vh;
    margin-right:0em;
    margin-left: 3em;
    }
    @media only screen and (max-width: 1025px) and (orientation:landscape) {
      width: 70vh;
    height: 39vh;
    margin-left: 3em;
    }
    @media only screen and (max-width: 960px) and (orientation:landscape) {
      width: 66vh;
    height: 36vh;
    margin-left: 3em;
    }
  
    @media only screen and (max-width: 1024px) and (orientation:portrait) {
      background-image: url(/images/Objects/big2.png);
      padding: 0;
    width: 44vh;
    height: 47vh;
    margin:0;
    justify-self: center;
    }
    @media only screen and (max-width: 414px) and (orientation:portrait) {
      padding:0;
      width: 315px;
    height: 381px;
    }
    @media only screen and (max-width: 375px) and (orientation:portrait) {
      width: 315px;
    height: 390px;
    }
    @media only screen and (max-width: 320px) and (orientation:portrait) {
      width: 250px;
    height: 279px;
    }      
`

const Content = styled(Paragraph)`
  overflow:auto;
  line-height: 27px;
  letter-spacing: 0.05em;
  justify-self: center;
  margin: 3em;

`
const Layout = styled.div`
    display:grid;
    @media (max-width: 2560px){
      grid-template-columns: 3fr 1fr;
    }
    @media (max-width: 1537px){
    }
    @media (max-width: 1468px){
    }
    @media (max-width: 1196px){
    }
    @media(max-width:1025px) {
    } 
    @media(max-width:960px) {
    } 
     @media only screen and (max-width: 1024px) and (orientation:portrait)  {
      grid-template-columns: none;
      margin-top: -9em;
    }
    @media only screen and (max-width: 414px) and (orientation:portrait)  {
    }
    @media only screen and (max-width: 320px) and (orientation:portrait) {
    }    
`
const HeaderDiv = styled.div `
  display:none;
  @media only screen and (max-width: 1196px) and (orientation:portrait)  {
      display:block;
    }
`


export default class About extends Component {
    render() {
        return (
          <div>
            <Layout>
            <HeaderDiv>
              <MobileHeader text="ข้อมูลโครงการ" headerURl="Group-2.png" />
            </HeaderDiv>
              <Plate>
                <Content >
                  Hello World Cockatiel เป็นโครงการที่จัดขึ้นเพื่อแบ่งปันความรู้ทางด้านการสร้างเว็บไซต์ 
                  โดยจะมีการจัดการเรียนการสอนให้กับนักศึกษาที่เข้าร่วมโครงการ โดยแบ่งเป็น 4 สาขา ได้แก่ Front-End, Infra, Design, และ Game
                   นอกจากนี้ ในช่วงท้ายของโครงการ นักศึกษาที่เข้าร่วมโครงการในแต่ละสาขา จะได้มาร่วมกันทำโปรเจคสร้างเว็บไซต์ที่เกิดขึ้นจากความสามารถของ
                   ตัวนักศึกษาเองHello World Cockatiel มาในธีมของการอนุรักษ์ธรรมชาติ โดยมี mascot เป็น Cockatiel นกแก้วที่น่ารัก เลี้ยงง่าย 
                   และอยากรู้อยากเห็นที่เปรียบเสมือนนักศึกษาที่ ร่วมโครงการที่พร้อมจะรับ ความรู้ใหม่ ๆ ตลอดเวลา
                </Content>
              </Plate>
              <div>
                <Footer />
              </div>
            </Layout>
          </div>

  
           )
    }
}
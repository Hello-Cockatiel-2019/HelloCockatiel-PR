import React, {Component} from 'react'
import styled from 'styled-components'

import {Paragraph,Subtitle} from '../Core/Text'

import MobileHeader from '../Core/MobileHeader';
import Where from './Where'

const Plate = styled.div`
    margin:0em;
    background-size:100%; 
    background-repeat: no-repeat;
    width: 100vh;
    height: 100vh;
    background-image: url(/images/Objects/big-platebird.png);
    @media(max-width:2560px) {
    width:620px;
    height: 387px;
    padding-top: 2.5em;
    margin-top: 20vh;
    } 
    @media(max-width:1537px) {
    width:620px;
    height: 387px;
    padding-top: 2.5em;
    margin-top: 19vh;
    } 
    @media(max-width:1467px) {
    width:620px;
    height: 387px;
    padding-top: 2.5em;
    margin-top: 14vh;
    } 
    @media(max-width:1196px) {
    width:600px;
    height: 374px;
    padding-top: 2.5em;
    margin-top: 5vh;
    }
    @media only screen and (max-width: 1025px) and (orientation:landscape) {
      width:560px;
      height: 350px;
    }
    @media only screen and (max-width: 1024px) and (orientation:portrait) {
      background-image: url(/images/Objects/small-plate.png);
      width:600px;
      height: 668px;
      padding-top: 1em;
    }
    @media only screen and (max-width: 834px) and (orientation:portrait) {
      width: 530px;
    height: 590px;
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
const Title = styled(Subtitle)`
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
    @media only screen and (min-width: 1024px) and (orientation: portrait) {
      font-size:38px;
    }
    @media only screen and (max-width: 320px) and (orientation:portrait) {
    font-size:19px;
    margin: 3px;
  }
`
const Content = styled(Paragraph)`
  overflow:auto;
  line-height: 27px;
  letter-spacing: 0.05em;
  justify-self: center;
  margin: 2em;
  margin-top: 1em;
  @media only screen and (max-width: 1024px) and (orientation: landscape) {
    height: 11em;
    } 
    @media only screen and (min-width: 1024px) and (orientation: portrait) {
      font-size:24px;
    } 
  @media only screen and (max-width: 1024px) and (orientation:portrait) {
    margin-top: 2em;
    height: 13em;
  }
  @media only screen and (max-width: 414px) and (orientation:portrait) {
    margin-top: 1em;
  }
  @media only screen and (max-width: 320px) and (orientation:portrait) {
    margin: 1em;
    margin-top: 9px;
    height: 14em;
    font-size:15px;
  }      
`
const Layout = styled.div`
    display:grid;
    @media (max-width: 2560px){
      grid-template-columns: 2fr 1fr;
      margin-top: -4em;
      transform: translateX(3%);
    }
    @media (max-width: 1537px){
      grid-template-columns: 2fr 1fr;
      margin-top: -5em;
      transform: translateX(0%);
    }
    @media (max-width: 1468px){
      margin-top: 3em;
      transform: translateX(2%);
    }
    @media (max-width: 1196px){
      margin-top: -6em;
      transform: translateX(-17%);
    }
    @media(max-width:1025px) {
      margin-top: -5em;
      transform: translateX(7%);
    } 
     @media only screen and (max-width: 1024px) and (orientation:portrait)  {
      grid-template-columns: none;
      margin:0;
      margin-top: -12em;
      transform: translateX(0);
    }
    @media only screen and (max-width: 414px) and (orientation:portrait)  {
      margin-top: -8em;
    }
    @media only screen and (max-width: 320px) and (orientation:portrait) {
      margin-top: -6em;
    }    
`
const LayoutWhere = styled.div`
     @media(max-width:2560px) {
      margin-top: 42vh;
    } 
    @media(max-width:1537px) {
      margin-top: 50vh;
    } 
    @media(max-width:1196px) {
      margin-top: 34vh;
    }
    @media only screen and (max-width: 1025px) and (orientation:landscape) {
      width:560px;
      height: 350px;
      margin-left: -49vh;
    }
    @media only screen and (max-width: 1024px) and (orientation:portrait) {
      width:600px;
      height: 668px;
      padding-top: 1em;
      margin-top: 0vh;
    }
    @media only screen and (max-width: 834px) and (orientation:portrait) {
      width: 530px;
    height: 590px;
    }
    @media only screen and (max-width: 768px) and (orientation:portrait) {
      margin-top: -7vh;
    }
    @media only screen and (max-width: 414px) and (orientation:portrait) {
      padding:0;
      width: 315px;
    height: 381px;
    margin-top: -7vh;
    }
    @media only screen and (max-width: 375px) and (orientation:portrait) {
      width: 315px;
    height: 390px;
    margin-top: -7vh;
    }
    @media only screen and (max-width: 320px) and (orientation:portrait) {
      width: 250px;
    height: 279px;
    margin-top: -4vh;
    }        
`
const HeaderDiv = styled.div `
  display:none;
  @media only screen and (max-width: 1196px) and (orientation:portrait)  {
      display:block;
    }
`
const Div = styled.div`
    width: 700px;
@media only screen and (max-width: 1196px) and (orientation:portrait)  {
  justify-content: center;
    }
`

export default class About extends Component {
    render() {
        return (
          <Div className="row m-0">
            <Layout>
            <HeaderDiv>
              <MobileHeader text="ข้อมูลโครงการ" headerURl="plate-m2.png" />
            </HeaderDiv>
              <Plate>
                <Title className="text-center" >
                  About us
                </Title>
                <Content >
                  Hello World Cockatiel เป็นโครงการที่จัดขึ้นเพื่อแบ่งปันความรู้ทางด้านการสร้างเว็บไซต์ 
                  โดยจะมีการจัดการเรียนการสอนให้กับนักศึกษาที่เข้าร่วมโครงการ โดยแบ่งเป็น 4 สาขา ได้แก่ Front-End, Infra, Design, และ Game
                   นอกจากนี้ ในช่วงท้ายของโครงการ นักศึกษาที่เข้าร่วมโครงการในแต่ละสาขา จะได้มาร่วมกันทำโปรเจคสร้างเว็บไซต์ที่เกิดขึ้นจากความสามารถของ
                   ตัวนักศึกษาเองHello World Cockatiel มาในธีมของการอนุรักษ์ธรรมชาติ โดยมี mascot เป็น Cockatiel นกแก้วที่น่ารัก เลี้ยงง่าย 
                   และอยากรู้อยากเห็นที่เปรียบเสมือนนักศึกษาที่ ร่วมโครงการที่พร้อมจะรับ ความรู้ใหม่ ๆ ตลอดเวลา
                </Content>
              </Plate>
              <LayoutWhere>
                <Where />
              </LayoutWhere>
            </Layout>
          </Div>

  
           )
    }
}
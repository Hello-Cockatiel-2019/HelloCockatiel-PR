import React, {Component} from 'react'
import styled from 'styled-components'

import {Paragraph,Subtitle} from '../Core/Text'

import MobileHeader from '../Core/MobileHeader';
import Where from './Where'

const Plate = styled.div`
    margin-left:0em;
    background-size:100%; 
    background-repeat: no-repeat;
    size:100%;
    @media(min-width:320px) {
        background-image: url(/images/Objects/small-plate.png);
        width:260px;
        height: 290px;
        transform: translate(-15%,-25%);
    }
    @media(min-width:375px) {
      background-image: url(/images/Objects/small-plate.png);
      width:271px;
      height: 302px;
      margin-left:1.5em;
      transform: translate(-20%,-10%);
      }
    @media (min-width:410px) {
      background-image: url(/images/Objects/small-plate.png);
      width:309px;
      height: 344px;
      margin-left:1.8em;
    }
    @media(min-width:576px) {
      background-image: url(/images/Objects/small-plate.png);
      width:434px;
      height:484 px;
    }
    @media only screen and (min-width: 768px) and (max-height: 1024px) and (orientation: portrait)  {
      background-image: url(/images/Objects/small-plate.png);
      width:479px;
      height: 545px;
      transform: translate(-50%,10%);
    }
    @media only screen and (min-width: 768px) and (max-height: 1024px) and (orientation:landscape)  {
      background-image: url(/images/Objects/big-platebird.png);
      width:383px;
      height: 240px;
    }
    @media only screen and (min-width: 834px) and (max-height: 1196px) and (orientation:portrait)  {
      background-image: url(/images/Objects/small-plate.png);
      width:523px;
      height: 583px;
      transform: translate(3%,0);
    }
    @media (min-width:960px) {
      background-image: url(/images/Objects/big-platebird.png);
      width:478px;
      height: 300px;
    }
    @media(min-width:1024px) {
      background-image: url(/images/Objects/big-platebird.png);
      width:510px;
      height: 320px;
      transform: translate(-15%,-10%);
    }
    @media only screen and (min-width: 1024px) and (max-height: 1467px) and (orientation:portrait)  {
      background-image: url(/images/Objects/small-plate.png);
      width:523px;
      height: 583px;
      transform: translate(10%,0);
    }
    @media(min-width:1196px) and (orientation:landscape) {
      background-image: url(/images/Objects/big-platebird.png);
      width:510px;
      height: 320px;
      margin-left:14em;
    }
         
`
const Title = styled(Subtitle)`
      @media(min-width:320px) {
        padding-top:.25em;
      }
      @media (min-width:410px) {
        padding-top:.4em;
      }
      @media only screen and (min-width: 768px) and (max-height: 1024px) and (orientation: portrait)  {
        padding-top:.5em;
        font-size:30px;
        
      }
      @media only screen and (min-width: 768px) and (max-height: 1024px) and (orientation:landscape)  {
        padding-top:1.5em;
      }
      @media only screen and (min-width: 768px) and (max-height: 626px) and (orientation: landscape)  {
        padding-top:.8em;
        font-size:25px;
      }
      @media only screen and (min-width: 834px) and (max-height: 1196px) and (orientation:portrait)  {
        padding-top:.3em;
        font-size:30px;
      }
      @media (min-width:960px) {
        margin-left:1px;
        padding-top:1.1em;
      }
      @media(min-width:1024px) {
        margin-left:3px;
        padding-top:1.5em;
        font-size:23px;
      }
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
`
const Content = styled(Paragraph)`
  overflow:auto;
  line-height: 27px;
  letter-spacing: 0.05em;
  justify-self: center;
  @media(min-width:320px) {
    font-size:15px;
    margin-left:30px;
    margin-right:30px;
    margin-top:5px;
    height:15em;
  }
  @media(min-width:320px) {
    margin-top:10px;
  }
  @media (min-width:410px) {
    font-size:18px;
    margin-left:35px;
    margin-right:35px;
    margin-top:10px;
    height:15em;
  }
  @media (min-width:768px) {
    font-size:20px;
    margin-left:65px;
    margin-right:65px;
    height:20em;
    margin-top:28px;
  }
   @media only screen and (min-width: 768px) and (max-height: 626px) and (orientation:landscape)  {
    font-size: 20px;
    margin-left: 36px;
    margin-right: 36px;
    height: 8em;
    margin-top: 6px;
    overflow: auto;
   }
  @media (min-width:960px) {
    margin-left:44px;
    margin-right:44px;
    height:10em;
    margin-top:20px;
  }
  @media(min-width:1024px) {
    margin-left:50px;
    margin-right:50px;
    margin-top:24px;
  }
  @media(min-height:1366px) {
    height:auto;
  }
      
`
const Layout = styled.div`
    display:grid;
    grid-template-columns: none;

    @media (min-width:960px) {
      grid-template-columns: 3fr 1fr;
    }
    @media only screen and (min-width: 1024px) and (max-height: 1467px) and (orientation:portrait)  {
      grid-template-columns: none;
    }
    @media only screen and (max-width: 1024px){
      transform: translate(15%,0%);
    }
`
const LayoutWhere = styled.div`
  align-self:end;
  @media screen and (max-width:1024px) {
      transform: translate(-35%,0%);
    }
`
const HeaderDiv = styled.div `
   @media only screen and (min-width: 768px) and (max-height: 1024px) and (orientation: portrait)  {
      transform: translate(10%, 10);
    }
    @media only screen and (min-width: 834px) and (max-height: 1112px) and (orientation: portrait)  {
      transform: translate(0%,0%);
    }
    @media only screen and (min-width: 834px) and (max-height: 1196px) and (orientation: portrait) {
      transform: translate(0%,0%);
    }
    @media only screen and (min-width: 1024px) and (max-height: 1370px) and (orientation: portrait)  {
      transform: translate(0%,0%);
    }
    @media only screen and (min-width: 1024px) and (max-height: 1468px) and (orientation: portrait) {
      transform: translate(0%,0%);
    } 
    @media only screen and (max-width:1024px) {
      transform: translate(175%,-50%);
    }
    @media (max-width:768px) {
      transform: translate(110%,-15%);
    }
    @media (max-width:500px) and (orientation: portrait) {
        transform: translate(47%,-50%)
    }
    @media (max-width:400px) {
        transform: translate(45%,-38%);
    }
    @media (max-width:320px) {
      transform: translate(50%,-120%);
    }
`
const Div = styled.div`
    @media screen and (max-width:1024px) {
      transform: translate(8%,0%);
    }
`

export default class About extends Component {
    render() {
        return (
          <Div className="row m-0">
            <HeaderDiv>
              <MobileHeader text="ข้อมูลโครงการ" HeaderURl="plate-m2.png" />
            </HeaderDiv>
            <Layout className="m-0">

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
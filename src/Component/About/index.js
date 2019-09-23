import React, { Component } from 'react'
import styled from 'styled-components'

import { Paragraph } from '../Core/Text'
import { contentAbout } from '../Core/Messages'
import MobileHeader from '../Core/MobileHeader';
import Footer from './Footer'

const Plate = styled.div`
    margin:0em;
    background-size:100%; 
    background-repeat: no-repeat;
    background-image: url(/images/Objects/big1.png);
    padding: 4em;
    @media(max-width:2560px) {
      width: 33vw;
    height: 46vh;
    margin-right: 4em;
    margin-top: 1em;
     }
     @media(max-width:1920px) {
      padding: 3em;
      width: 44vw;
    height: 51vh;
     }
     @media(max-width:1440px) {
      width: 88vh;
    height: 48vh;
    margin-right:2em;
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
    @media only screen and (max-width: 1366px) and (min-height:1024px) {
         width: 74vh;
    height: 41vh;
    margin-left: 2em;
    }
    @media(max-width:1196px) {
      width: 75vh;
    height: 41vh;
    margin-right:0em;
    margin-left: 3em;
    padding: 2em;
    
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
    @media only screen and (max-width: 834px) and (orientation:landscape) {
      width: 73vh;
    height: 51vh;
    margin-left: 3em;
    }
    @media only screen and (max-width: 1197px) and (max-height:700px){
      margin-left: 5em;
    }
    @media only screen and (max-width: 1024px) and (max-height:700px){
      margin-left: 7em;
    }
    @media only screen and (max-width: 1024px) and (orientation:portrait) {
      background-image: url(/images/Objects/big2.png);
    width: 44vh;
    height: 47vh;
    margin:0;
    justify-self: center;
    padding: 3em;
    }
    @media only screen and (max-width: 750px) and (orientation:portrait) {
      padding: 2em;
    }
    @media only screen and (max-width: 414px) and (orientation:portrait) {
    width: 315px;
    height: 335px;
    }
    @media only screen and (max-width: 375px) and (orientation:portrait) {
      width: 315px;
    height: 390px;
    }
    @media only screen and (max-width: 320px) and (orientation:portrait) {
      width: 250px;
    height: 279px;
    padding: 1.5em;
    }      
`

const Content = styled(Paragraph)`
  overflow:auto;
  letter-spacing: 0.05em;
  justify-self: center;
  color:#3D3030;
  @media only screen and (max-width: 1025px) and (orientation:landscape) {
    height: 12em;
    }
    @media only screen and (max-width: 1196px) and (orientation:landscape) {
    height: 12em;
    }
    @media only screen and (max-width: 1196px) and (max-height:700px){
    height: 11em;
    }
    @media only screen and (max-width: 960px) and (orientation:landscape) {
    height: 10em;
    }
    @media only screen and (min-height: 1024px) and (orientation:portrait) {
      height: auto
    }
    @media only screen and (max-width: 960px) and (orientation:portrait) {
      height: 15em;
    }
    @media only screen and (min-height: 700px) and (orientation:portrait) {
      height: 16em;
    }
  @media only screen and (max-width: 414px) and (orientation:portrait) {
    font-size:16px;
    height: 17em;
    }
    @media only screen and (max-width: 320px) and (orientation:portrait) {
      height: 14em;
    }
    
  
`
const Layout = styled.div`
    display:grid;
    @media (max-width: 2755px){
      grid-template-columns: 3fr 1fr;
      margin-top: 2.5em;
    }
    @media only screen and (max-width: 1467px) and (orientation:landscape)  {
      margin-top: 4em;
    }
     @media only screen and (max-width: 1024px) and (orientation:portrait)  {
      grid-template-columns: none;
      margin-top: -8em;
    }
    @media only screen and (max-width: 320px) and (orientation:portrait)  {
      margin-top: -7em;
    }
`
const HeaderDiv = styled.div`
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
              {contentAbout}
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
import React, {Component} from 'react'
import styled from 'styled-components'

import {Paragraph} from '../Core/Text'
import { contentAbout } from '../Core/Messages'
import MobileHeader from '../Core/MobileHeader';
import Footer from './Footer'

const Plate = styled.div`
    margin:0em;
    background-size:100%; 
    background-repeat: no-repeat;
    width: 91vh;
    height: 50vh;
    background-image: url(/images/Objects/big1.png);
    margin-right: 4em;
    margin-top: 1em;
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
  margin: 2em;
    height: 11em;
  
  @media (max-width: 1196px){
    margin: 1.5em;
    height: 11em;
    }
    @media (max-width: 1024px){
    height: 9em;
    }
    @media only screen and (max-width: 1196px) and (min-height:834px) {
      height: 14em;
    }
  @media only screen and (max-width: 1024px) and (orientation:portrait)  {
      margin: 1.5em;
      height: 21em; 
    }
    @media only screen and (max-width: 626px) and (orientation:portrait)  {
      margin: 1em;
      height: 13em; 
    }
    @media only screen and (max-width: 414px) and (orientation:portrait)  {
      margin: 1.5em;
      height: 14em;
    }
    @media only screen and (max-width: 320px) and (orientation:portrait)  {
      margin: 1em;
      height: 11em;
    }
    @media (min-width: 830px){
      font-size: 24px;
      line-height: 29px;
    }
    @media only screen and (min-width: 830px) and (max-height:700px){
      height: 8em;
    }
    @media only screen and (min-width: 1024px) and (max-height:700px){
      height: 9em;
    }
    @media only screen and (min-width: 1197px) and (max-height:700px){
      height: 10em;
    }
    @media only screen and (max-width: 1024px) and (min-height:1196px){
      font-size: 30px;
    line-height: 36px;
    height: 16em;
    }
    @media only screen and (max-width: 1024px) and (min-height:1366px){
      font-size: 30px;
    line-height: 36px;
    height: 20em;
    }

    margin-bottom:0;
    
`
const Layout = styled.div`
    display:grid;
    @media (max-width: 2560px){
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
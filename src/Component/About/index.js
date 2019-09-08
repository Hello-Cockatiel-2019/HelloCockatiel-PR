import React, { Component } from 'react'
import styled from 'styled-components'
import Where from './Where'

import { Paragraph, Subtitle } from '../Core/Text'

const Plate = styled.div `
    
    @media(min-width:320px) {
        background-image: url(/images/Objects/small-plate.png);
        width:263px;
        height: 218px;
      }
      @media (min-width:410px) {
        background-image: url(/images/Objects/small-plate.png);
        width:300px;
        height: 250px;
      }
      @media only screen and (min-width: 768px) and (max-height: 1024px) and (orientation: portrait)  {
        background-image: url(/images/Objects/small-plate.png);
        width:562px;
        height: 469px;
      }
      @media only screen and (min-width: 768px) and (max-height: 1024px) and (orientation:landscape)  {
        background-image: url(/images/Objects/big-platebird.png);
        width:383px;
        height: 240px;
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
      }
      background-size:100%; 
      background-repeat: no-repeat;
      size:100%;
      background-size:100%; 
      background-repeat: no-repeat;
      size:100%;
      
`
      const Title= styled(Subtitle) `
      @media(min-width:320px) {
        margin-top:5px;
      }
      @media (min-width:410px) {
        margin-top:7px;
      }
      @media only screen and (min-width: 768px) and (max-height: 1024px) and (orientation: portrait)  {
        margin-top:10px;
        font-size:28px;
      }
      @media only screen and (min-width: 768px) and (max-height: 1024px) and (orientation:landscape)  {
        margin-top:27px;
      }
      @media (min-width:960px) {
        margin-left:1px;
        margin-top:29px;
      }
      @media(min-width:1024px) {
        margin-left:3px;
        margin-top:32px;
      }
      text-shadow:0 5px 5px black;
      `
      const Content= styled(Paragraph) `
      @media(min-width:320px) {
        margin-left:30px;
        margin-top:5px;
      }
      @media (min-width:410px) {
        margin-left:35px;
        margin-top:10px;
      }
      @media (min-width:768px) {
        margin-left:42px;
        margin-top:18px;
      }
      @media (min-width:960px) {
        margin-left:44px;
        margin-top:20px;
      }
      @media(min-width:1024px) {
        margin-left:50px;
        margin-top:24px;
      }
      
      `


const AboutBox = () => (
    
        <div class="d-flex flex-column">
            
            <Plate>
                <Title className="text-center">
                    About us
                </Title>
            
            <Content>
                text
            </Content>
            </Plate>
            <Where />
        </div>
  )

export default class About extends Component {
    render() {
        return (
                <AboutBox />
        )
    }
}

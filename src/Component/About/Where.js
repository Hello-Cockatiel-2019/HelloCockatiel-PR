import React, { Component } from 'react'
import styled from 'styled-components'

import { Small } from '../Core/Text'

const Where1 = styled.div `
@media(min-width:320px) {
    
    width:85px;
    height: 25px;
  }
  @media (min-width:410px) {
    
    width:109px;
    height: 32px;
  }
  @media (min-width:768px) {
    
    width:97px;
    height: 30px;
    
  }
  @media (min-width:960px) {
    
    width:121px;
    height: 37px;
    
  }
  @media(min-width:1024px) {
    
    width:129px;
    height: 39px;
  }
  
    background-image: url(/images/Objects/arrowplate3.png);
    background-repeat: no-repeat;
    background-size:100%;
    // padding-left:2em;
    // margin-left:0.1em;
    // box-shadow:0 5px 5px black;
    
`
const Sit = styled.div `
    @media(min-width:320px) {
        width:131px;
        height: 38px;
      }
      @media (min-width:410px) {
        width:168px;
        height: 49px;
      }
      @media (min-width:768px) {
        width:132px;
        height: 73px;
        
      }
      @media (min-width:960px) {
        width:165px;
        height: 48px;
      }
      @media(min-width:1024px) {
        width:176px;
        height: 51px;
      }
        background-image: url(/images/Objects/arrowplate2.png);
        background-repeat: no-repeat;
        background-size:100%;
        // padding-left:2em;
        // margin-left:0.1em;
        // box-shadow:0 5px 5px black;
    `

const Text= styled(Small) `
    // transform: translateY(50%);
    
`


export default class Where extends Component{
    render() {
        return (

            <div class="d-flex flex-column justify-content-around">
                <Where1>
                    <Text>
                    สถานที่จัด
                    </Text>
                </Where1>
                <Sit>
                    <Text>
                    คณะเทคโนโลยี<br/>
                    สารสนเทศ
                    </Text>
                </Sit>
            </div>
        )
    }
}
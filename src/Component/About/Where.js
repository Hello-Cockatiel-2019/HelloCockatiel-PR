import React, { Component } from 'react'
import styled from 'styled-components'

import { Small } from '../Core/Text'

const Where1 = styled.div `
@media(min-width:320px) {
  padding-top:0.2em;
    width:85px;
    height: 25px;
  }
  @media (min-width:410px) {
    padding-top:0.4em;
    width:109px;
    height: 32px;
  }
  @media(min-width:576px) {
    width:153px;
    height: 45px;
      }
  @media (min-width:768px) {
    width:204px;
    height: 60px;
    padding-top:0.6em;
  }
  @media only screen and (min-width: 768px) and (max-height: 1024px) and (orientation: portrait)  {
    background-image: url(/images/Objects/arrowplate3.png);
    width:204px;
    height: 60px;
    padding-top:0.6em;
  }
  @media only screen and (min-width: 768px) and (max-height: 1024px) and (orientation:landscape)  {
    background-image: url(/images/Objects/arrowplate4.png);
    width:204px;
    height: 142px;
    padding-top:4em;
  }
  @media only screen and (min-width: 834px) and (max-height: 1196px) and (orientation:portrait)  {
    background-image: url(/images/Objects/arrowplate3.png);
    width:204px;
    height: 60px;
    padding-top:0.6em;
  }
  
  @media (min-width:960px) {
    background-image: url(/images/Objects/arrowplate4.png);
    width:142px;
    height: 99px;
    padding-top:4em;
  }
  @media(min-width:1024px) {
    background-image: url(/images/Objects/arrowplate4.png);
    padding-top:0.4em;
    width:142px;
    height: 99px;
    padding-top:4em;
  }
  
    background-image: url(/images/Objects/arrowplate3.png);
    background-repeat: no-repeat;
    background-size:100%;
    padding-left:1.5em;
    margin-left:0.2em
`
const Sit = styled.div `
    @media(min-width:320px) {
        width:131px;
        height: 38px;
        padding-top:0.06em;
      }
      @media (min-width:410px) {
        width:168px;
        height: 49px;
        padding-top:0.2em;
      }
      @media(min-width:576px) {
        width:236px;
        height: 69px;
      }
      @media (min-width:768px) {
        width:315px;
        height: 92px;
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
        padding-left:1.3em;
        margin-top:.7em;
    `
const Text= styled(Small) `
    @media only screen and (min-width: 834px) and (max-height: 1196px) and (orientation:portrait)  {
      font-size:28px;
    }
    @media only screen and (min-width: 768px) and (max-height: 1024px) and (orientation: portrait) {
        font-size:28px;
    }
      @media only screen and (min-width: 1024px) and (max-height: 1468px) and (orientation: portrait) {
        font-size: 16px;
    } 
    letter-spacing: 0.05em;
`
const WhereIs = styled.div `
float: right;
@media(min-width:320px) {
  margin-top:3em;
  margin-right:1em;
  }

  @media (min-width:768px) {
    margin-top:3em;
    margin-right:2em;
  }
  @media only screen and (min-width: 768px) and (max-height: 1024px) and (orientation: portrait)  {
    margin-top:5em;
    margin-right:2.5em;
  }
  @media only screen and (min-width: 834px) and (max-height: 1196px) and (orientation:portrait)  {
    margin-top:5em;
    margin-right:3.5em;
  }
  @media (min-width:960px) {
    margin-top:3em;
    margin-left:2em;
  }
`

export default class Where extends Component {
  render() {
    return (
      <WhereIs>
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
            </WhereIs>
    )
  }
}
import React, {Component} from 'react'
import styled from 'styled-components'

const FixedBackground = styled.div`
  z-index:-2;
  width:100%;
  height: 100vh;
  background-repeat:no-repeat;
  background-position: bottom;
  position:fixed;
  background-size:cover;
  background-image:url('/images/Background/bg1536x900.png');

    @media (max-width: 1536px) and (max-height:793px) {
      background-image:url('/images/Background/bg1536x792.png');
    }
    @media (max-width: 1440px){
      background-position: center;
      background-image:url('/images/Background/bg1440x1024.png');
    }
    @media (max-width: 1196px){
      background-position: bottom;
      background-image:url('/images/Background/bg1196x834.png');
    }
    @media (max-width: 768px) {
      background-image:url('/images/Background/bg768x1000.png');
    }
    @media only screen and (max-width: 414px){
      background-image:url('/images/Background/bg414x896.png');
    }
    @media only screen and (max-width: 375px){
      background-image:url('/images/Background/bg375x632.png');
    }
`
export default class background extends Component {
  render () {
    return (
      <FixedBackground/>
    )
  }
}
import React, {Component} from 'react'
import styled from 'styled-components'

const FixedBackground = styled.div`
  z-index:-2;
  width:100%;
  height: 100%;
  background-repeat:no-repeat;
  background-position: bottom;
  position:fixed;
  background-size:cover;
  background-image:url('/images/Background/1536x792.png');
  
    @media (max-width: 960px) {
      height: 100vh;
      background-image:url('/images/Background/768x1230.png');
    }
    @media only screen and (max-width: 375px) and (min-height: 568px) and (orientation:portrait) {
      height: 100vh;
      background-image:url('/images/Background/414x896.png');
    }
    @media only screen and (min-width: 375px) and (max-height: 736px) and (orientation:portrait) {
      height: 100vh;
      background-image:url('/images/Background/375x632.png');
    }
    @media (max-width: 320px) {
      height: 100vh;
      background-image:url('/images/Background/375x632.png');
    }
`
export default class background extends Component {
  render () {
    return (
      <FixedBackground/>
    )
  }
}
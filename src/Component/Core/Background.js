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
  background-image:url('/images/Background/1536x792.png');
   @media (max-width: 960px) {
    background-image:url('/images/Background/768x1230.png');
   }
   @media (max-width: 414px) {
    background-image:url('/images/Background/414x896.png');
    }
`
export default class background extends Component {
  render () {
    return (
      <FixedBackground/>
    )
  }
}
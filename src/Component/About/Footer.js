import React, { Component } from 'react'
import styled from 'styled-components'
import { Desktop } from '../Core/Hidden'

const Button = styled.img`
width:100%;
height:100%;
`

const FbButton = styled(Button)`
margin-top:2em;
margin-bottom:4em;
@media only screen and (max-width: 1196px) and (orientation:portrait)  {
  width: 35%;
  height:auto;
    }
`
const GameButton = styled(Button)`
margin-top:4em;
margin-bottom:2em;
`
const Div = styled.div`
@media only screen and (max-width: 1196px) and (orientation:portrait)  {
  height:500px;
text-align: center;
    }
`


export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <Div>
          <FbButton src="/images/Objects/fb.png"/>
        </Div>
        <Desktop>
          <GameButton src="/images/Objects/game.png"/>
        </Desktop>
      </React.Fragment>
    )
  }
}
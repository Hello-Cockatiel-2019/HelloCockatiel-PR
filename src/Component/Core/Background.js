import React, {Component} from 'react'
import styled from 'styled-components'

const Background = styled.div`
    background-image:url('/images/Background/${props => props.bgImgURL}');
    min-height: 100vh;
    background-repeat:no-repeat;
    background-position: center;
    background-attachment: fixed;
    padding:0;
    margin:0;
    left:0;
`
const Grass = styled(Background)`
position: absolute;
  z-index: -2;
  width:100%;
  bottom:0;
  @media (min-width:320px) {
    transform: translate(0,40%);
    background-size:190%;
  }
  @media (min-width:412px) {
    transform: translate(0,40%);
    background-size:190%;
  }
  // @media only screen and (min-width: 375px) and (max-height: 812px) and (orientation: portrait)  {
  //   transform: translate(0,32%);
  //   background-size:190%;
  // }
  @media only screen and (min-width: 414px) and (max-height: 900px) and (orientation: portrait)  {
    transform: translate(0,32%);
    background-size:190%;
  }
  @media (min-width:768px) {
    transform: translate(0,32%);
  background-size:130%;
  }
  @media (min-width:834px) {
  background-size:100%;
  }
  @media (min-width:1024px) {
  transform: translate(0,32%);
  }
  @media only screen and (min-width: 1024px) and (max-height: 768px) and (orientation: landscape)  {
    transform: translate(0,30%);
  }
  @media only screen and (min-width: 834px) and (max-height: 1196px) and (orientation: portrait)  {
    transform: translate(0,34%);
  }
  @media only screen and (min-width: 1196px) and (max-height: 834px) and (orientation: landscape)  {
    transform: translate(0,30%);
  }
  @media only screen and (min-width: 1024px) and (max-height: 1467px) and (orientation: portrait)  {
    transform: translate(0,34%);
  }
  @media only screen and (min-width: 1467px) and (max-height: 1024px) and (orientation: landscape)  {
    transform: translate(0,36%);
  }
  @media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: portrait)  {
    transform: translate(0,34%);
  }
  @media only screen and (min-width: 1366px) and (max-height: 1024px) and (orientation: landscape)  {
    transform: translate(0,30%);
  }
`
const Tree = styled(Background)`
  position: absolute;
  z-index: -4;
  background-repeat:no-repeat;
  background-size: 100%;
  width:100%;
  position: fixed;
  @media (min-width:320px) {
    background-size: 280%;
  }
  @media (min-width:412px) {
    background-size:300%;
  }
  @media only screen and (min-width: 375px) and (max-height: 812px) and (orientation: portrait)  {
    background-size:320%;
  }
  @media only screen and (max-height: 667px) and (min-width: 375px) and (orientation: portrait){
    background-size: 270%;
  }
  @media only screen and (min-width: 414px) and (max-height: 7360px) and (orientation: portrait)  {
    background-size:260%;
  }
  @media only screen and (min-width: 414px) and (max-height: 900px) and (orientation: portrait)  {
    background-size:320%;
  }
  @media (min-width:768px) {
  background-size:200%;
  }
  @media (min-width:1024px) {
  background-size: 110%;
  }
  @media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: portrait)  {
  background-size: 215%;
  }
  @media only screen and (min-width: 834px) and (max-height: 1196px) and (orientation: portrait)  {
  background-size: 225%;
  }
  @media only screen and (min-width: 1024px) and (max-height: 1467px) and (orientation: portrait)  {
  background-size: 220%;
  }
`
const Shadow = styled(Background)`
position: absolute;
z-index: -5;
background-repeat:no-repeat;
background-size: 100%;
width:100%;
position: fixed;
@media (min-width:320px) {
  background-size: 280%;
}
@media (min-width:412px) {
  background-size:300%;
}
@media only screen and (min-width: 375px) and (max-height: 812px) and (orientation: portrait)  {
  background-size:320%;
}
@media only screen and (max-height: 667px) and (min-width: 375px) and (orientation: portrait){
  background-size: 270%;
}
@media only screen and (min-width: 414px) and (max-height: 7360px) and (orientation: portrait)  {
  background-size:260%;
}
@media only screen and (min-width: 414px) and (max-height: 900px) and (orientation: portrait)  {
  background-size:320%;
}
@media (min-width:768px) {
background-size:200%;
}
@media (min-width:1024px) {
background-size: 110%;
}
@media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: portrait)  {
background-size: 215%;
}
@media only screen and (min-width: 834px) and (max-height: 1196px) and (orientation: portrait)  {
background-size: 225%;
}
@media only screen and (min-width: 1024px) and (max-height: 1467px) and (orientation: portrait)  {
background-size: 220%;
}
`

const Bird1 = styled.img`
content:url('/images/Background/${props => props.bgImgURL}');
position: absolute;
  z-index: -1;
  width:100%;
  height: auto;
  position: fixed;
  @media (min-width:320px) {
    right: 10%;
    max-width: 15%;
    bottom:-5%;
  }
  @media (min-width:412px) {
    right: 10%;
    max-width: 15%;
    bottom:-13%;
  }
  @media only screen and (min-width: 375px) and (max-height: 812px) and (orientation: portrait)  {
    right: 10%;
    max-width: 15%;
    bottom:4%;
  }
  @media only screen and (min-width: 414px) and (max-height: 900px) and (orientation: portrait)  {
    right: 10%;
    max-width: 15%;
    bottom:4%;
  }
  @media (min-width:768px) {
    right: 10%;
    max-width: 10%;
    bottom:6%;
  }
  @media (min-width:960px) {
    z-index: -3;
    left: 24%;
    max-width: 7%;
    bottom:7%;
  }
  @media(min-width:1024px) {
    left: 24%;
    max-width: 10%;
    bottom:3%;
  }
  @media(min-width:1196px) {
    left: 24%;
    max-width: 6%;
    bottom:12%;
  }
  @media only screen and (min-width: 1024px) and (max-height: 768px) and (orientation: landscape)  {
    left: 24%;
    max-width: 7%;
    bottom:20%;
  }
  @media only screen and (min-width: 834px) and (max-height: 1196px) and (orientation: portrait)  {
    right: 10%;
    max-width: 10%;
    bottom:4%;
  }
  @media only screen and (min-width: 1196px) and (max-height: 834px) and (orientation: landscape)  {
    left: 24%;
    max-width: 6%;
    bottom:21%;
  }
  @media only screen and (min-width: 1366px) and (max-height: 1024px) and (orientation: landscape)  {
    left: 24%;
    max-width: 6%;
    bottom:20%;
  }
`
const Bird2 = styled.img`
content:url('/images/Background/${props => props.bgImgURL}');
position: absolute;
  z-index: -1;
  width:100%;
  height: auto;
  position: fixed;
  visibility: hidden;
  @media (min-width:960px) {
    z-index: -3;
    left: 32%;
    max-width: 7%;
    bottom:7%;
    visibility: visible;
  }
  @media(min-width:1024px) {
    left: 32%;
    max-width: 10%;
    bottom:3%;
  }
  @media(min-width:1196px) {
    left: 32%;
    max-width: 6%;
    bottom:12%;
  }
  @media only screen and (min-width: 1024px) and (max-height: 768px) and (orientation: landscape)  {
    left: 34%;
    max-width: 7%;
    bottom:20%;
  }
  @media only screen and (min-width: 1024px) and (max-height: 1467px) and (orientation: portrait)  {
    left: 37%;
    max-width: 8%;
    bottom:4%;
  }
  @media only screen and (min-width: 1196px) and (max-height: 834px) and (orientation: landscape)  {
    left: 32%;
    max-width: 6%;
    bottom:21%;
  }
  @media only screen and (min-width: 1366px) and (max-height: 1024px) and (orientation: landscape)  {
    left: 32%;
    max-width: 6%;
    bottom:20%;
  }
`

const Bg = styled.div`
  background-color:#FFFBC2;
`
export default class background extends Component {

  render () {
    return (
      <Bg>
        <Bird1 bgImgURL='../Objects/b1.png' />
        <Bird2 bgImgURL='../Objects/b2.png' />
        <Shadow bgImgURL='bg3.png' />
        <Grass bgImgURL='bg1.png' />
        <Tree bgImgURL='bg2.png' />
        <Shadow bgImgURL='bg3.png' />
      </Bg>
    )
  }
}
import React, {Component} from 'react'
import styled from 'styled-components'

const Background = styled.div`
    background-image:url('/images/Background/${props => props.bgImgURL}');
    min-height: 100vh;
    background-repeat:no-repeat;
    background-position: bottom;
    background-attachment: fixed;
    position:fixed;
    width:100%;
`
const Grass = styled(Background)`
  z-index: -2;
  @media (min-width:320px) {
    background-size:120%;
  }
  @media (min-width:375px) {
    background-size:170%;
  }
  @media only screen and (max-width: 414px) and (min-height: 812px) and (orientation: portrait)  {
    background-size:185%;
  }
  @media only screen and (max-width: 375px) and (min-height: 812px) and (orientation: portrait)  {
    background-size:205%;
  }
  @media only screen and (max-width: 414px) and (min-height:896px) and (orientation: portrait)  {
    background-size:200%;
  }
  @media (min-width:768px) {
  background-size:140%;
  }
  @media only screen and (min-width: 768px) and (max-height: 626px) and (orientation:landscape)  {
    background-size: 125%;
    transform: translate(0,5%);
       }
  @media only screen and (min-width: 1024px) and (max-height: 768px) and (orientation: landscape)  {
    background-size: 110%;
    transform: translate(0,5%);
  }
  @media only screen and (min-width: 1366px) and (max-height: 1024px) and (orientation: landscape)  {
    background-size: 100%;
    transform: translate(0,0);
  }
  @media only screen and (min-width: 1196px) and (max-height: 834px) and (orientation: landscape)  {
    background-size: 105%;
    transform: translate(0, 5%);
  }
  @media only screen and (min-width: 1024px) and (max-height: 1467px) and (orientation: portrait)  {
    background-size: 130%;
    transform: translate(0, 0);
  }
`
const Tree = styled(Background)`
  z-index: -4;
  background-size: 100%;
  @media (min-width:320px) {
    background-size: 260%;
  }
  @media only screen and (max-width: 414px) and (min-height: 812px) and (orientation: portrait)  {
    background-size:290%;
  }
  @media only screen and (max-width: 375px) and (min-height: 812px) and (orientation: portrait)  {
    background-size:330%;
  }
  @media only screen and (max-width: 414px) and (min-height: 896px) and (orientation: portrait)  {
    background-size:315%;
  }
  @media (min-width:768px) {
  background-size:200%;
  }
  @media only screen and (min-width: 768px) and (max-height: 626px) and (orientation:landscape)  {
    background-size: 120%;
       }
  @media only screen and (min-width: 1024px) and (max-height: 768px) and (orientation: landscape)  {
    background-size: 110%;
  }
  @media only screen and (min-width: 1366px) and (max-height: 1024px) and (orientation: landscape)  {
    top: -10vh;
    height: 100%;
    background-size: 110%;
  }
  @media only screen and (min-width: 834px) and (max-height: 1196px) and (orientation: portrait)  {
  background-size: 210%;
  }
  @media only screen and (min-width: 1024px) and (max-height: 1467px) and (orientation: portrait)  {
    background-size: 210%;
  }
`
const Shadow = styled(Background)`
z-index: -5;
background-size: 100%;
  transform: translate(0, 10%);
  @media (min-width:320px) {
    background-size: 260%;
  }
  @media only screen and (max-width: 414px) and (min-height: 812px) and (orientation: portrait)  {
    background-size:290%;
  }
  @media only screen and (max-width: 375px) and (min-height: 812px) and (orientation: portrait)  {
    background-size:330%;
  }
  @media only screen and (max-width: 414px) and (min-height: 896px) and (orientation: portrait)  {
    background-size:315%;
  }
  @media (min-width:768px) {
  background-size:200%;
  }
  @media only screen and (min-width: 768px) and (max-height: 626px) and (orientation:landscape)  {
    background-size: 120%;
       }
  @media only screen and (min-width: 1024px) and (max-height: 768px) and (orientation: landscape)  {
    background-size: 110%;
  }
  @media only screen and (min-width: 1366px) and (max-height: 1024px) and (orientation: landscape)  {
    top: -10vh;
    height: 100%;
    background-size: 110%;
  }
  @media only screen and (min-width: 834px) and (max-height: 1196px) and (orientation: portrait)  {
  background-size: 210%;
  }
  @media only screen and (min-width: 1024px) and (max-height: 1467px) and (orientation: portrait)  {
    background-size: 210%;
  }
`

const Bird1 = styled.img`
content:url('/images/Background/${props => props.bgImgURL}');
  z-index: -1;
  width:100%;
  height: auto;
  position: fixed;
  @media (min-width:320px) {
    right: 10%;
    max-width: 15%;
    bottom:0%;
  }
  @media (min-width:412px) {
    right: 10%;
    max-width: 15%;
    bottom:-13%;
  }
  @media only screen and (min-width: 375px) and (max-height: 812px) and (orientation: portrait)  {
    right: 10%;
    max-width: 15%;
    bottom:-37%;
  }
  @media only screen and (min-width: 375px) and (max-height: 667px) and (orientation: portrait)  {
    right: 10%;
    max-width: 15%;
    bottom:-13%;
  }
  @media only screen and (min-width: 414px) and (max-height: 900px) and (orientation: portrait)  {
    right: 10%;
    max-width: 15%;
    bottom:-37%;
  }
  @media only screen and (min-width: 414px) and (max-height: 812px) and (orientation: portrait)  {
    right: 10%;
    max-width: 15%;
    bottom:-24%;
  }
  @media only screen and (min-width: 414px) and (max-height: 736px) and (orientation: portrait)  {
    right: 10%;
    max-width: 15%;
    bottom:-13%;
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
    bottom:-60%;
  }
  @media(min-width:1196px) {
    left: 24%;
    max-width: 6%;
    bottom:12%;
  }
  @media only screen and (min-width: 1024px) and (max-height: 768px) and (orientation: landscape)  {
    left: 24%;
    max-width: 7%;
    bottom:6%;
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
    bottom:10%;
  }
  @media only screen and (min-width: 1024px) and (max-height: 1467px) and (orientation: portrait)  {
    right: 24%;
    max-width: 10%;
    bottom:-74%;
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
    bottom:6%;
  }
  @media only screen and (min-width: 1024px) and (max-height: 1467px) and (orientation: portrait)  {
    left: 37%;
    max-width: 9%;
    bottom: -60%;
  }
  @media only screen and (min-width: 1196px) and (max-height: 834px) and (orientation: landscape)  {
    left: 32%;
    max-width: 6%;
    bottom:21%;
  }
  @media only screen and (min-width: 1366px) and (max-height: 1024px) and (orientation: landscape)  {
    left: 32%;
    max-width: 6%;
    bottom:10%;
  }
  @media only screen and (min-width: 1024px) and (max-height: 1467px) and (orientation: portrait)  {
    right: 32%;
    max-width: 10%;
    bottom:-74%;
  }
`

const Bg = styled.div`
  background-color:#FFFBC2;
  width:100%;
  height:100%;

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
      </Bg>
    )
  }
}
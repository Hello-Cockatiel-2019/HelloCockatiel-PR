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
`
const Grass = styled(Background)`
position: absolute;
  z-index: -1;
  @media (min-width:320px) {
    transform: translate(0,40%);
    width:100%;
    background-size:190%;
  }
  @media (min-width:412px) {
    transform: translate(0,40%);
    width:100%;
    background-size:190%;
  }
  @media only screen and (min-width: 375px) and (max-height: 812px) and (orientation: portrait)  {
    transform: translate(0,42%);
    width:100%;
    background-size:190%;
  }
  @media only screen and (min-width: 414px) and (max-height: 900px) and (orientation: portrait)  {
    transform: translate(0,42%);
    width:100%;
    background-size:190%;
  }
  @media (min-width:768px) {
    transform: translate(0,39%);
  width:100%;
  background-size:150%;
  }
  @media (min-width:1024px) {
  transform: translate(0,32%);
  width:100%;
  background-size: 100%;
  }
  @media only screen and (min-width: 1024px) and (max-height: 768px) and (orientation: landscape)  {
    transform: translate(0,38%);
  width:100%;
  background-size: 100%;
  }
  @media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: portrait)  {
    transform: translate(0,44%);
  width:100%;
  background-size: 100%;
  }
  @media only screen and (min-width: 834px) and (max-height: 1196px) and (orientation: portrait)  {
    transform: translate(0,43%);
  width:100%;
  background-size: 100%;
  }
  @media only screen and (min-width: 1196px) and (max-height: 834px) and (orientation: landscape)  {
    transform: translate(0,38%);
  width:100%;
  background-size: 100%;
  }
  @media only screen and (min-width: 1024px) and (max-height: 1467px) and (orientation: portrait)  {
    transform: translate(0,44%);
  width:100%;
  background-size: 100%;
  }
  @media only screen and (min-width: 1366px) and (max-height: 1024px) and (orientation: landscape)  {
    transform: translate(0,38%);
  width:100%;
  background-size: 100%;
  }
`
const Tree = styled(Background)`
position: absolute;
  z-index: -2;
  bottom: 0vh;
  left: 50%;
  transform: translate(-50%,0%);
  width:100%;
  @media (min-width:320px) {
    width:150%;
  }
  @media (min-width:412px) {
    width:140%;
  }
  @media (min-width:576px) {
    width:130%;
  }
  @media (min-width:768px) {
    width:120%;
  }
  @media (min-width:1024px) {
    width:100%;
  }
`
const Shadow = styled(Background)`
position: absolute;
  z-index: -3;
  bottom: 0vh;
  left: 50%;
  transform: translate(-50%,0%);
  width:100%;
  @media (min-width:320px) {
    width:150%;
  }
  @media (min-width:412px) {
    width:140%;
  }
  @media (min-width:576px) {
    width:130%;
  }
  @media (min-width:768px) {
    width:120%;
  }
  @media (min-width:1024px) {
    width:100%;
  }
`

export default class background extends Component {
  render () {
    return (
      <div className="text-align-center">
        <Grass bgImgURL='bg1.png' />
        {/* <Tree bgImgURL='bg2.png' />
        <Shadow bgImgURL='bg3.png' /> */}
      </div>
    )
  }
}
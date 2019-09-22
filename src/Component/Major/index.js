import React, { Component } from 'react'
import styled from 'styled-components'
import MobileHeader from '../Core/MobileHeader';
import Field from './Field'
import {frontendContent,designContent,infraContent,gameContent} from '../Core/Messages'
import Color from '../../Config/Color'

const AllContent = styled.div`
    transform: translateY(-30%);
    @media (max-width: 2500px) {
    transform: translate(5%,10%);
    }
    @media (max-width: 2400px) {
    transform: translate(5%,10%);
    }
    @media (max-width: 2300px) {
    transform: translate(5%,10%);
    }
    @media (max-width: 2200px) {
    transform: translate(5%,10%);
    }
    @media (max-width: 2100px) {
    transform: translate(5%,10%);
    }
    @media (max-width: 2000px) {
    transform: translate(5%,10%);
    }
    @media (max-width: 1900px) {
    transform: translate(5%,10%);
    }
    @media (max-width: 1800px) {
    transform: translate(5%,10%);
    }
    @media (max-width: 1700px) {
    transform: translate(5%,10%);
    }
    @media (max-width: 1600px) {
    transform: translate(5%,10%);
    }
    @media only screen and (max-width: 1550px) and (max-height: 800px) and (orientation: landscape)  {
    transform: translate(10%,0%);
    }
    @media (max-width: 1500px) {
    transform: translate(5%,10%);
    }
    @media only screen and (max-width: 1467px) and (max-height: 1024px) and (orientation: landscape)  {
    transform: translate(5%,30%);
    }
    @media only screen and (max-width: 1467px) and (max-height: 900px) and (orientation: landscape){
      transform: translate(8%,3%);
    }
    @media (max-width: 1467px) {
      transform: translate(5%,10%);
    }
    @media (max-width: 1400px) {
    transform: translate(5%,10%);
    }
    @media only screen and (max-width: 1366px) and (orientation: landscape)  {
    transform: translate(5%,10%);
    }
    @media (max-width: 1300px){
    transform: translate(5%,0%);
    }
    @media (max-width: 1200px){
    transform: translate(5%,0%);
    }
    @media only screen and (max-width: 1196px) and (max-height: 834px) and (orientation: landscape)  {
    transform: translate(-14%,-10%);
    }
    @media (max-width: 1196px) and (max-height: 840px){
    transform: translate(5%,15%);
    }
    @media only screen and (max-width: 1024px) and (max-height: 1467px) and (orientation: portrait)  {
    transform: translate(25%,-40%);
    grid-template-columns: none;
    display:grid;
    height: 90vh;
    padding-top:25em;
    }
    @media only screen and (max-width: 1024px) and (max-height: 1366px) and (orientation: portrait)  {
    transform: translate(26%,-40%);
    grid-template-columns: none;
    display:grid;
    height: 90vh;
    padding-top:20em;
    }
    @media only screen and (max-width: 1024px) and (max-height: 768px) and (orientation: landscape)  {
    transform: translate(6%,-10%);
    }
    @media only screen and (max-width: 834px) and (max-height: 1196px) and (orientation: portrait)  {
    transform: translate(-21%,-30%);
    grid-template-columns: none;
    display:grid;
    height: 90vh;
    padding-top:10em;
    }
    @media (max-width:770px) and (orientation: portrait){
      transform: translate(16%,-30%);
    grid-template-columns: none;
    display:grid;
    }
    @media (max-width:570px){
      transform: translate(-17%,-20%);
    }
    @media (max-width:500px){
      transform: translate(-15%,-20%);
    }
    @media (max-width:420px) and (max-height:900px){
      transform: translate(12%,-40%);
    }
    @media (max-width:420px) and (max-height:820px) {
      transform: translate(11%,-45%);
    }
    @media (max-width:420px) and (max-height:740px) {
      transform: translate(11%,-50%);
    }
    @media (max-width:380px) and (max-height:820px){
      transform: translate(7%,-45%);
    }
    @media (max-width:380px) and (max-height:700px){
      transform: translate(7%,-55%);
    }
    @media (max-width:325px){
      transform: translate(5%,-58%);
    }
`

const Header = styled.div`
    @media only screen and (max-width: 1024px) and (max-height: 1467px) and (orientation: portrait)  {
    transform: translate(2%,-90%);
    }
    @media only screen and (max-width: 1024px) and (max-height: 1366px) and (orientation: portrait)  {
    transform: translate(2%,-120%);
    }
    @media only screen and (max-width: 834px) and (max-height: 1196px) and (orientation: portrait)  {
    transform: translate(2%,-120%);
    }
    @media (max-width:770px) and (orientation: portrait){
      transform: translate(-2%,-90%);
    }
    @media (max-width:570px){
      transform: translate(4%,-60%);
    }
    @media (max-width:500px){
      transform: translate(0%,-60%);
    }
    @media (max-width:420px){
      transform: translate(1%,-90%);
    }
    @media (max-width:380px){
      transform: translate(0%,-120%);
    }
`

const SpaceBySpace = styled.div`
    padding-top:1.5em;
    margin-right:-8em;
    @media only screen and (max-width: 1196px) and (max-height: 834px) and (orientation: landscape){
      padding-top:1em;
    }
    @media only screen and (max-width: 1024px) and (max-height: 1467px) and (orientation: portrait){
      padding-top:2em;
    }
    @media only screen and (max-width: 1024px) and (max-height: 1366px) and (orientation: portrait){
      margin-top:${props => props.mrt === 0 ? 0 : -50}px;
    }
    @media only screen and (max-width: 1024px) and (max-height: 768px) and (orientation: landscape){
      padding-top:1em;
    }
    @media only screen and (max-width: 834px) and (max-height: 1196px) and (orientation: portrait){
      padding-top:1em;
    }
    @media (max-width:770px) and (orientation: portrait){
      padding-top:0.5em;
    }
    @media (max-width:570px){
      padding-top:0.5em;
    }
    @media (max-width:500px){
      padding-top:0.5em;
    }
    @media (max-width:420px){
      padding-top:4em;
    }
    @media (max-width:380px){
      padding-top:4em;
    }
    @media (max-width:330px){
      padding-top:3.5em;
    }
`
export default class index extends Component {
  state = {
    data: [
      {
        content: `${frontendContent}` ,
        imgbird: "g1.png",
        class: "justify-content-start",
        colorBox: `${Color.new1}`
      },
      {
        content: `${designContent}`,
        imgbird: "g3.png",
        class: "justify-content-start",
        colorBox: `${Color.Wood5}`
      },
      {
        content: `${infraContent}`,
        imgbird: "g2.png",
        class: "justify-content-start",
        colorBox: `${Color.Wood3}`
      },
      {
        content:  `${gameContent}`,
        imgbird: "g4.png",
        class: "justify-content-start",
        colorBox: `${Color.new2}`
      }
    ]
  }
  render() {
    return (
      <React.Fragment>
        <Header>
          <MobileHeader text="Teams" headerURl="Group-1.png" />
        </Header>
        <AllContent className="row">
          {
            this.state.data.map((TC, i) => {
              return (
                <SpaceBySpace className={`d-flex col-lg-6 col-md-12 col-12 ${TC.class}`} mrt={i} key={i} >
                  <Field
                    content={TC.content}
                    colorBox={TC.colorBox}
                    imgbird={TC.imgbird}
                    keytopic={i}
                  />
                </SpaceBySpace>
              )
            })
          }
        </AllContent>
      </React.Fragment>

    )
  }
}

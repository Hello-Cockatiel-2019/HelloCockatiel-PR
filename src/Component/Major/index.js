import React, { Component } from 'react'
import styled from 'styled-components'
import MobileHeader from '../Core/MobileHeader';
import Field from './Field'
import {frontendContent,designContent,infraContent,gameContent} from '../Core/Messages'
import Color from '../../Config/Color'

const AllContent = styled.div`
    transform: translateY(-30%);
    @media (max-width: 2600px) {
    transform: translate(5%,10%);
    }
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
    @media (max-width: 1550px) and (max-height: 750px) and (orientation: landscape)  {
    transform: translate(7%,13%);
    }
    @media (max-width: 1500px) {
    transform: translate(5%,10%);
    }
    @media (max-width: 1467px) {
      transform: translate(5%,10%);
    }
    @media only screen and (max-width: 1467px) and (max-height: 1024px) and (orientation: landscape)  {
    transform: translate(5%,20%);
    }
    @media only screen and (max-width: 1467px) and (max-height: 900px) and (orientation: landscape){
      transform: translate(8%,3%);
    }
    @media (max-width: 1440px) and (max-height:730px){
    transform: translate(5%,15%);
    }
    @media (max-width: 1440px) and (max-height:690px){
    transform: translate(5%,15%);
    }
    @media (max-width: 1400px) {
    transform: translate(5%,10%);
    }
    @media (max-width: 1366px) {
    transform: translate(5%,10%);
    }
    @media (max-width: 1300px){
    transform: translate(5%,10%);
    }
    @media (max-width: 1280px) and (max-height:680px){
    transform: translate(5%,13%);
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
    @media (max-width: 1090px) and (max-height: 630px){
    transform: translate(1%,15%);
    }
    @media (max-width: 1080px){
    transform: translate(1%,15%);
    }
    @media only screen and (max-width: 1024px) and (max-height: 1467px) and (orientation: portrait)  {
    transform: translate(18%,-55%);
    grid-template-columns: none;
    display:grid;
    height: 100vh;
    padding-top:40em;
    }
    @media only screen and (max-width: 1024px) and (max-height: 1366px) and (orientation: portrait)  {
    transform: translate(19%,-58%);
    grid-template-columns: none;
    display:grid;
    }
    @media only screen and (max-width: 1024px) and (max-height: 768px) and (orientation: landscape)  {
    transform: translate(0%,5%);
    }
    @media (max-width: 1024px) and (max-height: 630px){
    transform: translate(1%,13%);
    }    
    @media (max-width:1010px) {
      transform: translate(13%,0%);
      grid-template-columns: none;
      display:grid;
    }
    @media (max-width:990px) {
      transform: translate(-15%,0%);
      grid-template-columns: none;
      display:grid;
    }
    @media (max-width:1010px) and (max-height:680px) {
      transform: translate(-15%,10%);
      grid-template-columns: none;
      display:grid;
    }
    @media only screen and (max-width: 834px) and (max-height: 1196px) and (orientation: portrait)  {
    transform: translate(12%,-68%);
    grid-template-columns: none;
    display:grid;
    }
    @media (max-width:780px){
      transform: translate(10%,-105%);
    grid-template-columns: none;
    display:grid;
    }
    @media (max-width:770px) and (orientation: portrait){
      transform: translate(10%,-75%);
    grid-template-columns: none;
    display:grid;
    }
    @media (max-width:740px) and (max-height:920px) and (orientation: portrait){
      transform: translate(9%,-85%);
    grid-template-columns: none;
    display:grid;
    }
    @media (max-width:770px) and (max-height:800px) and (orientation: portrait){
      transform: translate(10%,-100%);
    grid-template-columns: none;
    display:grid;
    }
    @media (max-width:740px) and (max-height:760px) and (orientation: portrait){
      transform: translate(9%,-110%);
    grid-template-columns: none;
    display:grid;
    }
    @media (max-width:700px) and (max-height:760px) and (orientation: portrait){
      transform: translate(6%,-100%);
    }
    @media (max-width:650px) and (max-height:760px) and (orientation: portrait){
      transform: translate(3%,-100%);
    }
    @media (max-width:600px) and (max-height:760px) and (orientation: portrait){
      transform: translate(0%,-100%);
    }
    @media (max-width:590px) and (max-height:760px) and (orientation: portrait){
      transform: translate(-1%,-100%);
    }
    @media (max-width:550px) and (max-height:760px) and (orientation: portrait){
      transform: translate(3%,-105%);
    }
    @media (max-width:500px) and (max-height:760px) and (orientation: portrait){
      transform: translate(3%,-100%);
    }
    @media (max-width:420px) and (max-height:900px){
      transform: translate(-4%,-90%);
    }
    @media (max-width:420px) and (max-height:820px) {
      transform: translate(-4%,-100%);
    }
    @media (max-width:420px) and (max-height:740px) {
      transform: translate(-4%,-110%);
    }
    @media (max-width:380px) and (max-height:820px){
      transform: translate(-9%,-90%);
    }
    @media (max-width:380px) and (max-height:700px){
      transform: translate(-9%,-113%);
    }
    @media (max-width:325px){
      transform: translate(-14%,-120%);
    }
`

const Header = styled.div`
    @media only screen and (max-width: 1024px) and (max-height: 1467px) and (orientation: portrait)  {
    transform: translate(0%,-120%);
    }
    @media only screen and (max-width: 1024px) and (max-height: 1366px) and (orientation: portrait)  {
    transform: translate(0%,-120%);
    }
    @media only screen and (max-width: 834px) and (max-height: 1196px) and (orientation: portrait)  {
    transform: translate(0%,-120%);
    }
    @media (max-height:777px){
      transform: translate(0%,-110%);
    }
    @media (max-width:770px) and (orientation: portrait){
      transform: translate(0%,-90%);
    }
    @media (max-width:570px){
      transform: translate(4%,-60%);
    }
    @media (max-width:550px){
      transform: translate(0%,-110%);
    }
    @media (max-width:500px){
      transform: translate(0%,-60%);
    }
    @media (max-width:500px) and (max-height:760px) and (orientation: portrait){
      transform: translate(0%,-100%);
    }
    @media (max-width:420px){
      transform: translate(1%,-120%);
    }
    @media (max-width:380px){
      transform: translate(0%,-120%);
    }
    @media (max-width:330px){
      transform: translate(0%,-160%);
    }
`

const SpaceBySpace = styled.div`
    padding-top:1.5em;
    margin-right:-8em;
    @media (max-width: 1550px) and (max-height: 750px) and (orientation: landscape)  {
      padding-top:0.5em;
      margin-left:-1em;
    }
    @media (max-width:1280px){
      padding-top:1em;
      margin-left:2em;
    }
    @media only screen and (max-width: 1196px) and (max-height: 834px) and (orientation: landscape){
      padding-top:1em;
    }
    @media (max-width: 1090px) and (max-height: 630px){
      margin-left:4em;
    }
    @media (max-width: 1080px){
      margin-left:4em;
    }
    @media only screen and (max-width: 1024px) and (max-height: 1467px) and (orientation: portrait){
      padding-top:1em;
    }
    @media only screen and (max-width: 1024px) and (max-height: 1366px) and (orientation: portrait){
      padding-top:1em;
    }
    @media only screen and (max-width: 1024px) and (max-height: 768px) and (orientation: landscape){
      padding-top:1em;
      margin-left:4em;
    }
    @media only screen and (max-width: 834px) and (max-height: 1196px) and (orientation: portrait){
      padding-top:2em;
    }
    @media (max-width:780px) {
      padding-top:0.5em;
    }
    @media (max-width:770px) and (orientation: portrait){
      padding-top:1em;
    }
    @media (max-width:570px){
      padding-top:0.5em;
    }
    @media (max-width:500px){
      padding-top:0.5em;
    }
    @media (max-width:420px){
      padding-top:1em;
    }
    @media (max-width:380px){
      padding-top:0.5em;
    }
    @media (max-width:330px){
      padding-top:0.5em;
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
        colorBox: `${Color.new3}`
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

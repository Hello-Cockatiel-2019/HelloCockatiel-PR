import React, { Component } from 'react'
import styled from 'styled-components'
import MobileHeader from '../Core/MobileHeader';
import Field from './Field'
import {frontend,frontendContent,design,designContent,infra,infraContent,game,gameContent} from '../Core/Messages'

const AllContent = styled.div`
    transform: translate(7%,0%);
    
    @media (max-width: 2500px) and (orientation: landscape)  {
    transform: translate(7%,0%);
    }
    @media (max-width: 2200px) and (orientation: landscape)  {
    transform: translate(7%,0%);
    }
    @media (max-width: 2000px) and (orientation: landscape)  {
    transform: translate(7%,0%);
    }
    @media (max-width: 1850px) and (orientation: landscape)  {
    transform: translate(7%,0%);
    }
    @media (max-width: 1500px) and (orientation: landscape)  {
    transform: translate(5%,0%);
    }
    @media only screen and (min-width: 1467px) and (max-height: 1024px) and (orientation: landscape)  {
    transform: translate(5%,30%);
    }
    @media (max-width: 1400px) and (orientation: landscape)  {
    transform: translate(5%,20%);
    }
    @media only screen and (max-width: 1366px) and (orientation: landscape)  {
    transform: translate(5%,30%);
    }
    @media (max-width: 1300px) and (orientation: landscape)  {
    transform: translate(5%,30%);
    }
    @media only screen and (min-width: 1196px) and (max-height: 834px) and (orientation: landscape)  {
    transform: translate(-14%,-10%);
    }
    @media (max-width: 1200px) and (orientation: landscape)  {
    transform: translate(-12%,-20%);
    } 
    @media only screen and (min-width: 1024px) and (max-height: 1467px) and (orientation: portrait)  {
    transform: translate(25%,-40%);
    grid-template-columns: none;
    display:grid;
    height: 90vh;
    padding-top:25em;
    }
    @media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: portrait)  {
    transform: translate(26%,-40%);
    grid-template-columns: none;
    display:grid;
    height: 90vh;
    padding-top:20em;
    }
    @media only screen and (min-width: 1024px) and (max-height: 768px) and (orientation: landscape)  {
    transform: translate(6%,-10%);
    }
    /* @media (max-height: 900px) and (orientation: landscape)  {
    transform: translate(6%,20%);
    } */
    @media only screen and (min-width: 834px) and (max-height: 1196px) and (orientation: portrait)  {
    transform: translate(-21%,-30%);
    grid-template-columns: none;
    display:grid;
    height: 90vh;
    padding-top:10em;
    }
    @media (max-width:770px) and (orientation: portrait){
      transform: translate(-23%,-42%);
    grid-template-columns: none;
    display:grid;
    height: 90vh;
    padding-top:15em;
    }
    @media (max-width:570px){
      transform: translate(-17%,-20%);
    }
    @media (max-width:500px){
      transform: translate(-15%,-20%);
    }
    @media (max-width:420px) and (max-height:900px){
      height: 95vh;
      transform: translate(-7%,-42%);
    }
    @media (max-width:420px) and (max-height:812px) {
      height: 95vh;
      transform: translate(-7%,-46%);
    }
    @media (max-width:420px) and (max-height:736px) {
      height: 90vh;
      transform: translate(-9%,-40%);
      padding-top:8em;
    }
    @media (max-width:380px) and (max-height:820px){
      height: 95vh;
      transform: translate(-7%,-40%);
    }
    @media (max-width:380px) and (max-height:700px){
      height: 90vh;
      transform: translate(-9%,-23%);
      padding-top:1em;
    }
    @media (max-width:325px){
      transform: translate(-6%,-20%);
    }
`

const Header = styled.div`
    @media only screen and (min-width: 1024px) and (max-height: 1467px) and (orientation: portrait)  {
    transform: translate(2%,-90%);
    }
    @media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: portrait)  {
    transform: translate(2%,-120%);
    }
    @media only screen and (min-width: 834px) and (max-height: 1196px) and (orientation: portrait)  {
    transform: translate(2%,-120%);
    }
    @media (max-width:770px) and (orientation: portrait){
      transform: translate(0%,-80%);
    }
    @media (max-width:570px){
      transform: translate(4%,-60%);
    }
    @media (max-width:500px){
      transform: translate(0%,-60%);
    }
    @media (max-width:420px){
      transform: translate(0%,-90%);
    }
    @media (max-width:380px){
      transform: translate(0%,-120%);
    }
`

const SpaceBySpace = styled.div`
    padding-top:2em;
    padding-left:2em;
    @media screen and (min-width: 2500px) and (orientation: landscape){
      padding-top:2em;
    }
    @media (max-width: 2200px) and (orientation: landscape)  {
      padding-top:2em;
    }
    @media (max-width: 2000px) and (orientation: landscape)  {
      padding-top:2em;
    }
    @media screen and (max-width: 1850px) and (orientation: landscape){
      padding-top:2em;
    }
    @media screen and (max-width: 1500px) and (orientation: landscape){
      padding-top:2em;
    }
    @media (max-width: 1300px) and (orientation: landscape)  {
      padding-top:2em;
    }
    @media screen and (max-width: 1200px) and (orientation: landscape){
      padding-top:2em;
    }
    @media only screen and (min-width: 1196px) and (max-height: 834px) and (orientation: landscape){
      padding-top:1em;
    }
    @media only screen and (min-width: 1024px) and (max-height: 1467px) and (orientation: portrait){
      padding-top:2em;
    }
    @media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: portrait){
      margin-top:${props => props.mrt === 0 ? 0 : -50}px;
    }
    @media only screen and (min-width: 1024px) and (max-height: 768px) and (orientation: landscape){
      padding-top:1em;
    }
    @media only screen and (min-width: 834px) and (max-height: 1196px) and (orientation: portrait){
      padding-top:1em;
    }
    @media (max-width:770px) and (orientation: portrait){
      padding-top:-2em;
      margin-top:${props => props.mrt === 0 ? 0 : -50}px;
    }
    @media (max-width:570px){
      padding-top:0.5em;
    }
    @media (max-width:500px){
      padding-top:0.5em;
    }
    @media (max-width:420px){
      margin-top:${props => props.mrt === 0 ? 0 : -50}px;
      padding-top:0.5em;
    }
    @media (max-width:380px){
      margin-top:${props => props.mrt === 0 ? -8 : -70}px;
      padding-top:0.5em;
    }
    @media (max-width:325px){
      padding-top:0.5em;
    }
`
export default class index extends Component {
  state = {
    data: [
      {
        topic: `${frontend}`,
        content: `${frontendContent}` ,
        imgbird: "c1.png",
        imgframe: "frame.png",
        class: "justify-content-end",
        colorBox: "#CEBA53"
      },
      {
        topic: `${design}`,
        content: `${designContent}`,
        imgbird: "c2.png",
        imgframe: "frame.png",
        class: "justify-content-end",
        colorBox: "#D89E55"
      },
      {
        topic:`${infra}`,
        content: `${infraContent}`,
        imgbird: "c3.png",
        imgframe: "frame.png",
        class: "justify-content-end",
        colorBox: "#B4B1A6"
      },
      {
        topic: `${game}`,
        content:  `${gameContent}`,
        imgbird: "c4.png",
        imgframe: "frame.png",
        class: "justify-content-end",
        colorBox: "#B36E16"
      }
    ]
  }
  render() {
    return (
      <React.Fragment>
        <Header>
          <MobileHeader text="สาขาที่รับสมัคร" headerURl="plate-m2.png" />
        </Header>
        <AllContent className="row">
          {
            this.state.data.map((TC, i) => {
              return (
                <SpaceBySpace className={`d-flex col-lg-6 col-md-12 col-12 ${TC.class}`} mrt={i} key={i} >
                  <Field
                    topic={TC.topic}
                    content={TC.content}
                    colorBox={TC.colorBox}
                    imgbird={TC.imgbird}
                    imgframe={TC.imgframe}
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

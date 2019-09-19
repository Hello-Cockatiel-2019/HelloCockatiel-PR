import React, { Component } from 'react'
import styled from 'styled-components'
import MobileHeader from '../Core/MobileHeader';
import Field from './Field'
import {frontend,frontendContent,design,designContent,infra,infraContent,game,gameContent} from '../Core/Messages'

const AllContent = styled.div`
    transform: translate(7%,0%);
    
    @media only screen and (min-width: 1196px) and (max-height: 834px) and (orientation: landscape)  {
    transform: translate(-7%,-5%);
    }
    @media (min-width: 1300px) and (orientation: landscape)  {
    transform: translate(7%,0%);
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
    transform: translate(10%,-10%);
    }
    @media only screen and (min-width: 834px) and (max-height: 1196px) and (orientation: portrait)  {
    transform: translate(-21%,-30%);
    grid-template-columns: none;
    display:grid;
    height: 90vh;
    padding-top:10em;
    }
    @media (max-width:770px) and (orientation: portrait){
      transform: translate(-25%,-15%);
    grid-template-columns: none;
    display:grid;
    height: 80vh;
    }
    @media (max-width:570px){
      transform: translate(-17%,-20%);
    }
    @media (max-width:500px){
      transform: translate(-15%,-20%);
    }
    @media (max-width:420px) and (max-height:900px){
      height: 70vh;
      transform: translate(-7%,-15%);
    }
    @media (max-width:420px) and (max-height:812px) {
      height: 70vh;
      transform: translate(-7%,-17%);
    }
    @media (max-width:380px){
      height: 80vh;
      transform: translate(-7%,-22%);
    }
    @media (max-width:380px) and (max-height:820px){
      height: 80vh;
      transform: translate(-7%,-15%);
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
      transform: translate(0%,-60%);
    }
    @media (max-width:380px){
      transform: translate(0%,-120%);
    }
`

const SpaceBySpace = styled.div`
    padding-top:2em;
    padding-left:2em;
    
    @media only screen and (min-width: 1196px) and (max-height: 834px) and (orientation: landscape){
      padding-top:1em;
    }
    @media screen and (min-width: 1300px) and (orientation: landscape){
      padding-top:2em;
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

import React, { Component } from 'react'
import styled, { css } from 'styled-components'

import { Title } from '../Core/Text'
import { aboutHeader, majorHeader, faqsHeader } from '../Core/Messages'

import Register from '../Core/Register'

const paddingRightLeftFiveEM = css`
    padding-left: 5em;
    padding-right: 5em;
`

const paddingRightLeftTenEM = css`
    padding-left: 5em;
    padding-right: 5em;
`

const woodDivMobile = css`
    transform: translateY(-40%);
    margin-top:${props => props.mt === 0 ? 0 :
        props.mt === 1 ? -40 : -10}px;
`

const woodDivDesktop = css`
    transform: translateY(-40%);
        margin-top:${props => props.mt === 0 ? 0 :
        props.mt === 1 ? -70 : -40}px;
`

const Woodplate = styled.div `
    background-image: url('/images/Objects/${props => props.source}');
    background-repeat: no-repeat;
    background-size:contain;
    width:168px;
    height:127px;
    padding-top:3.9em;
    padding-right: 1em;
    margin-left:2em;
    margin-right:1em;
    @media only screen and (min-width: 768px) and (max-height: 1024px) and (orientation: portrait)  {
        padding-top:3.8em;
        margin-bottom:2em;
        padding-left:${props => props.pt === 0 ? 0.75 : 0}em;
    }
    @media (max-width:834px) and (max-height:750px) {
        padding-right:${props => props.pt === 0 ? 2 :
            props.pt === 1 ? 1 : 2}em;
    }
    @media only screen and (min-width: 834px) and (max-height: 1196px) and (orientation: portrait)  {
        width:250px;
        height:180px;
        padding-top:5.5em;
        padding-right:${props => props.pt === 0 ? 1 :
                        props.pt === 1 ? 2 : 2}em;
    }
    @media only screen and (min-width: 1024px) and (max-height: 1468px) and (orientation: portrait) {
        width:270px;
        height:200px;
        padding-top:6em;
        padding-right:${props => props.pt === 0 ? 1 :
        props.pt === 1 ? 2 : 2}em;
    }
    @media only screen and (min-width: 1024px) and (max-height: 1370px) and (orientation: portrait)  {
        width:270px;
        height:200px;
        padding-top:6em;
        padding-right:${props => props.pt === 0 ? 1 :
        props.pt === 1 ? 2 : 2}em;
    }
    @media screen and (max-width:834px) and (orientation: landscape){
        width:190px;
        height:150px;
        padding-top:4.6em;
        padding-left:${props => props.pt===0 ? 1.2 :
                    props.pt===1 ? 0 : 0}em;
    }
    @media screen and (max-width:767px) and (orientation: portrait){
        width:190px;
        height:150px;
        padding-top:4.3em;
        padding-left:0em;
    }
    @media screen and (max-width:748px) and (orientation: portrait){
        padding-top:4.5em;
        padding-left:${props => props.pt === 0 ? 1 :
        props.pt === 1 ? 0 : 1}em;
    }
    @media screen and (max-width:600px) {
        width:168px;
        height:127px;
        padding-right: 1em;
        padding-top:3.9em;
        margin-left:2em;
        margin-right:1em;
    }
    @media screen and (max-width:500px) {
        padding-left:0em;
        margin-right:1em;
    }
    @media screen and (max-width:375px) {
        width:148px;
        height:107px;
        padding-right: 1em;
        padding-top:3.1em;
        padding-left:${props => props.pt === 0 ? 0.5 : 0}em;
        margin-right:1em;
    }
    @media screen and (max-width:320px) {
        padding-left:${props => props.pt === 0 ? 0.5 : 0}em;
    }
`

const HeadLogo = styled.img`
    width: 600px;
    height: 240px;
    @media only screen and (min-width: 1024px) and (max-height: 1468px) and (orientation: portrait) {
        width: 600px;
        height: 240px;
    } 
    @media only screen and (min-width: 769px) and (max-height: 784px) and (orientation: portrait)  {
        width: 420px;
        height: 168px;
    }   
    @media screen and (max-width:834px) and (orientation: landscape) {
        width: 420px;
        height: 168px;
    }
    @media screen and (max-width:768px) and (orientation: portrait){
        width: 420px;
        height: 168px;
    }
    @media screen and (max-width:600px) {
        width: 320px;
        height: 128px;
    }
    @media screen and (max-width:320px) {
        width: 300px;
        height: 120px;
    }
`

const LogoDiv = styled.div`
    transform: translateY(2vh);
    @media only screen and (min-width: 769px) and (max-height: 784px) and (orientation: portrait)  {
        transform: translateY(-3vh);
    }  
    @media screen and (max-width:768px) {
        transform: translateY(5vh);
    }
    @media screen and (max-height:750px){
        margin-top:-20px;
    }
`

const WoodDiv = styled.div`
    @media screen and (max-width:768px) and (orientation: portrait){
        ${ woodDivDesktop }
    }
    @media only screen and (max-width: 829px) and (max-height: 673px){
        margin-top: 0vh;
    } 
    @media only screen and (min-width: 769px) and (max-height: 784px) and (orientation: portrait)  {
        margin-top: -3vh;
    } 
    @media screen and (max-width:834px) and (orientation: landscape) {
        ${ woodDivDesktop }
    }
    @media screen and (max-width:420px) {
        ${ woodDivMobile }
    }
    @media screen and (max-width:320px) {
        ${ woodDivMobile }
    }
`

const MenuDiv = styled.div`
    @media only screen and (min-width: 767px) and (max-height: 1024px) and (orientation: portrait)  {
        margin-top:100px!important;
        ${ paddingRightLeftFiveEM }
    }   
    @media only screen and (min-width: 769px) and (max-height: 784px) and (orientation: portrait)  {
        margin-top:0px!important;
        ${ paddingRightLeftFiveEM }
    }   
    @media only screen and (min-width: 834px) and (max-height: 1112px) and (orientation: portrait)  {
        margin-top:100px!important;
        ${ paddingRightLeftFiveEM }
    }
    @media only screen and (min-width: 834px) and (max-height: 1196px) and (orientation: portrait) {
        margin-top:60px!important;
        ${ paddingRightLeftTenEM }
    }
    @media only screen and (min-width: 1024px) and (max-height: 1370px) and (orientation: portrait)  {
        margin-top:100px!important;
        ${ paddingRightLeftTenEM }
    }
    @media only screen and (min-width: 1024px) and (max-height: 1468px) and (orientation: portrait) {
        margin-top:100px!important;
        ${ paddingRightLeftTenEM }
    } 
    @media screen and (max-width:789px) and (orientation: portrait){
        margin-top:55px;
    }
     @media screen and (max-width:900px) and (orientation:landscape) {
        margin-top:50px;
    }
    @media screen and (max-width:834px) and (orientation: landscape){
        margin-top:50px;
    }
    @media screen and (max-width:420px) {
        margin-top: 60px;
    }
    @media screen and (max-width:380px) {
        margin-top:50px;
    }
    @media screen and (max-width:320px) {
        margin-top:40px;
    }
`

const A = styled.a`
  text-decoration:none;;

  &:hover{
    text-decoration:none;
  }
`

const TitleResgister = styled(Title)`
    @media only screen and (min-width: 768px) and (max-height: 1024px) and (orientation: portrait)  {
        font-size:2em;
    }
     @media only screen and (min-width: 834px) and (max-height: 1196px) and (orientation: portrait)  {
        font-size:2.25em;
    }
    @media only screen and (min-width: 1024px) and (max-height: 1370px) and (orientation: portrait)  {
       font-size:2em;
    }
    @media only screen and (min-width: 1024px) and (max-height: 1468px) and (orientation: portrait) {
        font-size:2.75em;
    }
    @media screen and (max-width:900px) and (max-height: 1080px) {
        font-size:1.75em;
    }
    @media screen and (max-width:601px) {
        font-size:1.5em;
    }
    @media only screen and (max-width:578px)  {
        font-size:auto;
    }
`

const RegisDiv = styled.div `
    border:none;
    @media only screen and (max-width:834px) and (orientation: landscape) {
        margin-top: -10vh!important;
    }
    @media only screen and (min-width: 768px) and (max-height: 1024px) and (orientation: portrait)  {
        margin-top: 0!important;
    }
    @media only screen and (min-width: 769px) and (max-height: 784px) and (orientation: portrait)  {
        margin-top: -4vh!important;
    } 
    @media only screen and (min-width: 834px) and (max-height: 1112px) and (orientation: portrait)  {
        margin-top: 0!important;
    }
    @media screen and (max-width:768px) and (min-height: 1026px) and (orientation: portrait){
        margin-top: -10vh!important;
    }
    @media only screen and (max-width:776px) {
        margin-top: -6vh!important;
    }
    @media only screen and (max-width:650px) {
        margin-top: -4vh!important;
    }
    @media only screen and (max-width:420px) {
        margin-top: -3vh!important;
    }
    @media only screen and (max-width:380px) {
        margin-top: -5vh!important;
    }
    @media only screen and (max-width:320px) {
        margin-top:-40px!important;
    }
`

const CIImg = styled.img`
    width:200px;
    height:65.5px;
    @media screen and (max-width:768px) {
        width:90px;
        height:29.5px;
    }
`

export default class Home extends Component {
    state = {
        plate : [
            {
                imgURL: 'Group-3.png',
                text: `${ aboutHeader }`,
                class: 'justify-content-start',
                link: "#About"
            },
            {
                imgURL: 'Group-3.png',
                text: `${ majorHeader }`,
                class: 'justify-content-end',
                link: "#Majors"
            },
            {
                imgURL:'Group-3.png',
                text: `${ faqsHeader }`,
                class: 'justify-content-start',
                link: "#FAQs"
            }
        ]
    }

    handleCilck = async (i) => {
        let number = await i+1
        if (number >= 0) {
            this.props.clickHome(number);
        }
    }

    render() {
        return (
                <div className="row m-0">
                    <LogoDiv className="col-12 d-flex justify-content-center">
                        <HeadLogo src="/images/Objects/logo_web.png" />
                    </LogoDiv>
                    <div className="d-flex col-12 mt-2 justify-content-center">
                        <CIImg src="/images/Objects/ci.png"  />
                    </div>
                    <MenuDiv>
                        {
                            this.state.plate.map((data,i) => {
                                return (
                                    <A href={data.link} key={i}>
                                        <WoodDiv className={`d-inline-flex col-12 ${data.class}`} key={i} mt={i}>
                                            <button className="btn p-0" key={i} onClick={() => this.handleCilck(i)}>
                                                    <Woodplate source={data.imgURL} key={i} pt={i}>
                                                        <TitleResgister key={i}>{data.text}</TitleResgister>
                                                    </Woodplate>
                                            </button>
                                        </WoodDiv>
                                    </A>
                                )
                            })
                        }
                    </MenuDiv>
                    <RegisDiv className="mt-3 mt-sm-5 col-12 d-flex justify-content-center">
                        <Register />
                    </RegisDiv>
                </div>
            
        )
    }
}

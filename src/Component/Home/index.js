import React, { Component } from 'react'
import styled from 'styled-components'

import Register from '../Core/Register'
import { Title } from '../Core/Text'

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
         padding-left:${props => props.pt === 0 ? 0.75 : 0}em;
    }
    @media only screen and (min-width: 1024px) and (max-height: 1468px) and (orientation: portrait) {
        width:210px;
        height:170px;
        padding-top:5em;
        padding-left:${props => props.pt === 0 ? 1.2 :
            props.pt === 1 ? 0 : 0}em;
    }
    @media only screen and (min-width: 1024px) and (max-height: 1370px) and (orientation: portrait)  {
        width:210px;
        height:170px;
        padding-top:5em;
        padding-left:${props => props.pt === 0 ? 1.2 :
            props.pt === 1 ? 0 : 0}em;
    }
    @media screen and (max-width:834px) and (orientation: landscape){
        width:190px;
        height:150px;
        padding-top:4.3em;
        padding-left:${props => props.pt===0 ? 1.2 :
                    props.pt===1 ? 0 : 0}em;
    }
    @media screen and (max-width:600px) {
        width:168px;
        height:127px;
        padding-right: 1em;
        padding-top:3.9em;
        margin-left:2em;
        margin-right:1em;
    }
    @media screen and (max-width:375px) {
        width:148px;
        height:107px;
        padding-right: 1em;
        padding-top:3.1em;
        padding-left:${props => props.pt === 0 ? 0.75 : 0}em;
        margin-right:1em;
    }
    @media screen and (max-width:320px) {
        padding-left:${props => props.pt === 0 ? 0.5 : 0}em;
    }
`

const HeadLogo = styled.img`
     width: 500px;
    height: 220.93px;
    @media screen and (max-width:834px) and (orientation: landscape) {
        width:60%;
    }
    @media screen and (max-width:600px) {
        width: 320px;
        height: 120.93px;
    }
    @media screen and (max-width:320px) {
        width: 300px;
        height: 100px;
    }
`

const LogoDiv = styled.div`
    transform: translateY(-7vh);
    @media screen and (max-width:375px) {
        transform: translateY(-8vh);
    }
    @media screen and (max-width:320px) {
        transform: translateY(-8vh);
    }
`

const WoodDiv = styled.div`
    @media screen and (max-width:834px) {
        transform: translateY(-40%);
        margin-top:${props => props.mt === 0 ? 0 :
        props.mt === 1 ? -70 : -40}px
    }
    @media screen and (max-width:420px) {
        transform: translateY(-40%);
        margin-top:${props => props.mt === 0 ? 0 :
        props.mt === 1 ? -40 : -10}px
    }
    @media screen and (max-width:320px) {
        transform: translateY(-15%);
        margin-top:${props => props.mt === 0 ? 0 :
        props.mt === 1 ? -40 : -10}px;
    }
`

const MenuDiv = styled.div`

    @media only screen and (min-width: 768px) and (max-height: 1024px) and (orientation: portrait)  {
        padding-left:5em;
        padding-right:5em;
    }
    @media only screen and (min-width: 834px) and (max-height: 1112px) and (orientation: portrait)  {
        padding-left:5em;
        padding-right:5em;
    }
    @media only screen and (min-width: 834px) and (max-height: 1196px) and (orientation: portrait) {
        padding-left:10em;
        padding-right:10em;
    }
    @media only screen and (min-width: 1024px) and (max-height: 1370px) and (orientation: portrait)  {
        padding-left:10em;
        padding-right:10em;
    }
    @media only screen and (min-width: 1024px) and (max-height: 1468px) and (orientation: portrait) {
        padding-left:10em;
        padding-right:10em;
    } 
    @media screen and (max-width:834px) and (orientation: landscape){
        margin-top:-20px;
    }
    @media screen and (max-width:375px) {
        margin-top:-20px;
    }
    @media screen and (max-width:320px) {
        margin-top:-40px;
    }
`

const Facebook = styled.img `
    width: 44px;
    margin-top:.3em;
     @media screen and (max-width:834px) and (orientation: landscape){
        width: 70px; 
    }
    @media only screen and (min-width: 768px) and (max-height: 1024px) and (orientation: portrait)  {
        width: 70px;     
    }
    @media only screen and (min-width: 834px) and (max-height: 1196px) and (orientation: portrait) {
       width: 70px; 
    }
    @media only screen and (min-width: 1024px) and (max-height: 1370px) and (orientation: portrait)  {
        width: 70px; 
    }
    @media only screen and (min-width: 1024px) and (max-height: 1468px) and (orientation: portrait) {
        width: 70px; 
    } 
`

const A = styled.a`
  text-decoration:none;;

  &:hover{
    text-decoration:none;
  }
`

const TitleRes = styled(Title)`
    @media only screen and (min-width: 1024px) and (max-height: 1468px) and (orientation: portrait) {
        font-size:2em;
    }
    @media only screen and (min-width: 1024px) and (max-height: 1370px) and (orientation: portrait)  {
       font-size:2em;
    }
`

const RegisDiv = styled.div `
    @media only screen and (min-width: 768px) and (max-height: 1024px) and (orientation: portrait)  {
        margin-top:0px!important;
    }
    @media only screen and (max-width:834px) and (orientation: landscape) {
        margin-top: -10vh!important;
    }
    @media only screen and (max-width:420px) {
        margin-top: -3vh!important;
    }
    @media only screen and (max-width:380px) {
        margin-top: -8vh!important;
    }
    @media only screen and (max-width:320px) {
        margin-top:-20px!important;
    }
`

export default class Home extends Component {
    state = {
        plate : [
            {
                imgURL: 'Group 6.png',
                text: 'ข้อมูลโครงการ',
                class: 'justify-content-start',
                link: "#About"
            },
            {
                imgURL: 'Group 5.png',
                text: 'สาขาที่รับสมัคร',
                class: 'justify-content-end',
                link: "#Majors"
            },
            {
                imgURL:'Group 7.png',
                text: 'FAQs',
                class: 'justify-content-start',
                link: "#FAQs"
            }
        ]
    }

    handleCilck = async (i) => {
        let number = await i
        if (number >= 0) {
            this.props.clickHome(number);
        }
    }

    render() {
        return (
                <div className="row m-0 overflow-hidden">
                    <div className="col-12 d-flex justify-content-end ">
                        <A href="https://www.facebook.com/ThisPz">
                            <Facebook src="/images/Objects/facebook.png" />
                        </A>
                    </div>
                    <LogoDiv className="col-12 d-flex justify-content-center">
                        <HeadLogo src="/images/Objects/Logo.png" />
                    </LogoDiv>
                    <MenuDiv>
                        {
                            this.state.plate.map((data,i) => {
                                return (
                                    <WoodDiv className={`d-inline-flex col-12 ${data.class}`} key={i} mt={i}>
                                        <button className="btn p-0" key={i} onClick={() => this.handleCilck(i)}>
                                            <A href={data.link} key={i}>
                                                <Woodplate source={data.imgURL} key={i} pt={i}>
                                                    <TitleRes key={i}>{data.text}</TitleRes>
                                                </Woodplate>
                                            </A>
                                        </button>
                                    </WoodDiv>

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

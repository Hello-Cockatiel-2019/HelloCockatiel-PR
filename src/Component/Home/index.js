import React, { Component } from 'react'
import styled from 'styled-components'

import Register from '../Core/Register'
import { Title } from '../Core/Text'

const Woodplate = styled.div `
    background-image: url('/images/Objects/${props => props.source}');
    background-repeat: no-repeat;
    width:168px;
    height:127px;
    padding-top:3.9em;
    padding-right: 1em;
    margin-left:2em;
    margin-right:1em;
    
`

const HeadLogo = styled.img`
    width:90%;
    @media screen and (max-width:320px) {
        width:85%;
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
    @media screen and (max-width:320px) {
        margin-top:-20px;
    }
`

const LogoDiv = styled.div`
    @media screen and (max-width:375px) {
        margin-top:-50px;
        margin-bottom:0;
    }
`

const Facebook = styled.img `
    width: 44px;
    margin-top:.3em;
`

const A = styled.a`
  text-decoration:none;;

  &:hover{
    text-decoration:none;
  }
`

const RegisDiv = styled.div `
    @media only screen and (max-width:360px) {
        margin-top:0px!important;
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
                <div className="row">
                    <div className="col-12 d-flex justify-content-end ">
                        <A href="https://www.facebook.com/ThisPz">
                            <Facebook src="/images/Objects/facebook.png" />
                        </A>
                    </div>
                    <LogoDiv className="col-12 d-flex justify-content-center">
                        <HeadLogo src="/images/Objects/logo.png" />
                    </LogoDiv>
                    <MenuDiv>
                        {
                            this.state.plate.map((data,i) => {
                                return (
                                    <div className={`d-inline-flex col-12 ${data.class}`} key={i}>
                                        <button className="btn p-0" key={i} onClick={() => this.handleCilck(i)}>
                                            <A href={data.link} key={i}>
                                                <Woodplate source={data.imgURL}>
                                                    <Title>{data.text}</Title>
                                                </Woodplate>
                                            </A>
                                        </button>
                                    </div>

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

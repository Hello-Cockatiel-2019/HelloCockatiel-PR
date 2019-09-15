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
const HeadLogo = styled.img `
    width:72%;
`

const Facebook = styled.img `
    width: 44px;
    margin-top:.3em;
`

const RegPlate = styled.div `
    background-image: url('/images/Objects/${props => props.source}');
    background-repeat: no-repeat;
    width:233px;
    height:107px;
    text-align:center;
    box-shadow: black 2px 2px 5px;
    padding-top:2.3em;
    margin-top:1em;
    margin-left:1em;
    @media only screen and (max-width:320px) {
        margin-left:0em;
        width:225px;
        height:100px;
    }
`

const A = styled.a`
  text-decoration:none;;

  &:hover{
    text-decoration:none;
  }
`

const RespPad = styled.div `
@media only screen and (max-width:320px) {
        margin-left:2em;
        width:80px;
        height:1px;
    }
`
export default class Home extends Component {
    state = {
        plate : [
            {
                imgURL:'Group 5.png',
                text: 'สาขาที่รับสมัคร',
                class: 'justify-content-start',
                link: "#Majors"
            },
            {
                imgURL:'Group 6.png',
                text: 'ข้อมูลโครงการ',
                class: 'justify-content-end',
                link: "#About"
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
                        <div className="col-10"></div>
                        <div className="col-2">
                            <Facebook src="/images/Objects/facebook.png" />
                        </div>
                    <div className="col-2"></div>
                        <HeadLogo src="/images/Objects/logo.png" />
                    {
                        this.state.plate.map((data,i) => {
                            return (
                                <div className={`d-inline-flex col-12 ${data.class}`}>
                                    <button className="btn" key={i} onClick={() => this.handleCilck(i)}>
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
                    <div className="mt-5 col-12 d-flex justify-content-center">
                            <Register />
                    </div>
                </div>
            
        )
    }
}

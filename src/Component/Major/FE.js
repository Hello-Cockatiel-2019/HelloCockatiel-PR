import React, { Component } from 'react'
import styled from 'styled-components'
import { Small, Small2 } from '../Core/Text'

const FEbg = styled.div`
    background-color :#CEBA52;
    opacity: 0.9;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
    width: 27em;
    height: 10em;
    margin-right:-2em;
    @media (max-width: 320px){
        width:18em;
        height:7.5em;
    }
    @media (min-width: 321px) and (max-width:375px){
        width:18em;
        height:7.5em;
        margin-left:1.6em;
    }
    @media (min-width: 376px) and (max-width:414px){
        width:18em;
        height:7.5em;
        margin-left:3em;
    }
    @media only screen and (min-width: 768px) and (max-height: 1024px) and (orientation: portrait){
        width:28em;
        height:10em;
        margin-left:7em;
    }
    @media only screen and (min-width: 1024px) and (max-height: 768px) and (orientation: landscape){
        width:25em;
        height:10em;
    }
    @media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: portrait){
        width:32em;
        height:10em;
        margin-left:13em;
    }
    @media only screen and (min-width: 1366px) and (max-height: 1024px) and (orientation: landscape){
        width:28em;
        height:12em;
    }
`
const Bird = styled.img`
    padding-left:2em;
    padding-top:0.7em;
    width:7.5em;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
    @media (max-width: 320px){
        width:6em;
        margin-top:-0.3em;
        margin-left:-1em;
    }
    @media (min-width: 321px) and (max-width:375px){
        width:6em;
        margin-top:-0.3em;
        margin-left:-1em;
    }
    @media (min-width: 376px) and (max-width:414px){
        width:6em;
        margin-top:-0.3em;
        margin-left:-1em;
    }
    @media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: portrait) {
        margin-left:1.5em;
    }
`
const Frame = styled.img`
    margin-left:2em;
    width:6em;
    position:absolute;
    z-index: 2;
    padding-top:6.2em;
    margin-left:-5.7em;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
    @media (max-width: 320px){
        width:4.5em;
        margin-left:-4.2em;
        padding-top:4.4em;
    }
    @media (min-width: 321px) and (max-width:375px){
        width:4.5em;
        margin-left:-4.2em;
        padding-top:4.4em;
    }
    @media (min-width: 376px) and (max-width:414px){
        width:4.5em;
        margin-left:-4.2em;
        padding-top:4.4em;
    }
    @media only screen and (min-width: 768px) and (max-height: 1024px) and (orientation: portrait){
        
    }
`
const Text = styled(Small)`
    font-family: Quark;
    font-size: 18px;
    line-height: 25px;
    letter-spacing: 0.05em;
    position:absolute;
    z-index: 3;
    padding-left:8em;
    margin-top:-4.8em;
    color: #000000;
    padding-right:8em;
    @media (max-width: 320px){
        line-height: 15px;
        padding-top:0.5em;
        margin-left:-1em;
        padding-right:2em;
    }
    @media (min-width: 321px) and (max-width:375px){
        line-height: 15px;
        padding-top:0.5em;
        margin-left:-1em;
        padding-right:4em;
    }
    @media (min-width: 376px) and (max-width:414px){
        line-height: 15px;
        padding-top:0.5em;
        margin-left:-1em;
        padding-right:5em;
    }
    @media only screen and (min-width: 768px) and (max-height: 1024px) and (orientation: portrait){
        line-height: 25px;
        margin-top:-6em;
        margin-left:4em;
        padding-right:13em;
    }
    @media only screen and (min-width: 1024px) and (max-height: 768px) and (orientation: landscape){
        line-height: 25px;
        margin-top:-5em;
        margin-left:0em;
        padding-right:4em;
    }
    @media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: portrait){
        line-height: 25px;
        margin-top:-6em;
        margin-left:7em;
        padding-right:20em;
    }
    @media only screen and (min-width: 1366px) and (max-height: 1024px) and (orientation: landscape){
        line-height: 25px;
        margin-top:-5em;
        margin-left:1em;
        padding-right:9em;
    }
`
const Topic = styled(Small2)`
    font-family: Quark;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    letter-spacing: 0.05em;
    color: #FFFFFF;
    position:absolute;
    z-index: 4;
    padding-top:0.7em;
    padding-left:2.7em;
    @media (max-width: 320px) {
        margin-left:-0.8em;
        margin-top:-0.1em;
    }
    @media (min-width: 321px) and (max-width:375px){
        margin-left:-0.8em;
        margin-top:-0.1em;
    }
    @media (min-width: 376px) and (max-width:414px){
        margin-left:-0.8em;
        margin-top:-0.1em;
    }
    @media only screen and (min-width: 768px) and (max-height: 1024px) and (orientation: portrait){
        margin-left:1.5em;
        margin-top:0.3em;
    }
    @media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: portrait) {
        margin-left:3.5em;
    }
`

export default class FE extends Component {
    render() {
        return (
            <FEbg>
                <Bird src="/images/Objects/c1.png" />
                <Topic>
                    Front-End
                </Topic>
                <Text>
                    <div>
                    ในสาขานี้จะเริ่มสอนตั้งแต่พื้นฐาน HTML CSS และ JavaScript และยังลงลึกไปถึงการเขียนโค้ดที่เป็นระเบียบและง่ายต่อการใช้งาน นอกจากนี้ยังสอนการนำ Git มาใช้งานเพื่อ ช่วยให้การสร้างเว็บไซต์ของเราสะดวกยิ่งขึ้น
                    </div>
                </Text>
                <Frame src="/images/Objects/frame.png" />
            </FEbg>
        )
    }
}

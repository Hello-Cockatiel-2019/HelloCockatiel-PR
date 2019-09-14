import React, { Component } from 'react'
import styled from 'styled-components'
import { Small, Small2 } from '../Core/Text';

const GMbg = styled.div`
    background-color :#ACA89C;
    opacity: 0.9;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
    width: 27em;
    height: 10em;
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
    @media only screen and (min-width: 834px) and (max-height: 1196px) and (orientation: portrait){
        width:30em;
        height:10em;
        margin-left:6.5em;
    }
    @media only screen and (min-width: 1196px) and (max-height: 834px) and (orientation: landscape){
        width:28em;
        height:10em;
    }
`
const Bird = styled.img`
    padding-left:2em;
    padding-top:0.7em;
    width:7.5em;
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
    line-height: 25px;
    letter-spacing: 0.05em;
    position:absolute;
    z-index: 3;
    padding-left:8em;
    margin-top:-4.8em;
    color: #000000;
    padding-right:7em;
    @media (max-width: 320px){
        line-height: 15px;
        padding-top:0.5em;
        margin-left:-1em;
        padding-right:1em;
    }
    @media (min-width: 321px) and (max-width:375px){
        line-height: 15px;
        padding-top:0.5em;
        margin-left:-1em;
        padding-right:3.2em;
    }
    @media (min-width: 376px) and (max-width:414px){
        line-height: 15px;
        padding-top:0.5em;
        margin-left:-1em;
        padding-right:4.5em;
    }
    @media only screen and (min-width: 768px) and (max-height: 1024px) and (orientation: portrait){
        line-height: 25px;
        margin-top:-6em;
        margin-left:4em;
        padding-right:12em;
    }
    @media only screen and (min-width: 1024px) and (max-height: 768px) and (orientation: landscape){
        line-height: 20px;
        margin-top:-5em;
        margin-left:0em;
        padding-right:4em;
    }
    @media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: portrait){
        line-height: 25px;
        margin-top:-6em;
        margin-left:7em;
        padding-right:18em;
    }
    @media only screen and (min-width: 1366px) and (max-height: 1024px) and (orientation: landscape){
        line-height: 25px;
        margin-top:-5em;
        margin-left:1em;
        padding-right:7em;
    }
    @media only screen and (min-width: 834px) and (max-height: 1196px) and (orientation: portrait){
        line-height: 25px;
        margin-top:-6em;
        margin-left:5em;
        padding-right:10em;
    }
    @media only screen and (min-width: 1196px) and (max-height: 834px) and (orientation: landscape){
        line-height: 25px;
        margin-top:-5em;
        margin-left:1em;
        padding-right:6em;
    }
`
const Topic = styled(Small2)`
    line-height: 22px;
    text-align: center;
    letter-spacing: 0.05em;
    color: #FFFFFF;
    position:absolute;
    z-index: 4;
    padding-top:0.7em;
    padding-left:3.5em;
    @media (max-width: 320px) {
        margin-left:-0.7em;
        margin-top:-0.1em;
    }
    @media (min-width: 321px) and (max-width:375px){
        margin-left:-0.7em;
        margin-top:-0.1em;
    }
    @media (min-width: 376px) and (max-width:414px){
        margin-left:-0.7em;
        margin-top:-0.1em;
    }
    @media only screen and (min-width: 768px) and (max-height: 1024px) and (orientation: portrait){
        margin-left:1.5em;
        margin-top:0.3em;
    }
    @media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: portrait){
        margin-left:3.5em;
    }
    @media only screen and (min-width: 834px) and (max-height: 1196px) and (orientation: portrait){
        margin-left:1.5em;
    }
`

export default class GM extends Component {
    render() {
        return (
            <GMbg>
                <Bird src="/images/Objects/c3.png" />
                <Topic>
                    Game
                </Topic>
                <Text>
                    <div>
                    ในสาขานี้จะพาไปทำความรู้จักกับ Game ให้มากขึ้น และได้ลองสร้าง Game สำหรับ เล่นบนหน้าเว็บด้วย โดยตั้งแต่พื้นฐาน การใช้งาน Git การใช้ Command Line เบื้องต้น การวาง Object ใส่ Animation และได้เรียนรู้องค์ประกอบอื่น ๆ อีก มากมาย
                    </div>
                </Text>
                <Frame src="/images/Objects/frame.png" />
            </GMbg>
        )
    }
}

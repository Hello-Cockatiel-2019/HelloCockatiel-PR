import React, { Component } from 'react';
import styled from 'styled-components'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min'
import 'bootstrap/dist/js/bootstrap.min'

import GlobalStyle from './GlobalStyle'
import { Desktop, Mobile } from './Hidden'
import { HamburgerDiv } from './Hamburger'
import { Title } from './Text';

import Home from '../Home'
import Background from './Background'
import NavButton from './NavButton';
import Register from './Register';
import ClickChange from './ClickChange';
import ChangeSize from './ChangeSize'

const Div = styled.div`
    /* transform :  translateY(-30%); */
`

const DivBlur = styled.div`
    filter :  blur(${props => props.blur ? props.blur : 0}px);
`

const SideBarSection = styled.div`
    @media only screen and (min-width: 1366px) and (max-height: 1024px) {
        /* transform :  translateY(75%); */
    }
    @media only screen and (min-width: 1370px) and (max-height: 850px) {
        /* transform :  translateY(55%); */
    }
    /* @media screen and (max-width:1199px) {
        left:-3vw;
        top: 5vh;
    }
    @media screen and (max-width:1024px) {
        left:-4vw;
        top: 5vh;
    }
    @media screen and (max-width:991.5px) {
        top: 10.5vh;
    }
    @media screen and (max-width:865px) {
        left:-6vw;
    } */
`

const Content = styled.div`
    transform: translateY(-70%);
    /* @media screen and (max-width:2500px) {
        left: 10vw;
        top: -50vh;
    }
    @media screen and (max-width:1469px) {
        top: -75vh;
    }
    @media screen and (max-width:1199px) {
        left: -20vw;
        top: 2vh;
    }
    @media screen and (max-width:1196px) and (max-height:750px){
        margin-top:50vh;
    }
    @media screen and (max-width:1196px) {
        left: -5vw;
        top: 20vh;
    }
    @media screen and (max-width:1024px) {
        left: -20vw;
    }
    @media screen and (max-width:980px) {
        left: -18vw;
    }
    @media screen and (max-width:960px) {
        left: -10vw;
    }
    @media screen and (max-width:800px) {
        left: -30vw;
        top: 15vh;
    }
    @media screen and (max-height:750px) and (orientation: landscape){
        top: 0vh;
    } */
`

const RegiserDiv = styled.div`
    transform:translate(-20%,20%);
    @media screen and (max-width:1201.5px) {
        top: -50px;
    }
    @media screen and (max-width:1199.5px) {
        left: 80vw;
        top: -400px;
    }
    @media screen and (max-width : 991.5px) and (max-height:850px){
        top: -420px;
    }
`

const Logo = styled.img`
    width: 693.28px;
    height: 262px;
    top: 19px;
    z-index: 100;
    @media screen and (max-width:900px) {
        width: 610px;
        height: 220px; 
    }
    @media screen and (max-height:750px) and (orientation: landscape){
        width: 560px;
        height: 220px; 
    }
`

const HomeDiv = styled.div`
    position:absolute;
    z-index:100;
    transform:translateY(5%);
    display : ${props => props.homeDisplay ? props.homeDisplay : 'block'};
    @media screen and (max-width:320px) {
        transform:translateY(0%);
    }
`

const Facebook = styled.img`
    width: 44px;
    height: 44px;
`

const FacebookDiv = styled(Desktop)`
    /* padding-top:10vh; */
        transform :  translateY(-100%);
    /* @media only screen and (min-width: 1366px) and (max-height: 1024px) {
    }
    @media only screen and (min-width: 1366px) and (max-height: 850px) {
        margin-top: -16vh!important;
    }
    @media only screen and (min-width: 1366px) and (max-height: 830px) {
        margin-top: -20vh!important;
    }
    @media only screen and (min-width: 1366px) and (max-height: 800px) {
        margin-top: -25vh!important;
    }
    @media screen and (max-width:1199px) and (max-height: 850px) {
        padding-top:0;
    }
    @media screen and (max-width:1199px) and (max-height: 750px) {
        margin-top: -40vh!important;
    }
    @media screen and (max-width:1199px) and (max-height: 705px) {
        margin-top: -45vh!important;
    }
    @media screen and (max-width:991px) and (max-height: 850px) {
        padding-top:25vh;
    }
    @media screen and (max-width:991px) and (max-height: 750px) {
        margin-top: -60vh!important;
    }
    @media screen and (max-width:991px) and (max-height: 705px) {
        margin-top: -65vh!important;
    }
    @media screen and (max-height:850px) {
        margin-top:-5vh;
    }
    @media screen and (max-height:830px) {
        margin-top:-10vh;
    }
    @media screen and (max-height:795px) {
        margin-top:-15vh;
    }
    @media screen and (max-height:720px) {
        margin-top:-17vh;
    }
    @media screen and (max-height:700px) {
        margin-top:-19vh;
    }
    @media screen and (max-height:680px) {
        margin-top:-23vh;
    } */
`

const A = styled.a`
  text-decoration:none;;

  &:hover{
    text-decoration:none;
  }
`

const Hidden = styled.div`

    @media(orientation:portrait) and (max-width: 319px){
        display: none;
    }
    @media(orientation:landscape) and (max-height: 600px){
        display: none;
    }
`

export default class NavBar extends Component {
        
    state = {
        id: 0,
        blur: 0,
        displayHamburger:'none',
        homeDisplay: 'block',
        mobileDisplay: 'none',
        slide:0,
        width: '180',
        height: 'auto'
    }

    changeClick = (i) => {
        this.setState({
            id: i
        })
    }

    clickHome = (i) => {
        this.setState({
            id: i,
            mobileDisplay: 'block',
            homeDisplay: 'none',
            displayHamburger: 'block',
        })
    }
    changeBlur = () => {
        if(this.state.blur===2){
            this.setState({
                blur: 0
            })
        }else{
            this.setState({
                blur: 2
            })
        }
    }

    clickListHam = () => {
        // window.location.reload(false);
    }

    render() {
        return (
            <React.Fragment>
                <GlobalStyle />
                <ChangeSize />
                <Hidden className="container-fluid p-0">
                    <Desktop>
                        <Background />
                        <div className="row justify-content-center">
                            <div className="d-flex col-10 justify-content-center">
                                <Logo src="/images/Objects/Logo.png" />
                            </div>
                            <RegiserDiv className="d-flex col-2 justify-content-end">
                                    <Register />
                            </RegiserDiv>
                            <SideBarSection className="d-flex col-2 pl-5 flex-column justify-content-start">
                                <NavButton changeClick={this.changeClick} />
                            </SideBarSection>
                            <Content className="d-flex col-10 justify-content-center">
                                <ClickChange keyID={this.state.id} />
                            </Content>
                            <FacebookDiv className="d-flex col-12 justify-content-end mr-5">
                                <A href="https://www.facebook.com/ThisPz" className="d-flex flex-row">
                                    <Facebook src="/images/Objects/facebook.png" />
                                    <Title className="pt-1 pl-1"> Cockatiel</Title>
                                </A>
                            </FacebookDiv>
                        </div>
                    </Desktop>
                    <Mobile>
                        <div className="row justify-content-end">
                            <HamburgerDiv displayHamburger={this.state.displayHamburger} slide={this.state.displayMenu}>
                                <input type="checkbox" onClick={this.changeBlur} />
                                <span></span>
                                <span></span>
                                <span></span>
                                <ul className="p-4">
                                    <li onClick={this.clickListHam}>
                                        <NavButton changeClick={this.changeClick} />
                                    </li>
                                    <li>
                                        <div className="d-flex justify-content-center mt-3">
                                            <Register />
                                        </div>
                                    </li>
                                </ul>
                            </HamburgerDiv>
                        </div>
                        <DivBlur blur={this.state.blur}>
                            <Background />
                            <HomeDiv homeDisplay={this.state.homeDisplay} >
                                <Home clickHome={this.clickHome} />
                            </HomeDiv>
                            <ClickChange keyID={this.state.id} mobileDisplay={this.state.mobileDisplay}  />
                        </DivBlur>
                    </Mobile>
                </Hidden>
            </React.Fragment>

        )   
    }   
}

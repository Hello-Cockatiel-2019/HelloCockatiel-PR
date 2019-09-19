import React, { Component } from 'react';
import styled from 'styled-components'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min'
import 'bootstrap/dist/js/bootstrap.min'

import GlobalStyle from './GlobalStyle'
import { Desktop, Mobile } from './Hidden'
import { HamburgerDiv } from './Hamburger'

import Home from '../Home'
import Background from './Background'
import NavButton from './NavButton';
import Register from './Register';
import ClickChange from './ClickChange';
import ChangeSize from './ChangeSize'

const Div = styled.div`
    transform :  translateY(-40%);
`

const DivBlur = styled.div`
    filter :  blur(${props => props.blur ? props.blur : 0}px);
`

const SideBarSection = styled.div`
    transform :  translateY(65%);
    
    @media screen and (max-width:1199px) {
        transform :  translateY(70%);
    }
    @media screen and (max-width:1196px) {
        left: 0vw;
        top: 10vh;
    }
    @media screen and (max-width:1024px) {
        top: 14vh;
    }
    @media screen and (max-width:990.5px) {
        top: 14vh;
    }
    @media screen and (max-width:960px) {
        transform: translate(0%,40%);
    }
    @media screen and (mmax-width:900px) {
        top: 5vh;
    }
    @media screen and (max-width:750px) {
        left: -5vw;
        top: 7vh;
    }
    @media screen and (max-height:900px) {
        transform: translate(0%,40%);
    }
    @media screen and (max-height:750px) and (orientation: landscape){
        top: 3vh;
    }
    @media screen and (max-height:650px) and (orientation: landscape){
        top: 3vh;
    }
`

const Content = styled.div`
    @media screen and (max-width:1199px) {
        left: -20vw;
        top: 10vh;
    }
    @media screen and (max-width:1196px) {
        left: -5vw;
    }
    @media screen and (max-width:1024px) {
        left: -20vw;
    }
    @media screen and (max-width:960px) {
        left: -25vw;
    }
    @media screen and (max-width:800px) {
        left: -30vw;
        top: 15vh;
    }
    @media screen and (max-height:750px) and (orientation: landscape){
        top: 0vh;
    }
`

const RegiserDiv = styled.div`
    transform:translate(-20%,20%);
    @media screen and (max-width:1201.5px) {
        top: -100px;
    }
    @media screen and (max-width:1199.5px) {
        left: 80vw;
        top: -55vh;
    }
    @media screen and (max-width:1140px){
        top: -60vh;
    }
    @media screen and (max-width : 991.5px){
        top: -350px;
    }
    @media screen and (max-width : 990px){
        top: -350px;
    }
    @media screen and (max-width:959.5px) {
        top: -500px;
    }
    @media screen and (max-width:900px) {
        top: -500px;
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

const LogoDiv = styled.div`
    transform:translateY(0%);
`

export default class NavBar extends Component {
        
    state = {
        id: 0,
        blur: 0,
        displayHamburger:'none',
        homeDisplay: 'block',
        mobileDisplay: 'none',
        slide:0
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
                <div className="container-fluid p-0">
                    <Desktop>
                        <Background />
                        <LogoDiv className="d-flex justify-content-center">
                            <Logo src="/images/Objects/Logo.png" />
                        </LogoDiv>
                        <Div className="row justify-content-between">
                            <SideBarSection className="col-2 d-inline-flex flex-column ml-5 justify-content-start">
                                <NavButton changeClick={this.changeClick} />
                            </SideBarSection>
                            <Content className="col-7 d-inline-flex justify-content-center">
                                <ClickChange keyID={this.state.id} />
                            </Content>
                            <RegiserDiv className="col-3 col-xl-2 d-inline-flex justify-content-end">
                                <Register />
                            </RegiserDiv>
                        </Div>
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
                </div>
            </React.Fragment>

        )   
    }   
}

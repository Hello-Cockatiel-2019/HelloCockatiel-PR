import React, { Component } from 'react';
import styled from 'styled-components'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min'
import 'bootstrap/dist/js/bootstrap.min'

import GlobalStyle from './GlobalStyle'
import { Desktop, Mobile } from './Hidden'

import Hamburger from './Hamburger'
import Home from '../Home'
import Background from './Background'
import SlideButton from './SideButton';
import Register from './Register';
import ClickChange from './ClickChange';
import ChangeSize from './ChangeSize'

const Div = styled.div`
    z-index:10;
    margin-top:-5em;
`

const DivBlur = styled.div`
    filter :  blur(${props => props.blur ? props.blur : 0}px);
`

const SideBarSection = styled.div`
    margin-top:5em;
    @media only screen and (max-height: 1050px) {
        margin-top:5em;
    }
    @media only screen and (max-height: 1000px) {
        margin-top:2em;
    }
    @media only screen and (max-height: 900px) {
        margin-top:0em;
    }
    @media only screen and (max-height: 671px) {
        margin-top:-6em;
    }
`

const Content = styled.div`
    transform: translateY(-50%);
`

const RegiserDiv = styled.div`
    position:relative;
    z-index:50;
    transform:translate(-5%,20%);
`

const Logo = styled.img`
    width: 573px;   
    height: 229px;
    top: 19px;
    z-index: 50;
    @media screen and (max-width:1198px){
        width: 460px;   
        height: 184px;
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

const Hidden = styled.div`
    @media(orientation:portrait) and (max-width: 319px){
        display: none;
    }
    @media(orientation:landscape) and (max-height: 600px){
        display: none;
    }
`

const HamburgerDiv = styled.div`
    display:${props => props.displayHamburger};
`

export default class NavBar extends Component {
        
    state = {
        id: 0,
        blur: 0,
        displayHamburger:'none',
        homeDisplay: 'block',
        mobileDisplay: 'none'
    }

    changeClick = (i) => {
        if(i===0){
            this.setState({
                homeDisplay: 'block',
                mobileDisplay: 'none',
                displayHamburger: 'none',
            })
        }else{
            this.setState({
                id: i
            })
        }
    }

    clickHome = (i) => {
        this.setState({
            id: i,
            mobileDisplay: 'block',
            homeDisplay: 'none',
            displayHamburger: 'block',
        })
    }

    clickToClose = () => {
        //notthing fixed bug
    }

    render() {
        return (
            <React.Fragment>
                <GlobalStyle />
                <ChangeSize />
                <Hidden className="container-fluid p-0">
                    <Desktop>
                        <Background />
                        <RegiserDiv className="d-flex justify-content-end">
                            <Register />
                        </RegiserDiv>
                        <Div className="row justify-content-center">
                            <div className="d-flex col-12 justify-content-center">
                                <Logo src="/images/Objects/logo_web.png" />
                            </div>
                            <SideBarSection className="d-flex col-2 pl-5 flex-column justify-content-start">
                                <SlideButton changeClick={this.changeClick} clickToClose={this.clickToClose} />
                            </SideBarSection>
                            <Content className="d-flex col-10 justify-content-center">
                                <ClickChange keyID={this.state.id} />
                            </Content>
                        </Div>
                    </Desktop>
                    <Mobile>
                        <HamburgerDiv displayHamburger={this.state.displayHamburger} className="row justify-content-end">
                            <Hamburger changeClick={this.changeClick} />
                        </HamburgerDiv>
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

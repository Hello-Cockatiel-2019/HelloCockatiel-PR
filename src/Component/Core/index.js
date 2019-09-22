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
   margin-top:-5em;
`

const DivBlur = styled.div`
    filter :  blur(${props => props.blur ? props.blur : 0}px);
`

const SideBarSection = styled.div`
    @media only screen and (max-height: 731px) {
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
    transform:translate(-5%,20%);
`

const Logo = styled.img`
    width: 573px;   
    height: 229px;
    top: 19px;
    z-index: 100;
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
                        <RegiserDiv className="d-flex justify-content-end">
                            <Register />
                        </RegiserDiv>
                        <Div className="row justify-content-center">
                            <div className="d-flex col-12 justify-content-center">
                                <Logo src="/images/Objects/logo_web.png" />
                            </div>
                            <SideBarSection className="d-flex col-2 pl-5 flex-column justify-content-start">
                                <NavButton changeClick={this.changeClick} />
                            </SideBarSection>
                            <Content className="d-flex col-10 justify-content-center">
                                <ClickChange keyID={this.state.id} />
                            </Content>
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

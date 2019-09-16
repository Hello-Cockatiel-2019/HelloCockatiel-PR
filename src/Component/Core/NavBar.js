import React, { Component } from 'react';
import styled from 'styled-components'



import { Desktop, Mobile } from './Hidden'

import NavButton from './NavButton';
import Register from './Register';
import ClickChange from './ClickChange';

const Div = styled.div`
    transform :  translateY(-50%);
`

const SideBarSection = styled.div`
    transform :  translateY(65%);
    @media screen and (max-width:1199px) {
        transform :  translateY(70%);
    }
`

const Content = styled.div`
    @media screen and (max-width:1199px) {
        left: -20vw;
        top: 10vh;
    }
`

const RegiserButton = styled.div`
    transform:translate(-20%,20%);
    @media screen and (max-width:1199px) {
        left: 80vw;
        top: -20vw;
    }
`

const Logo = styled.img`
    width: 693.28px;
    height: 262px;
    top: 19px;
    z-index: 100;
`

export default class NavBar extends Component {
        
    state = {
        id: 0,
    }

    changeClick = (i) => {
        this.setState({
            id: i
        })
    }

    ChangeBlur = async (i) => {
        let number = await i
        if (number >= 0) {
            this.ChangeBlurtoparent(i)
        }
    }

    ChangeBlurtoparent = async (i) => {
        let number = await i
        if (number >= 0) {
            this.props.Blur(number);
        }
    }

    render() {
        return (
            <React.Fragment>
                <Desktop className="container-fluid">
                    <div className="d-flex justify-content-center">
                        <Logo src="/images/Objects/Logo.png" />
                    </div>
                    <Div className="row justify-content-between">
                        <SideBarSection className="col-2 d-inline-flex flex-column ml-5 justify-content-start">
                            <NavButton changeClick={this.changeClick} />
                        </SideBarSection>
                        <Content className="col-7 d-inline-flex justify-content-center">
                            <ClickChange keyid={this.state.id} BgBlur={this.Changeblur}  />
                        </Content>
                        <RegiserButton className="col-3 col-xl-2 d-inline-flex justify-content-end">
                            <Register />
                        </RegiserButton>
                    </Div>
                </Desktop>
                <Mobile>
                    <ClickChange 
                        keyid={this.state.id} 
                        clickMobile={this.changeClick} 
                        blurCallBack={this.ChangeBlur}  
                    />
                </Mobile>
            </React.Fragment>

        )
    }
}

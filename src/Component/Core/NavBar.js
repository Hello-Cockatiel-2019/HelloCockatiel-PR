import React, { Component } from 'react';
import styled from 'styled-components'



import { Desktop, Mobile } from './Hidden'

import NavButton from './NavButton';
import Register from './Register';
import ClickChage from './ClickChange';

const Div = styled.div`
    transform :  translateY(-50%);
`

const SideBarSection = styled.div`
    transform :  translateY(65%);
`

const RegiserButton = styled.div`
    transform:translate(-20%,20%);
`

const Logo = styled.img`
    width: 693.28px;
    height: 262px;
    top: 19px;
`

export default class NavBar extends Component {
        
    state = {
        id: 0
    }

    changeClick = (i) => {
        this.setState({
            id: i,
        })
    }
    
    render() {
        return (
            <React.Fragment>
                <Desktop className="container-fluid">
                    <div className="d-flex justify-content-center">
                        <Logo src="/images/Objects/Logo.png" />
                    </div>
                    <Div className="row justify-content-between">
                        <SideBarSection className="col-2 d-inline-flex flex-column ml-5">
                            <NavButton changeClick={this.changeClick} />
                        </SideBarSection>
                        <ClickChage keyid={this.state.id} />
                        <RegiserButton className="col-3 col-xl-2 d-inline-flex">
                            <Register />
                        </RegiserButton>
                    </Div>
                </Desktop>
                <Mobile>
                    <ClickChage keyid={this.state.id} clickMobile={this.changeClick} />
                </Mobile>
            </React.Fragment>

        )
    }
}

import React, { Component } from 'react';
import styled from 'styled-components'



import { Desktop, Mobile } from './Hidden'
import { HamburgerDiv } from './Hamburger'

import NavButton from './NavButton';
import Register from './Register';
import ClickChage from './ClickChange';

const SideBarSection = styled.div`
    transform :  translateY(50%);
    
`

const RegiserButton = styled.div`
    transform:translate(-20%,20%);
`

export default class NavBar extends Component {

    componentDidMount() {
        
    }

    state = {
        id: 0
    }

    changeClick = (i) => {
        this.setState({
            id: i
        })
    }

    render() {
        return (
            <React.Fragment>
                <Desktop className="container-fluid">
                    <div className="row justify-content-between">
                        <SideBarSection className="col-2 d-inline-flex flex-column ml-5">
                            <NavButton changeClick={this.changeClick} />
                        </SideBarSection>
                        <ClickChage keyid={this.state.id} />
                        <RegiserButton className="col-3 col-xl-2 d-inline-flex">
                            <Register />
                        </RegiserButton>
                    </div>
                </Desktop>
                <Mobile className="container-fluid">
                    <div className="row justify-content-end">
                        <HamburgerDiv>
                            <input type="checkbox" />
                            {/* Hamburger  */}
                            <span></span>
                            <span></span>
                            <span></span>
                            {/* Hamburger  */}
                            <ul id="menu" className="p-4 ">
                                <NavButton changeClick={this.changeClick} />
                                <div className="text-center mt-3">
                                    <Register />
                                </div>
                            </ul>
                        </HamburgerDiv>
                    </div>
                </Mobile>
            </React.Fragment>

        )
    }
}

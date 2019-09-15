import React, { Component } from 'react';
import styled from 'styled-components'



import { Desktop, Mobile } from './Hidden'

import NavButton from './NavButton';
import Register from './Register';
import ClickChage from './ClickChange';

const SideBarSection = styled.div`
    transform :  translateY(65%);
    
`

const RegiserButton = styled.div`
    transform:translate(-20%,20%);
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
                <Mobile>
                    <ClickChage keyid={this.state.id} clickMobile={this.changeClick} />
                </Mobile>
            </React.Fragment>

        )
    }
}

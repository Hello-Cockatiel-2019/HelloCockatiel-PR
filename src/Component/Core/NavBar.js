import React, { Component } from 'react';
import styled from 'styled-components'


import NavButton from './NavButton';
import Register from './Register';
import { datenow , dateStartResgis , dateEndRegis } from './Day'
import { Desktop , Mobile } from './Hidden'
import { HamburgerDiv } from './Hamburger'

const SideBarSection = styled.div`
    transform:translateY(60%);
    background-image:url();
    background-repeat:no-repeat;
    background-position-x:40%;
`

const RegiserButton = styled(SideBarSection)`
    transform:translate(-20%,20%);
    background-image:unset;
    visibility:${ (dateStartResgis.isBefore(datenow) && dateEndRegis.isAfter(datenow) ? 'visible' : 'hidden')};
`
const MRegiserButton = styled.div`
    display:${ (dateStartResgis.isBefore(datenow) && dateEndRegis.isAfter(datenow) ? 'block' : 'none')};
`

const DivVinea = styled.div`
    transform:translate(50%,-70%);

`
const DivVineb = styled.div`

`


export default class NavBar extends Component {
    render() {
        return (
            <React.Fragment>
                <Desktop className="container-fluid">
                <div className="row justify-content-between">
                    <SideBarSection className="col-2 d-inline-flex flex-column ml-5">
                        <NavButton />
                    </SideBarSection>
                    <RegiserButton className="col-3 col-xl-2 d-inline-flex">
                        {/* <DivVinea>
                            <img src="/images/Objects/vine-a.png"  />
                        </DivVinea>
                        <DivVineb>
                            <img src="/images/Objects/vine-b.png"  />
                        </DivVineb> */}
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
                                <NavButton />
                                <MRegiserButton className="text-center mt-3">
                                    <Register />
                                </MRegiserButton>
                            </ul>
                        </HamburgerDiv>
                    </div>
                </Mobile>
            </React.Fragment>

        )
    }
}

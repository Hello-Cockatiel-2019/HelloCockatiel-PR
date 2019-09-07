import React, { Component } from 'react';
import styled from 'styled-components'

import Header from './Header';

const SideBarSection = styled.div`
    transform:translateY(60%);

    @media(max-width:576px) {
        display:none!important;
    }
    @media only screen and (min-width: 768px) and (max-height: 1024px) and (orientation: portrait)  {
        display:none!important;
    }
    @media only screen and (min-width: 834px) and (max-height: 1112px) and (orientation: portrait)  {
        display:none!important;
    }
    @media only screen and (min-width: 834px) and (max-height: 1196px) and (orientation: portrait) {
        display:none!important;
    }
    @media only screen and (min-width: 1024px) and (max-height: 1370px) and (orientation: portrait)  {
        display:none!important;
    }
      @media only screen and (min-width: 1024px) and (max-height: 1468px) and (orientation: portrait) {
        display:none!important;
    } 
    /* @media only screen and (min-width: 1024px) and (max-height: 768px) {
        transform:translateY(70%);
    }
    @media only screen and (min-width: 1030px) and (max-height: 768px) {
        transform:translateY(100%);
    } */
    /* @media only screen and (min-width: 1194px) and (max-height: 835px) {
        transform:translateY(80%);
    }
    @media only screen and (min-width: 1197px) and (max-height: 835px) {
        transform:translateY(100%);
    } */
`

export default class SideBar extends Component {
    render() {
        return (
            <SideBarSection className="d-flex align-items-start flex-column ml-5">
                <Header />
            </SideBarSection>
        )
    }
}

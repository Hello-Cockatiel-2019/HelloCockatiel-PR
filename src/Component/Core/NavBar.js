import React, { Component } from 'react';
import styled from 'styled-components'
import dayjs from 'dayjs'

import Header from './Header';
import Register from './Register';

// const datenow = dayjs().format()
const datenow = dayjs('2019-09-26')
// const datenow = dayjs('2019-10-01')
const dateStartResgis = dayjs('2019-09-25')
const dateEndRegis = dayjs('2019-09-30')

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
`

const RegiserButton = styled(SideBarSection)`
    transform:translate(-15%,20%);
    visibility:${
                    (dateStartResgis.isBefore(datenow) && dateEndRegis.isAfter(datenow) ? 'visible'
                        : 'hidden')
               } ;
`


export default class NavBar extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row justify-content-between">
                    <SideBarSection className="col-2 d-inline-flex  flex-column ml-5">
                        <Header />
                    </SideBarSection>
                    <RegiserButton className="col-3 col-xl-2 d-inline-flex">
                        <Register />
                    </RegiserButton>
                </div>
            </div>

        )
    }
}

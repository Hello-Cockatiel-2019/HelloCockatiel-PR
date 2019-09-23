import React from 'react'
import styled from 'styled-components'

import { Header } from './Text'
import { Mobile } from './Hidden'

const HeaderDiv = styled.div`
    background-image: url('/images/Objects/${props => props.headerURl}');
    background-repeat: no-repeat;
    background-size:contain;
    height:136px;
    width: 170px;
    margin: 0;
    padding-top: ${props => props.pl === 'FAQs' ? '65px' : '60px'};
    padding-left: ${props => props.pl === 'ข้อมูลโครงการ' ? '10px' : '50px'};
    @media (max-width:833px) and (max-height:748px) {
      padding-left: ${props => props.pl === 'ข้อมูลโครงการ' ? '10px' : '40px'};
    }
    @media (max-width:748px) {
      padding-left: ${props => props.pl === 'ข้อมูลโครงการ' ? '13px' : '50px'};
    }
    @media screen and (max-width:380px) {
      height:96px;
      width: 130px;
      padding-top: 47px;
      padding-left: ${props => props.pl === 'ข้อมูลโครงการ' ? '12px': '38px'};
    }
    @media screen and (max-width:320px) {
      height:76px;
      width: 110px;
      padding-top: 37px;
      padding-left: ${props => props.pl === 'ข้อมูลโครงการ' ? '8.5px' : '30px'   };
    }
`

const HeaderFont = styled(Header)`
    @media screen and (max-width:768px) and (orientation: portrait){
      font-size:1.75em;
    }
    @media screen and (max-width:380px) {
      font-size:1.25em;
    }
    @media screen and (max-width:320px) {
      font-size:1em;
    }
`

const MobileHeader = (props) => {
  return (
    <Mobile>
    <div className="col-12 d-flex  justify-content-center">
      <HeaderDiv headerURl={ props.headerURl } pl={ props.text }>
        <HeaderFont>
          { props.text }
        </HeaderFont>
      </HeaderDiv>
      </div>
    </Mobile>
  )
}

export default MobileHeader

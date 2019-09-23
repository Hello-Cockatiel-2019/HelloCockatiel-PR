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
    padding-left: ${props => props.pl === 'FAQs' ? '50px' : props.pl === 'Teams' ? '50px' : '10px'};
    @media (max-width:833px) and (max-height:748px) {
      padding-left: ${props => props.pl === 'FAQs' ? '40px' : props.pl === 'Teams' ? '40px' : '10px'};
    }
    @media screen and (max-width:380px) {
      height:96px;
      width: 130px;
      padding-top: 47px;
      padding-left: ${props => props.pl === 'FAQs' ? '38px' : props.pl === 'Teams' ? '38px' : '12px'};
    }
    @media screen and (max-width:320px) {
      height:76px;
      width: 110px;
      padding-top: 37px;
      padding-left: ${props => props.pl === 'FAQs' ? '30px' : props.pl === 'Teams' ? '30px' :  '8.5px'};
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

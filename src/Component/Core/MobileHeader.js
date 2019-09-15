import React from 'react'
import styled from 'styled-components'

import { Header } from './Text'
import { Mobile } from './Hidden'

const HeaderDiv = styled.div`
    background-image: url('/images/Objects/${props => props.HeaderURl}');
    background-repeat: no-repeat;
    height:136px;
    width: 170px;
    margin: 0;
    padding-top: 60px;
    padding-left: ${props => props.pl === 'FAQs' ? '50px' : '10px'};
    transform: translate(30vw,-15vh);
    @media only screen and (min-width: 768px) and (max-height: 1024px) and (orientation: portrait)  {
      transform: translate(40vw,-15vh);
    }
    @media only screen and (min-width: 1024px) and (max-height: 1370px) and (orientation: portrait)  {
      transform: translate(45vw,-40vh);
    }
    @media only screen and (min-width: 1024px) and (max-height: 1468px) and (orientation: portrait) {
      transform: translate(40vw,-5vh);
    } 
    @media screen and (max-width:420px) {
      transform: translate(30vw,-10vh);
    }
    @media screen and (max-width:320px) {
      transform: translate(25vw,-15vh);
    }
`

const MobileHeader = (props) => {
  return (
    <Mobile>
    <div className="col-12 d-flex justify-content-center">
      <HeaderDiv HeaderURl={ props.HeaderURl } pl={ props.text }>
        <Header>
          { props.text }
        </Header>
      </HeaderDiv>
      </div>
    </Mobile>
  )
}

export default MobileHeader

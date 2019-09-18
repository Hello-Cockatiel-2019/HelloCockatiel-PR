import React from 'react'
import styled, { css } from 'styled-components'

import { Header } from './Text'
import { datenow, dateStartResgis, dateEndRegis } from './Day'

const mobileShadow = css`
  box-shadow: 0px 0px 4px #000000, 0px 0px 4px #000000;
`

const Button = styled.button`
    background-image: url('/images/Objects/frame.png');
    background-repeat: no-repeat;
    background-size:contain;
    height:90px;
    width:200px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
    display:${ (dateStartResgis.isBefore(datenow) && dateEndRegis.isAfter(datenow) ? 'block' : 'none')};
    @media screen and (max-width:834px) and (orientation: landscape){
      ${ mobileShadow }
    }
    @media(max-width:576px) {
      width:180px;
      height:85px;
      ${ mobileShadow }
    }
    @media only screen and (min-width: 768px) and (max-height: 1024px) and (orientation: portrait)  {
      ${ mobileShadow }
    }
    @media only screen and (min-width: 834px) and (max-height: 1112px) and (orientation: portrait)  {
      ${ mobileShadow }
    }
    @media only screen and (min-width: 834px) and (max-height: 1196px) and (orientation: portrait) {
       ${ mobileShadow }
    }
    @media only screen and (min-width: 1024px) and (max-height: 1370px) and (orientation: portrait)  {
      ${ mobileShadow }
    }
    @media only screen and (min-width: 1024px) and (max-height: 1468px) and (orientation: portrait) {
      ${ mobileShadow }
    } 
`

const A = styled.a`
  text-decoration:none;

  &:hover{
    text-decoration:none;
  }
  
  &:active{
      border:none;
  }

`

const Register = () => {
    return (
      <Button className="btn pt-3 pb-3 pl-2 pr-2 ">
        <A href="https://www.figma.com/file/u9GXnItjXKKPwDws9nusxX/Hello-Cockatiel?node-id=218%3A619"  >
            <Header> Register </Header>
        </A>
      </Button>
    )
  }

  export default Register

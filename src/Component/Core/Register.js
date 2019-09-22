import React from 'react'
import styled, { css } from 'styled-components'

import { dateNow, dateStartResgis, dateEndRegis } from './Day'

const mobileShadow = css`
  box-shadow: 0px 0px 4px #000000, 0px 0px 4px #000000;
`

const Button = styled.button`
    height:90px;
    width:200px;
    display:${ (dateStartResgis.isBefore(dateNow) && dateEndRegis.isAfter(dateNow) ? 'block' : 'none')};
    border: none;
    box-shadow:none;
    @media(max-width:1024px) {
      width:180px;
      height:85px;
      ${ mobileShadow }
    }
    @media screen and (max-width:834px) and (orientation: landscape){
      ${ mobileShadow }
    }
    @media screen and (max-width:768px) and (orientation: portrait){
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

const ImgRegister = styled.img`
  height:90px;
  width:200px;
  margin-left:-.75em;
  @media screen and (max-width:420px) {
    height:100px;
    margin-left: -1.5em;
    margin-top: -.5em;
  }
`

const Register = () => {
    return (
      <Button className="btn">
        <A href="https://www.figma.com/file/u9GXnItjXKKPwDws9nusxX/Hello-Cockatiel?node-id=218%3A619"  >
          <ImgRegister src="/images/Objects/register.png" alt="register" />
        </A>
      </Button>
    )
  }

  export default Register

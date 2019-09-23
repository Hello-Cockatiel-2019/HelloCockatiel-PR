import React from 'react'
import styled, { css } from 'styled-components'

import { dateNow, dateStartResgis, dateEndRegis } from './Day'

const sizeRegister = css`
  margin-left: -1.5em;
  margin-top: -.5em;
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
    }
    @media(max-width:576px) {
      width:180px;
      height:85px;
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
  @media only screen and (min-width: 768px) and (max-height: 1024px) and (orientation: portrait)  {
    height:100px;
    ${ sizeRegister }
  }
  @media only screen and (min-width: 834px) and (max-height: 1196px) and (orientation: portrait)  {
    width:300px; 
    height:auto;
    margin-left: -4em;
    margin-top: -.5em;
  }
  @media only screen and (min-width: 1024px) and (max-height: 1370px) and (orientation: portrait)  {
    width:300px; 
    height:auto;
    margin-left: -4em;
    margin-top: -.5em;
  }
  @media only screen and (min-width: 1024px) and (max-height: 1468px) and (orientation: portrait) {
    width:300px; 
    height:auto;
    margin-left: -4em;
    margin-top: -.5em;
  }
  @media screen and (max-width:420px) {
    height:100px;
    ${ sizeRegister }
  }
`

const Register = () => {
    return (
      <Button className="btn">
        <A href="https://forms.gle/V8ZUgNZkG5btrFQi6" target="_blank">
          <ImgRegister src="/images/Objects/register.png" alt="register" />
        </A>
      </Button>
    )
  }

  export default Register

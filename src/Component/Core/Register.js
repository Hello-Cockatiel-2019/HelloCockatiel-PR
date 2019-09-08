import React, { Component } from 'react'
import styled from 'styled-components'

import { Header } from './Text'

const Button = styled.button`
    background-image: url('/images/Objects/frame.png');
    background-repeat: no-repeat;
    background-size:100%;
    height:90px;
    width:200px;
`

const A = styled.a`
  text-decoration:none;
  height:150px;

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

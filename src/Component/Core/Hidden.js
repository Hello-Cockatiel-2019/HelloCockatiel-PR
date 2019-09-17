import styled, { css } from 'styled-components'

const displayNone = css`
    display:none!important;
`

const displayBlock = css`
    display:block!important;
`

export const Desktop = styled.div`
    display: block;
     @media(max-width:576px) {
        ${ displayNone }
    }
    @media only screen and (min-width: 768px) and (max-height: 1024px) and (orientation: portrait)  {
        ${ displayNone }
    }
    @media only screen and (min-width: 834px) and (max-height: 1112px) and (orientation: portrait)  {
        ${ displayNone }
    }
    @media only screen and (min-width: 834px) and (max-height: 1196px) and (orientation: portrait) {
        ${ displayNone }
    }
    @media only screen and (min-width: 1024px) and (max-height: 1370px) and (orientation: portrait)  {
        ${ displayNone }
    }
      @media only screen and (min-width: 1024px) and (max-height: 1468px) and (orientation: portrait) {
        ${ displayNone }
    } 
    @media(orientation:portrait) and (max-width: 319px){
        ${ displayNone }
    }
    @media(orientation:landscape) and (max-height: 550px){
        ${ displayNone }
    }
    @media (max-width: 834px){
        ${ displayNone }
    }
`
export const Mobile = styled.div`
    display: none;
     @media(max-width:834px) {
        ${ displayBlock }
    }
    @media only screen and (min-width: 768px) and (max-height: 1024px) and (orientation: portrait)  {
        ${ displayBlock }
    }
    @media only screen and (min-width: 834px) and (max-height: 1112px) and (orientation: portrait)  {
        ${ displayBlock }
    }
    @media only screen and (min-width: 834px) and (max-height: 1196px) and (orientation: portrait) {
        ${ displayBlock }
    }
    @media only screen and (min-width: 1024px) and (max-height: 1370px) and (orientation: portrait)  {
        ${ displayBlock }
    }
    @media only screen and (min-width: 1024px) and (max-height: 1468px) and (orientation: portrait) {
        ${ displayBlock }
    } 
`
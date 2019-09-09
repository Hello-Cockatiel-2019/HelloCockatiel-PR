import styled from 'styled-components'

export const Desktop = styled.div`
    display: block;
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
export const Mobile = styled.div`
    display: none;
     @media(max-width:576px) {
        display:block!important;
    }
    @media only screen and (min-width: 768px) and (max-height: 1024px) and (orientation: portrait)  {
        display:block!important;
    }
    @media only screen and (min-width: 834px) and (max-height: 1112px) and (orientation: portrait)  {
        display:block!important;
    }
    @media only screen and (min-width: 834px) and (max-height: 1196px) and (orientation: portrait) {
        display:block!important;
    }
    @media only screen and (min-width: 1024px) and (max-height: 1370px) and (orientation: portrait)  {
        display:block!important;
    }
      @media only screen and (min-width: 1024px) and (max-height: 1468px) and (orientation: portrait) {
        display:block!important;
    } 
`
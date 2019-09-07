import React, { Component } from 'react'
import styled from 'styled-components'
import Where from './Where'

import { Paragraph } from '../Core/Text'

const Plate = styled.div `
    
    @media(min-width:320px) {
        background-image: url(/images/Objects/small-plate.png);
        width:263px;
        height: 218px;
      }
      @media (min-width:410px) {
        background-image: url(/images/Objects/small-plate.png);
        width:340px;
        height: 283px;
      }
    //   @media (min-width:576px) {
    //     background-image: url(/images/Objects/small-plate.png);
    //     width:470px;
    //     height: 443px;
    //   }
    //   @media (min-width:768px) {
    //     background-image: url(/images/Objects/big-plate.png);
    //     width:740px;
    //     height: auto;
    //   }
    //   @media(min-width:1024px) {
    //     background-image: url(/images/Objects/big-plate.png);
    //     height: 25.1875em;
    //     width: auto;
    //   }
    //   @media only screen and (min-width: 768px) and (max-height: 1024px) and (orientation: portrait)  {
    //     background-image: url(/images/Objects/big-plate.png);
    //     height: 25.1875em;
    //     width: auto;
    //   }
    //   @media only screen and (min-width: 1024px) and (max-height: 1370px) and (orientation: portrait)  {
    //     background-image: url(/images/Objects/big-plate.png);
    //     height: 25.1875em;
    //     width: 43.75em;
    //   } 
      background-size:100%; 
    background-repeat: no-repeat;
    // size:100%;
    
`
const Text= styled(Paragraph) `
    @media(min-width:320px) {
    
    }
    @media (min-width:410px) {
    
    }
    @media (min-width:576px) {
    
    }
`

const AboutBox = () => (
    
        <div class="d-flex flex-column">
            
            <Plate>
                <Text className="mt-3 text-center">
                    About us
                </Text>
            
            <Text className="ml-5 mt-5">
                text
            </Text>
            </Plate>
            <Where />
        </div>
    
  )

export default class About extends Component {
    render() {
        return (
                <AboutBox />
        )
    }
}

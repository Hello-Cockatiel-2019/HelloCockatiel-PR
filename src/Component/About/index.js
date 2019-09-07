import React, { Component } from 'react'
import styled from 'styled-components'
import Where from './Where'

import { Paragraph } from '../Core/Text'

const Plate = styled.div `
    background-image: url(/images/Objects/big-plate.png);
    background-repeat: no-repeat;
    size:100%;
    height: 25.1875em;
    width: 43.75em;
`
const Text= styled(Paragraph) `
    
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

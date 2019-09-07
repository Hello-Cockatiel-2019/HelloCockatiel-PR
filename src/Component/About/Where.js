import React, { Component } from 'react'
import styled from 'styled-components'

import { Paragraph } from '../Core/Text'

const Where1 = styled.div `
@media(min-width:320px) {
    
    width: 85px;
    height: 25px;
}
@media (min-width:410px) {
    height: 3.4375em;
    width: 11.3125em;
}
@media (min-width:576px) {
    height: 3.4375em;
    width: 11.3125em;
}
    background-image: url(/images/Objects/arrowplate3.png);
    background-repeat: no-repeat;
    background-size:100%;
    padding-left:2em;
    margin-left:0.1em;
    
`
const Sit = styled.div `
    background-image: url(/images/Objects/arrowplate2.png);
    @media(min-width:320px) {
        height: 38px;
        width: 131px;
    }
    @media (min-width:410px) {
        height: 4.9375em;
        width: 17.1875em;
    }
    @media (min-width:576px) {
        height: 4.9375em;
        width: 17.1875em;
    }
    background-repeat: no-repeat;
    background-size:100%;
    padding-left:0.5em;
    margin-top:1em;
`

const Text= styled(Paragraph) `
    transform: translateY(50%);
    @media(min-width:320px) {
        
    }
    @media (min-width:410px) {
        
    }
    @media (min-width:576px) {
        
    }
`

export default class Where extends Component{
    render() {
        return (

            <div class="d-flex flex-column justify-content-around">
                <Where1>
                    <Text>
                    สถานที่จัด
                    </Text>
                </Where1>
                <Sit>
                    <Text>
                    คณะเทคโนโลยี
                    สารสนเทศ
                    </Text>
                </Sit>
            </div>
        )
    }
}
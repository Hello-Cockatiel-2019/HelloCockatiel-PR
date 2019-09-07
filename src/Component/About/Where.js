import React, { Component } from 'react'
import styled from 'styled-components'

import { Paragraph } from '../Core/Text'

const Sit = styled.div `
    background-image: url(/images/Objects/arrowplate2.png);
    background-repeat: no-repeat;
    height: 100%;
    width: 100%;
    background-size:100%;
    padding-left:0.5em;
    padding-top:0.2em;
`
const Where1 = styled.div `
    background-image: url(/images/Objects/arrowplate3.png);
    background-repeat: no-repeat;
    height: 4.9375em;
    width: 17.1875em;
    size:100%;
    padding-left:0.5em;
    padding-top:0.2em;
`
const Text= styled(Paragraph) `
    transform: translateY(50%);
`

export default class Where extends Component{
    render() {
        return (

            <div class="d-flex flex-column justify-content-around">
                <Where1>
                    <Text>
                    สถานที่
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
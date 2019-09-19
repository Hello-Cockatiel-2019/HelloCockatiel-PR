import React from 'react'
import styled, { css } from 'styled-components'

import color from '../../Config/Color'
import { BrownParagraph } from './Text'
import { changeSizeText } from './Messages'

const layout = css`
  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
`
const Minicon = styled.div`
  display:none;
  width:100%;
  height: 100vh;
  padding : 2vw;
  background-color:${color.Background};
  z-index:1000;
  @media(orientation:portrait)
  and (max-width: 319px){
    ${ layout }
  }
  @media(orientation:landscape)
  and (max-height: 600px){
    ${ layout }
  }
`

const index = () => (
    <Minicon>
        <img src="/images/Objects/rotate.png" width="100px" alt="ChangeSize" />
        <BrownParagraph className="text-center mt-3">{ changeSizeText }</BrownParagraph>
    </Minicon>
)
export default index
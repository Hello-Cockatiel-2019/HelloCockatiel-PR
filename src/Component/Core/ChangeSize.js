import React from 'react'
import styled from 'styled-components'

import color from '../../Config/Color'
import { BrownParagraph } from './Text'

const Minicon = styled.div`
  display:none;
  width:100%;
  height: 100vh;
  padding : 2vw;
  background-color:${color.Background};
  @media(orientation:portrait)
  and (max-width: 319px){
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
  }
  @media(orientation:landscape)
  and (max-height: 600px){
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
  }
`

const index = () => (
    <Minicon>
        <img src="/images/Objects/rotate.png" width="100px" alt="ChangeSize" />
        <BrownParagraph className="text-center mt-3">กรุณาปรับจอด้วยครับ</BrownParagraph>
    </Minicon>
)
export default index
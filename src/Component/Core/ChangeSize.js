import React from 'react'
import styled from 'styled-components'

const Minicon = styled.div`
  display:none;
  width:100%;
  height: 100vh;
  padding : 2vw;
  @media(orientation:portrait)
  and (max-width: 319px){
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
  }
  @media(orientation:landscape)
  and (max-height: 550px){
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
  }
`

const index = () => (
    <Minicon>
        <p className="text-center mt-3">กรุณาปรับจอด้วยครับ</p>
    </Minicon>
)
export default index
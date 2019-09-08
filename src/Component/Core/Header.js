import React from 'react'
import styled from 'styled-components'

import { Title } from './Text'

const Button = styled.button`
  background-image:url('/images/Objects/plate-d2.png');
  background-repeat:no-repeat;
  background-size:100%;
  height:auto;
  width:180px;
`
const A = styled.a`
  text-decoration:none;;

  &:hover{
    text-decoration:none;
  }
`

const text = [
  {
    text: "สาขาที่รับสมัคร",
    link: "Major"
  }, 
  {
    text: "ข้อมูลโครงการ",
    link: "About"
  }, 
  {
    text: "FAQs",
    link: "FAQs"
  }
] 

const Header = (props) => {
  
  return (
    <React.Fragment>
      {
        text.map((data, i) => {
          return (
            <div className="mb-5" key={i}>
              <Button className="btn pb-4 pt-4" key={i}>
                <A href={data.link} key={i}>
                  <Title key={i}>
                    {data.text}
                  </Title>
                </A>
              </Button>
            </div>
          )
        })
      }
    </React.Fragment>
      
  )
}

export default Header

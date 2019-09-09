import React from 'react'
import styled from 'styled-components'

import color from '../../Config/Color'
import { Mobile } from './Hidden'
import { Title } from './Text'

const Button = styled.button`
  background-image:url('/images/Objects/plate-d2.png');
  background-repeat:no-repeat;
  background-size:100%;
  height:auto;
  width:180px;
   @media(max-width:576px) {
        width:auto;
        background-image:url('');
    }
    @media only screen and (min-width: 768px) and (max-height: 1024px) and (orientation: portrait)  {
        width:auto;
        background-image:url('');
    }
    @media only screen and (min-width: 834px) and (max-height: 1112px) and (orientation: portrait)  {
        width:auto;
        background-image:url('');
    }
    @media only screen and (min-width: 834px) and (max-height: 1196px) and (orientation: portrait) {
        width:auto;
        background-image:url('');
    }
    @media only screen and (min-width: 1024px) and (max-height: 1370px) and (orientation: portrait)  {
        width:auto;
        background-image:url('');
    }
    @media only screen and (min-width: 1024px) and (max-height: 1468px) and (orientation: portrait) {
        width:auto;
        background-image:url('');
    } 
`
const A = styled.a`
  text-decoration:none;;

  &:hover{
    text-decoration:none;
  }
`

const Hr = styled(Mobile)`
  background-color:${color.font1};
  border: solid ${color.font1} 1px;
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
      {/* <Hr /> */}
      {
        text.map((data, i) => {
          return (
            <div className="mb-lg-5 text-center" key={i}>
              <Button className="btn pb-4 pt-4" key={i}>
                <A href={data.link} key={i}>
                  <Title key={i}>
                    {data.text}
                  </Title>
                </A>
              </Button>
              <Hr />
            </div>
          )
        })
      }
    </React.Fragment>
      
  )
}

export default Header

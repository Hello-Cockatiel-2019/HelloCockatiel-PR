import React from 'react'
import styled from 'styled-components'

import { datenow, dateStartResgis, dateEndRegis } from './Day'
import { Mobile } from './Hidden'
import { Title } from './Text'
import color from '../../Config/Color'

const Button = styled.button`
  background-image:url('/images/Objects/plate-d3.png');
  background-repeat:no-repeat;
  background-size:100%;
  height:auto;
  width:180px;
  visibility: ${props => props.visibleButton === 3 ? 'hidden' : 'visible'} ;
   @media(max-width:576px) {
        width:auto;
        background-image:url('');
        visibility: ${props => props.visibleButton === 3 ? 'visible' : 'visible'} ;
    }
    @media only screen and (min-width: 768px) and (max-height: 1024px) and (orientation: portrait)  {
        width:auto;
        background-image:url('');
        visibility: ${props => props.visibleButton === 3 ? 'visible' : 'visible'} ;
    }
    @media only screen and (min-width: 834px) and (max-height: 1112px) and (orientation: portrait)  {
        width:auto;
        background-image:url('');
        visibility: ${props => props.visibleButton === 3 ? 'visible' : 'visible'} ;
    }
    @media only screen and (min-width: 834px) and (max-height: 1196px) and (orientation: portrait) {
        width:auto;
        background-image:url('');
        visibility: ${props => props.visibleButton === 3 ? 'visible' : 'visible'} ;
    }
    @media only screen and (min-width: 1024px) and (max-height: 1370px) and (orientation: portrait)  {
        width:auto;
        background-image:url('');
        visibility: ${props => props.visibleButton === 3 ? 'visible' : 'visible'} ;
    }
    @media only screen and (min-width: 1024px) and (max-height: 1468px) and (orientation: portrait) {
        width:auto;
        background-image:url('');
        visibility: ${props => props.visibleButton === 3 ? 'visible' : 'visible'} ;
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
  visibility:${dateStartResgis.isBefore(datenow) && dateEndRegis.isAfter(datenow) ? 'visible'
                : props => props.visibleHr <=2  ? 'visible' : 'hidden'};
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
  },
  {
    text: "Contact",
    link: "http://www.faceboook.com"
  }
] 

const NavButton = (props) => {
  console.log(dateStartResgis.isBefore(datenow) && dateEndRegis.isAfter(datenow))
  return (
    <React.Fragment>
      {
        text.map((data, i) => {
          return (
            <div className="mb-lg-5 text-center" key={i}>
              <Button className="btn pb-4 pt-4" visibleButton={i} key={i}>
                <A href={data.link} key={i}>
                  <Title key={i}>
                    {data.text}
                  </Title>
                </A>
              </Button>
              <Hr visibleHr={i}/>
            </div>
          )
        })
      }
    </React.Fragment>
      
  )
}

export default NavButton

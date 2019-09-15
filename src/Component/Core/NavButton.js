import React, { Component } from 'react'
import styled, { css } from 'styled-components'

import { datenow, dateStartResgis, dateEndRegis } from './Day'
import { Mobile } from './Hidden'
import { Title } from './Text'
import color from '../../Config/Color'

const NavMobile = css`
  width:auto;
  background-image:url('');
  display: block;
`

const Button = styled.div`
  background-image:url('/images/Objects/plate-d3.png');
  background-repeat:no-repeat;
  background-size:100%;
  height:auto;
  width:180px;
  display: ${props => props.displayButton === 3 ? 'none' : 'block'} ;
    @media(max-width:576px) {
        ${ NavMobile}
    }
    @media only screen and (min-width: 768px) and (max-height: 1024px) and (orientation: portrait)  {
        ${ NavMobile}
    }
    @media only screen and (min-width: 834px) and (max-height: 1112px) and (orientation: portrait)  {
        ${ NavMobile}
    }
    @media only screen and (min-width: 834px) and (max-height: 1196px) and (orientation: portrait) {
        ${ NavMobile}
    }
    @media only screen and (min-width: 1024px) and (max-height: 1370px) and (orientation: portrait)  {
        ${ NavMobile}
    }
    @media only screen and (min-width: 1024px) and (max-height: 1468px) and (orientation: portrait) {
        ${ NavMobile}
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
    : props => props.visibleHr <= 2 ? 'visible' : 'hidden'};
`

export default class componentName extends Component {
  state = {
    buttondata: [
      {
        text: "สาขาที่รับสมัคร",
        link: "#Majors"
      },
      {
        text: "ข้อมูลโครงการ",
        link: "#About"
      },
      {
        text: "FAQs",
        link: "#FAQs"
      },
      {
        text: "Contact",
        link: "https://www.facebook.com/ThisPz"
      }
    ]
  }

  handleClick = async (i) => {
    let number = await i
    if (number >= 0) {
      this.props.changeClick(number);
    }
  }

  render() {
    return (
      <React.Fragment >
        {
          this.state.buttondata.map((data, i) => {
            return (
              <div className="mb-lg-5 text-center" key={i}>
                <Button className="btn pb-4 pt-4"
                  key={i}
                  displayButton={i}
                  onClick={() => this.handleClick(i)}>
                  <A href={data.link} key={i}>
                    <Title key={i}>
                      {data.text}
                    </Title>
                  </A>
                </Button>
                <Hr visibleHr={i} />
              </div>
            )
          })
        }
      </React.Fragment>

    )
  }
}

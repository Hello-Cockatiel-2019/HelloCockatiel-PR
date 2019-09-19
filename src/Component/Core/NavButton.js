import React, { Component } from 'react'
import styled, { css } from 'styled-components'

import { dateNow, dateStartResgis, dateEndRegis } from './Day'
import { Mobile } from './Hidden'
import { Title } from './Text'
import color from '../../Config/Color'
import { aboutHeader, majorHeader, faqsHeader, contact } from './Messages'

const NavMobile = css`
  width:auto;
  background-image:url('');
  display: block;
`

const Button = styled.div`
  background-image:url('/images/Objects/${props => props.imgURL}');
  background-repeat:no-repeat;
  background-size:contain;
  height:auto;
  width:180px;
  display: ${props => props.index === 3 ? 'none' : 'block'} ;
    
    @media screen and (max-width:834px) and (orientation: landscape){
        ${ NavMobile }
    }
    @media screen and (max-width:768px) and (orientation: portrait){
        ${ NavMobile }
    }
    @media(max-width:576px) {
        ${ NavMobile }
    }
    @media(max-width:320px) {
        margin-top:${props => props.index ===0 ? -5 :0}px!important;
        padding-top:${props => props.index ===0 ? 0 :1}rem!important;
        padding-bottom:1rem!important;
        ${ NavMobile }
    }
    @media only screen and (min-width: 768px) and (max-height: 1024px) and (orientation: portrait)  {
        ${ NavMobile }
    }
    @media only screen and (min-width: 834px) and (max-height: 1112px) and (orientation: portrait)  {
        ${ NavMobile }
    }
    @media only screen and (min-width: 834px) and (max-height: 1196px) and (orientation: portrait) {
        ${ NavMobile }
    }
    @media only screen and (min-width: 1024px) and (max-height: 1370px) and (orientation: portrait)  {
        ${ NavMobile }
    }
    @media only screen and (min-width: 1024px) and (max-height: 1468px) and (orientation: portrait) {
        ${ NavMobile }
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
  visibility:${dateStartResgis.isBefore(dateNow) && dateEndRegis.isAfter(dateNow) ? 'visible'
    : props => props.visibleHr <= 2 ? 'visible' : 'hidden'};
`

export default class componentName extends Component {
  
  state = {
    buttonData: [
      {
        text: `${ aboutHeader }`,
        link: "#About"
      },
      {
        text: `${ majorHeader }`,
        link: "#Majors"
      },
      {
        text: `${ faqsHeader }`,
        link: "#FAQs"
      },
      {
        text: `${ contact }`,
        link: "https://www.facebook.com/ThisPz"
      }
    ],
    imgURL: ['plate-d1.png', 'plate-d3.png', 'plate-d3.png']
  }

  handleClick = async (i) => {
    let number = await i
    if (number >= 0) {
      this.props.changeClick(number);
      if(number === 0){
        let a = this.state.imgURL.slice();
        a[number] = 'plate-d1.png';
        this.setState({
          imgURL: a
        })
      }
      if(number !== 0){
        let a = this.state.imgURL.slice();
        a[0] = 'plate-d3.png';
        this.setState({
          imgURL: a
        })
      }
      if(number === 1){
        let a = this.state.imgURL.slice();
        a[number] = 'plate-d1.png';
        this.setState({
          imgURL: a
        })
      }
      if(number !== 1){
        let a = this.state.imgURL.slice();
        a[1] = 'plate-d3.png';
        this.setState({
          imgURL: a
        })
      }
      if(number === 2){
        let a = this.state.imgURL.slice();
        a[number] = 'plate-d1.png';
        this.setState({
          imgURL: a
        })
      }
      if(number !== 2){
        let a = this.state.imgURL.slice();
        a[2] = 'plate-d3.png';
        this.setState({
          imgURL: a
        })
      }
    
    }
  }

  render() {
    return (
      <React.Fragment >
        {
          this.state.buttonData.map((data, i) => {
            return (
              <div className="mb-lg-5" key={i}>
                  <Button className="btn pb-4 pt-4"
                    key={i}
                    onClick={() => this.handleClick(i)}
                    imgURL={this.state.imgURL[i]}
                    index={i}>
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

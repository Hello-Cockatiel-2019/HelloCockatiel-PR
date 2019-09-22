import React, { Component } from 'react'
import styled, { css } from 'styled-components'

import { Mobile, Desktop } from './Hidden'
import { Title } from './Text'
import color from '../../Config/Color'
import { home, aboutHeader, majorHeader, faqsHeader } from './Messages'

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
  visibility:${ props => props.visibleHr <=  2? 'visible' : 'hidden' };
`

const Parrot = styled.img`
  display: ${props => props.display};
  width:80px;
  height:79px;
  margin-right: 0px;
  margin-left: 120px;
  margin-bottom: -18px;
`

const Div = styled.div`
  display: ${props => props.index === 0 ? 'none' : props.display};
`
export default class componentName extends Component {
  
  state = {
    buttonData: [
      {
        text: `${ home }`,
        link: "#"
      },
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
      }
    ],
    imgURL: ['','plate-active.png', 'plate-normal.png', 'plate-normal.png'],
    display: ['','block', 'none', 'none']
  }

  handleClick = async (i) => {
    let number = await i
    if (number >= 0) {
      this.props.changeClick(number);
      if(number === 1 || number === 2 || number === 3){
        let img = this.state.imgURL.slice();
        let display = this.state.display.slice();
        img[number] = 'plate-active.png';
        display[number] = 'block';
        this.setState({
          imgURL: img,
          display: display
        })
      }
      if(number !== 1){
        let img = this.state.imgURL.slice();
        let display = this.state.display.slice();
        img[1] = 'plate-normal.png';
        display[1] = 'none';
        this.setState({
          imgURL: img,
          display: display
        })
      }
      if(number !== 2){
        let img = this.state.imgURL.slice();
        let display = this.state.display.slice();
        img[2] = 'plate-normal.png';
        display[2] = 'none';
        this.setState({
          imgURL: img,
          display: display
        })
      }
      if(number !== 3){
        let img = this.state.imgURL.slice();
        let display = this.state.display.slice();
        img[3] = 'plate-normal.png';
        display[3] = 'none';
        this.setState({
          imgURL: img,
          display: display
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
              <Div className="mb-lg-5" key={i} index={i}>
                  <Desktop>
                    <Parrot src="/images/Objects/parrot.png" index={i} display={this.state.display[i]} />
                  </Desktop>
                  <Button className="btn pb-4 pt-4 pl-3 pr-4"
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
              </Div>
            )
          })
        }
      </React.Fragment>

    )
  }
}

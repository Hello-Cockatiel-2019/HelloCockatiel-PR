import React, { Component } from 'react'
import styled from 'styled-components'

import { Desktop ,Mobile } from '../Core/Hidden'
import { HamburgerDiv } from './Hamburger'

import NavButton from './NavButton';
import Register from './Register';
import Home from '../Home'
import About from '../About'
import FAQs from '../FAQs'
import Major from '../Major'

const PositionDesktop = styled(Desktop)`
    transform:translateY(50%);
`

const HomeDiv = styled.div`
    transform:translateY(5%);
    display : ${props => props.homedisplay ? props.homedisplay : 'display'};
    @media screen and (max-width:320px) {
        transform:translateY(0%);
    }
`

const MobileDiv = styled.div`
    display : ${props => props.mobiledisplay ? props.mobiledisplay : 'none'};
`

const MobileMap = styled.div`
    transform:translateY(20%);
    filter: blur(${props => props.blur}px);
`

const Div = styled.div`
    display: ${props => props.display};
`

export default class ClickChage extends Component {
    
    componentDidUpdate(prevProps){
        if(prevProps.keyid !== this.props.keyid){
            this.setState({
                key: this.props.keyid
            })
        }
    }

    state ={    
        key : 0,
        Component: [<About />,<Major />,<FAQs />],
        mobiledisplay:'none',
        homedisplay: 'block',
        blur: 0
    }
   
    clickHome = (i) => {
        this.setState({
            key: i,
            mobiledisplay:'block',
            homedisplay: 'none'
        })
    }

    ChangeBlur = () => {
        if (this.state.blur === 0) {
            this.setState({
                blur: 2
            })
            this.sendBlur(this.state.blur)
        } else {
            this.setState({
                blur: 0
            })
            this.sendBlur(this.state.blur)
        }
    }

    handleCilck = async (i) => {
        let number = await i
        if (number >= 0) {
            this.props.clickMobile(number);
        }
    }


    sendBlur = (i) => {
        this.props.blurCallBack(i);
    }


    render() {
        return (
            <React.Fragment>
            <PositionDesktop>
                {
                    this.state.Component.map((data, i) => {
                        return (
                            <Div key={i} display={this.state.key===i?'block':'none'}>
                                {data}
                            </Div>
                        )
                    })
                }
            </PositionDesktop>
            <Mobile>
                <HomeDiv homedisplay={this.state.homedisplay} >
                    <Home clickHome={this.clickHome} />
                </HomeDiv>
                <MobileDiv mobiledisplay={this.state.mobiledisplay}>
                    <div className="row justify-content-end">
                        <HamburgerDiv >
                            <input type="checkbox" onClick={this.ChangeBlur}/>
                            {/* Hamburger  */}
                            <span></span>
                            <span></span>
                            <span></span>
                            {/* Hamburger  */}
                            <ul className="p-4 ">
                                <li>
                                    <NavButton changeClick={this.handleCilck} />
                                </li>
                                <li>
                                    <div className="d-flex justify-content-center mt-3">
                                        <Register />
                                    </div>
                                </li>
                            </ul>
                        </HamburgerDiv>
                    </div>
                    <MobileMap blur={this.state.blur}>
                        {
                            this.state.Component.map((data, i) => {
                                return (
                                    <Div key={i} display={this.state.key === i ? 'block' : 'none'} >
                                        {data}
                                    </Div>
                                )
                            })
                        }
                    </MobileMap>
                </MobileDiv>
            </Mobile>
            </React.Fragment>
        )
    }
}


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
`

const MobileDiv = styled.div`
    display : ${props => props.mobiledisplay ? props.mobiledisplay : 'none'};
`

const MobileMap = styled.div`
    transform:translateY(20%);
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
        DesktopComponent : [<Major />,<About />,<FAQs />],
        MobileComponent: [<Major />, <About />, <FAQs />],
        mobiledisplay:'none',
        homedisplay: 'block'
    }
   
    clickHome = (i) => {
        this.setState({
            key: i,
            mobiledisplay:'block',
            homedisplay: 'none'
        })
    }

    handleCilck = async (i) => {
        let number = await i
        if (number >= 0) {
            this.props.clickMobile(number);
        }
    }
    
    render() {
        return (
            <React.Fragment>
            <PositionDesktop>
                {
                    this.state.DesktopComponent.map((data, i) => {
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
                        <HamburgerDiv>
                            <input type="checkbox" />
                            {/* Hamburger  */}
                            <span></span>
                            <span></span>
                            <span></span>
                            {/* Hamburger  */}
                            <ul id="menu" className="p-4 ">
                                <NavButton changeClick={this.handleCilck}/>
                                <div className="d-flex justify-content-center mt-3">
                                    <Register />
                                </div>
                            </ul>
                        </HamburgerDiv>
                    </div>
                    <MobileMap>
                        {
                            this.state.MobileComponent.map((data, i) => {
                                return (
                                    <Div key={i} display={this.state.key === i ? 'block' : 'none'}>
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


import React, { Component } from 'react'
import styled from 'styled-components'

import { Desktop ,Mobile } from '../Core/Hidden'
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
    transform:translateY(25%);
    display : ${props => props.mobiledisplay ? props.mobiledisplay : 'none'};
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
   
    showPage = () => {
        this.setState({
            mobiledisplay:'block',
            homedisplay: 'none'
        })
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
                <HomeDiv onClick={() => this.showPage()} homedisplay={this.state.homedisplay} >
                    <Home />
                </HomeDiv>
                <MobileDiv mobiledisplay={this.state.mobiledisplay}>
                    {
                        this.state.MobileComponent.map((data, i) => {
                            return (
                                <Div key={i} display={this.state.key === i ? 'block' : 'none'}>
                                    {data}
                                </Div>
                            )
                        })
                    }
                </MobileDiv>
            </Mobile>
            </React.Fragment>
        )
    }
}


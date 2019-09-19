import React, { Component } from 'react'
import styled from 'styled-components'

import { Desktop ,Mobile } from '../Core/Hidden'

import About from '../About'
import FAQs from '../FAQs'
import Major from '../Major'

const PositionDesktop = styled(Desktop)`
    transform:translateY(50%);
`

const MobileDiv = styled.div`
    display : ${props => props.mobileDisplay ? props.mobileDisplay : 'none'};
    overflow:hidden;
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
        if(prevProps.keyID !== this.props.keyID){
            this.setState({
                key: this.props.keyID
            })
        }
    }

    state ={    
        key : 0,
        component: [<About />,<Major />,<FAQs />],
        mobileDisplay:'none',
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
                        this.state.component.map((data, i) => {
                            return (
                                <Div key={i} display={this.state.key===i?'block':'none'}>
                                    {data}
                                </Div>
                            )
                        })
                    }
                </PositionDesktop>
                <Mobile>
                    <MobileDiv mobileDisplay={this.props.mobileDisplay}>
                        <MobileMap>
                            {
                                this.state.component.map((data, i) => {
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


import React, { Component } from 'react'
import styled from 'styled-components'

import { Desktop ,Mobile } from '../Core/Hidden'
import Home from '../Home'
import About from '../About'
import FAQs from '../FAQs'
import Major from '../Major'

const Div = styled.div`
    display: ${props => props.display};
    transform:translateY(50%);
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
        MobileComponent : [<Home />,<Major />,<About />,<FAQs />]
    }
   
    render() {
        return (
            <React.Fragment>
            <Desktop>
                {
                    this.state.DesktopComponent.map((data, i) => {
                        return (
                            <Div key={i} display={this.state.key===i?'block':'none'}>
                              {data}
                            </Div>
                        )
                    })
                }
            </Desktop>
            <Mobile>
                {
                    this.state.MobileComponent.map((data, i) => {
                        return (
                            <Div key={i} display={this.state.key === i ? 'block' : 'none'}>
                                {data}
                            </Div>
                        )
                    })
                }
            </Mobile>
            </React.Fragment>
        )
    }
}


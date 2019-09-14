import React, { Component } from 'react'
import styled from 'styled-components'

import About from '../About'
import FAQs from '../FAQs/FAQs'

const Div = styled.div`
    display: ${props => props.display};
    transform:translateY(50%);
`

export default class ClickChage extends Component {
    
    componentDidMount(){
        this.setState((props) => {
            return {
                key: this.props.keyid
            };
        })
    }  

    state ={    
        key : 0,
        text : [<About />,<FAQs />]
    }
   
    render() {
        return (
            <React.Fragment>
            {
                this.state.text.map((data, i) => {
                    return (
                        <Div key={i} display={this.state.key===i?'block':'none'}>
                          {data}
                        </Div>
                    )
                })
            }
            </React.Fragment>
        )
    }
}
// {a === 1 && <a />}


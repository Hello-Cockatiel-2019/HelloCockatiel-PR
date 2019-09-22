import React, { Component } from 'react'
import { slide as Menu } from 'react-burger-menu'

import color from '../../Config/Color'
import { Mobile } from './Hidden'

import SideButton from './SideButton'

const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '44px',
    height: '44px',
    right: '36px',
    top: '36px',
  },
  bmBurgerBars: {
    background: `${color.font1}`
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    background: `${color.Wood6}`,
    padding: '2.5em 1.5em 0',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

export default class componentName extends Component {
  state = {
    id: 0,
    menuOpen : false
  }

  changeClick = (i) => {
    let number = i
    if (number >= 0) {
      this.props.changeClick(number);
    }
  }

  onClick = () => {
    this.setState({
      menuOpen: true
    })
  }

  clickButton = (i) => {
    this.setState({
      menuOpen: i
    })
    console.log(i)
  }

  handleStateChange(state) {
    this.setState({ 
      menuOpen: state.isOpen 
    })
  }

  render() {
    return (
      <Mobile className="row justify-content-end">
        <Menu 
          styles={styles} 
          onClick={this.onClick}
          isOpen={this.state.menuOpen} 
          width={'60%'}
          onStateChange={(state) => this.handleStateChange(state)}
          customBurgerIcon={<img src="/images/Objects/ham.png" />} 
          right
           >
          <SideButton changeClick={this.changeClick} clickToClose={this.clickButton} />
        </Menu>
    </Mobile>
    )
  }
}
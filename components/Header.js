import React, { Component } from 'react'
import { View } from 'react-native'
import { red, white } from '../utils/colors'
import { Header as RNEHeader } from 'react-native-elements'

class Header extends Component {
  render() {
    const { children } = this.props

    return (
      <RNEHeader
        backgroundColor={red}
        statusBarProps={{ barStyle: 'light-content' }}
        centerComponent={{ text: children, style: { color: white } }}
      />
    )
  }
}

export default Header

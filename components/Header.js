import React, { Component } from 'react'
import { View } from 'react-native'
import { primary, white } from '../utils/colors'
import { select } from '../utils/platform'
import { Header as RNEHeader } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons'

class Header extends Component {
  backButton = {
    icon: select('ios-arrow-back', 'md-arrow-back'),
    color: '#fff',
    type: 'ionicon'
  }

  render() {
    const { children, showBackButton } = this.props
    return (
      <RNEHeader
        backgroundColor={primary}
        statusBarProps={{ barStyle: 'light-content' }}
        leftComponent={showBackButton ? this.backButton : {}}
        centerComponent={{ text: children, style: { color: white } }}
      />
    )
  }
}

export default Header

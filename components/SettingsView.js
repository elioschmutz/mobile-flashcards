import React, { Component } from 'react'
import { View, StyleSheet, Alert } from 'react-native'
import { PrimaryButton } from './Button'
import { white } from '../utils/colors'
import { connect } from 'react-redux'
import { resetState } from '../actions/shared'

class SettingsView extends Component {
  shouldResetApp = () => {
    Alert.alert('Clear app storage', 'Are you sure you want to clear your app-storage?', [
      { text: 'Cancel' },
      { text: 'OK', onPress: this.resetApp }
    ])
  }

  resetApp = () => {
    this.props.dispatch(resetState())
    Alert.alert('Storage cleared', 'Your app-storage have been successfully cleared.')
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.center}>
            <PrimaryButton onPress={this.shouldResetApp} title="Clear app storage" />
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    justifyContent: 'space-around'
  },
  center: {
    alignItems: 'center'
  }
})

export default connect()(SettingsView)

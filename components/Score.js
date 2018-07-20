import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import { PrimaryButton, SecondaryButton } from './Button'

class Score extends Component {
  render() {
    const { max, score, onPressFinish, onPressRestart } = this.props

    return (
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.center}>
            <Text h2>Your score</Text>
            <Text h1>{`${score}/${max}`}</Text>
          </View>
          <View>
            <PrimaryButton onPress={onPressFinish} title="Finish" />
            <SecondaryButton onPress={onPressRestart} title="Restart" />
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around'
  },
  center: {
    alignItems: 'center'
  }
})

export default Score

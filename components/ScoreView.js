import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import Header from './Header'
import { Text } from 'react-native-elements'
import { PrimaryButton, SecondaryButton } from './Button'

class DeckView extends Component {
  render() {
    const { max, score } = this.props

    return (
      <View style={{ flex: 1 }}>
        <Header showBackButton={true}>Score</Header>
        <View style={styles.container}>
          <View style={styles.center}>
            <Text h2>Your score</Text>
            <Text h1>{`${score}/${max}`}</Text>
          </View>
          <View>
            <PrimaryButton title="Done" />
          </View>
        </View>
      </View>
    )
  }
}

export default DeckView

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around'
  },
  center: {
    alignItems: 'center'
  }
})

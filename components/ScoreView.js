import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import { PrimaryButton, SecondaryButton } from './Button'

class DeckView extends Component {

  onPressButton = () => {
    const { navigation } = this.props
    navigation.navigate('Home')
  }

  render() {
    const { max, score } = this.props

    return (
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.center}>
            <Text h2>Your score</Text>
            <Text h1>{`1/2`}</Text>
          </View>
          <View>
            <PrimaryButton onPress={this.onPressButton} title="Done" />
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

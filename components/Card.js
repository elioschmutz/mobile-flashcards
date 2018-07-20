import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import { PrimaryButton, SuccessButton, ErrorButton } from './Button'
import { primary } from '../utils/colors'
import { white } from '../utils/colors'

class Card extends Component {
  state = {
    showFront: true
  }

  turnCard = () => {
    const { showFront } = this.state

    this.setState({
      showFront: !showFront
    })
  }

  onPressCorrect = () => {
    const { onPressCorrect } = this.props
    this.turnCard()
    onPressCorrect()
  }

  onPressIncorrect = () => {
    const { onPressIncorrect } = this.props
    this.turnCard()
    onPressIncorrect()
  }

  render() {
    const { card } = this.props
    const { showFront } = this.state

    return (
      <View style={{ flex: 1 }}>
        {showFront ? (
          <View style={styles.container}>
            <View style={styles.center}>
              <Text style={{ color: primary }}>Question</Text>
              <Text h1>{card.question}</Text>
            </View>
            <View>
              <PrimaryButton onPress={this.turnCard} title="Show answer" />
            </View>
          </View>
        ) : (
          <View style={styles.container}>
            <View style={styles.center}>
              <Text style={{ color: primary }}>Answer</Text>
              <Text h1>{card.answer}</Text>
            </View>
            <View>
              <SuccessButton onPress={this.onPressCorrect} title="Correct" />
              <ErrorButton onPress={this.onPressIncorrect} title="Incorrect" />
            </View>
          </View>
        )}
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

export default Card

import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import Header from './Header'
import { Text } from 'react-native-elements'
import { PrimaryButton, SecondaryButton, SuccessButton, ErrorButton } from './Button'
import { primary } from '../utils/colors'

class QuizView extends Component {
  state = {
    pointer: 0,
    showFront: false,
    score: 0
  }

  nextQuestion = () => {
    const { pointer } = this.state
    this.setState({
      pointer: pointer + 1
    })
  }

  render() {
    const { deck } = this.props
    const { pointer, showFront } = this.state
    const [question, answer] = Object.values(deck.questions[pointer])

    return (
      <View style={{ flex: 1 }}>
        <Header showBackButton={true}>Quiz</Header>
        <View>
          <Text h3>2/2</Text>
        </View>
        {showFront ? (
          <View style={styles.container}>
            <View style={styles.center}>
              <Text style={{ color: primary }}>Question</Text>
              <Text h1>{question}</Text>
            </View>
            <View>
              <PrimaryButton title="Show answer" />
            </View>
          </View>
        ) : (
          <View style={styles.container}>
            <View style={styles.center}>
              <Text style={{ color: primary }}>Answer</Text>
              <Text h1>{answer}</Text>
            </View>
            <View>
              <SuccessButton title="Correct" />
              <ErrorButton title="Incorrect" />
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
    justifyContent: 'space-around'
  },
  center: {
    alignItems: 'center'
  }
})

export default QuizView

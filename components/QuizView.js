import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import { PrimaryButton, SuccessButton, ErrorButton } from './Button'
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

  onPressButton = () => {
    const { navigation } = this.props
    navigation.navigate('ScoreView')
  }

  render() {
    const deck = {
      title: 'React',
      questions: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces'
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event'
        }
      ]
    }

    const { pointer, showFront } = this.state
    const [question, answer] = Object.values(deck.questions[pointer])

    return (
      <View style={{ flex: 1 }}>
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
              <SuccessButton onPress={this.onPressButton} title="Correct" />
              <ErrorButton onPress={this.onPressButton} title="Incorrect" />
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

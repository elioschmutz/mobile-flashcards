import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import { PrimaryButton, SuccessButton, ErrorButton } from './Button'
import { primary } from '../utils/colors'
import { white } from '../utils/colors'
import { connect } from 'react-redux'

class QuizView extends Component {
  state = {
    pointer: 0,
    showFront: true,
    score: 0
  }

  nextQuestion = () => {
    const { pointer } = this.state
    this.setState({
      pointer: pointer + 1
    })
  }

  onPressCorrect = () => {
    const { navigation, cards } = this.props
    const { pointer } = this.state

    nextPointer = pointer + 1

    if (nextPointer >= cards.length) {
      navigation.navigate('ScoreView')
      return
    }

    this.setState({
      pointer: nextPointer,
      showFront: false
    })

  }

  onPressIncorrect = () => {

  }

  showAnswer = () => {
    this.setState({
      showFront: false
    })
  }

  render() {
    const { deck, cards } = this.props
    const { pointer, showFront } = this.state
    const currentCard = cards[pointer]
    return (
      <View style={{ flex: 1 }}>
        <View>
          <Text h3>{`${pointer + 1}/${cards.length}`}</Text>
        </View>
        {showFront ? (
          <View style={styles.container}>
            <View style={styles.center}>
              <Text style={{ color: primary }}>Question</Text>
              <Text h1>{currentCard.question}</Text>
            </View>
            <View>
              <PrimaryButton onPress={this.showAnswer} title="Show answer" />
            </View>
          </View>
        ) : (
          <View style={styles.container}>
            <View style={styles.center}>
              <Text style={{ color: primary }}>Answer</Text>
              <Text h1>{currentCard.answer}</Text>
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

const mapStateToProps = (state, props) => {
  const { deck } = props.navigation.state.params

  return {
    deck,
    cards: deck.cards
  }
}

export default connect(mapStateToProps)(QuizView)

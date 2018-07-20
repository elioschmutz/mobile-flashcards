import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import { PrimaryButton, SuccessButton, ErrorButton } from './Button'
import { primary } from '../utils/colors'
import { white } from '../utils/colors'
import { connect } from 'react-redux'
import Card from './Card'

class QuizView extends Component {
  state = {
    pointer: 0,
    score: 0
  }
  cardNumber = () => {
    return this.state.pointer + 1
  }

  nextQuestion = () => {
    const { navigation, cards } = this.props
    const { pointer } = this.state

    nextPointer = pointer + 1

    if (nextPointer >= cards.length) {
      navigation.navigate('ScoreView')
      return
    }

    this.setState({
      pointer: nextPointer,
    })
  }

  onPressCorrect = () => {
    const { navigation, cards } = this.props
    const { pointer, score } = this.state

    this.setState({
      score: score + 1
    })
    this.nextQuestion()
  }

  onPressIncorrect = () => {
    this.nextQuestion()
  }

  render() {
    const { deck, cards } = this.props
    const { pointer, score } = this.state
    const currentCard = cards[pointer]
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.header}>
          <Text h3>Card {`${this.cardNumber()}/${cards.length}`}</Text>
          <Text h3>Score {`${score}/${cards.length}`}</Text>
        </View>
        <Card
          card={currentCard}
          onPressCorrect={this.onPressCorrect}
          onPressIncorrect={this.onPressIncorrect}
        />
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
  header: {
    flexDirection: 'row',
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

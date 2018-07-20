import React, { Component, Fragment } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import { white } from '../utils/colors'
import { connect } from 'react-redux'
import Card from './Card'
import Score from './Score'
import PropTypes from 'prop-types'

class QuizView extends Component {
  static propTypes = {
    deck: PropTypes.object.isRequired,
  }

  initState = {
    pointer: 0,
    score: 0,
    isFinish: false
  }
  state = { ...this.initState }

  cardNumber = () => {
    return this.state.pointer + 1
  }

  nextQuestion = () => {
    const { navigation, deck } = this.props
    const { pointer } = this.state

    nextPointer = pointer + 1

    if (nextPointer >= deck.cards.length) {
      this.setState({
        isFinish: true
      })
    } else {
      this.setState({
        pointer: nextPointer
      })
    }
  }

  reset = () => {
    this.setState(this.initState)
  }

  onPressCorrect = () => {
    const { navigation } = this.props
    const { pointer, score } = this.state

    this.setState({
      score: score + 1
    })
    this.nextQuestion()
  }

  onPressIncorrect = () => {
    this.nextQuestion()
  }

  onPressFinish = () => {
    const { navigation, deck } = this.props
    navigation.navigate('DeckView', { title: deck.title })
  }

  onPressRestart = () => {
    this.reset()
  }

  render() {
    const { deck } = this.props
    const { pointer, score, isFinish } = this.state
    const { cards } = deck
    const currentCard = cards[pointer]
    return (
      <View style={{ flex: 1 }}>
        {!isFinish ? (
          <Fragment>
            <View style={styles.header}>
              <Text h3>Card {`${this.cardNumber()}/${cards.length}`}</Text>
              <Text h3>Score {`${score}/${cards.length}`}</Text>
            </View>
            <Card
              card={currentCard}
              onPressCorrect={this.onPressCorrect}
              onPressIncorrect={this.onPressIncorrect}
            />
          </Fragment>
        ) : (
          <Score
            max={cards.length}
            score={score}
            onPressFinish={this.onPressFinish}
            onPressRestart={this.onPressRestart}
          />
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
    deck
  }
}

export default connect(mapStateToProps)(QuizView)

import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import { PrimaryButton, SecondaryButton } from './Button'
import { connect } from 'react-redux'
import { white } from '../utils/colors'

class DeckView extends Component {
  static navigationOptions = ({ navigation }) => {
    const { deckId } = navigation.state.params
    return {
      title: `Deck: ${deckId}`
    }
  }
  navigateToAddCard = () => {
    const { navigation } = this.props
    const { deck } = navigation.state.params

    navigation.navigate('AddCardView', { deck: deck })
  }
  navigateToStartQuiz = () => {
    const { navigation } = this.props
    const { deck } = navigation.state.params

    navigation.navigate('QuizView', { deck: deck })
  }

  hasQuestions = () => {
    return this.props.deck.questions.length > 0
  }

  render() {
    const { deck } = this.props

    return (
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.center}>
            <Text h1>{deck.title}</Text>
            <Text h2>{`${deck.questions.length} cards`}</Text>
          </View>
          <View>
            <SecondaryButton onPress={this.navigateToAddCard} title="Add Card" />
            {this.hasQuestions() && (
              <PrimaryButton onPress={this.navigateToStartQuiz} title="Start Quiz" />
            )}
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

const mapStateToProps = ({ decks }, props) => {
  return {
    deck: decks[props.navigation.state.params.deckId]
  }
}

export default connect(mapStateToProps)(DeckView)

import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import { PrimaryButton, SecondaryButton } from './Button'

class DeckView extends Component {
  static navigationOptions = ({ navigation }) => {
    const { deckId } = navigation.state.params

    return {
      title: 'React'
    }
  }
  navigateToAddCard = () => {
    const { navigation } = this.props

    navigation.navigate('AddCardView', { deckId: 1 })
  }
  navigateToStartQuiz = () => {
    const { navigation } = this.props

    navigation.navigate('QuizView', { deckId: 1 })
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

    return (
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.center}>
            <Text h1>{deck.title}</Text>
            <Text h2>{`${deck.questions.length} decks`}</Text>
          </View>
          <View>
            <SecondaryButton onPress={this.navigateToAddCard} title="Add Card" />
            <PrimaryButton onPress={this.navigateToStartQuiz} title="Start Quiz" />
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

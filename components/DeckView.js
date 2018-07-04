import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import Header from './Header'
import { Text } from 'react-native-elements'
import { PrimaryButton, SecondaryButton } from './Button'

class DeckView extends Component {
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
        <Header showBackButton={true}>{deck.title}</Header>
        <View style={styles.container}>
          <View style={styles.center}>
            <Text h1>{deck.title}</Text>
            <Text h2>{`${deck.questions.length} decks`}</Text>
          </View>
          <View>
            <SecondaryButton title="Add Card" />
            <PrimaryButton title="Start Quiz" />
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

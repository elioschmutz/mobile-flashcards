import React, { Component } from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native'
import { ListItem } from 'react-native-elements'

const DeckListViewItem = ({ title, questionLength, onPress }) => (
  <ListItem onPress={onPress} title={title} subtitle={`${questionLength} cards`} />
)

class DeckListView extends Component {
  state = {
    decks: {
      React: {
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
      },
      JavaScript: {
        title: 'JavaScript',
        questions: [
          {
            question: 'What is a closure?',
            answer:
              'The combination of a function and the lexical environment within which that function was declared.'
          }
        ]
      }
    }
  }

  _renderItem = ({ item }) => {
    return (
      <DeckListViewItem
        onPress={() => this.props.navigation.navigate('DeckView', { deckId: 1 })}
        title={item.title}
        questionLength={item.questions.length}
      />
    )
  }

  render() {
    const { decks } = this.state
    return (
      <View style={styles.container}>
        <FlatList
          data={Object.values(decks)}
          renderItem={this._renderItem}
          extraData={this.state}
          keyExtractor={(item, index) => item.title}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    flex: 1
  },
  item: {
    alignItems: 'center'
  }
})

export default DeckListView

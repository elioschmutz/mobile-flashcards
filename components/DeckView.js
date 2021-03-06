import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import { PrimaryButton, SecondaryButton } from './Button'
import { connect } from 'react-redux'
import { white } from '../utils/colors'
import PropTypes from 'prop-types'

class DeckView extends Component {
  static propTypes = {
    deck: PropTypes.object.isRequired
  }

  static navigationOptions = ({ navigation }) => {
    const { title } = navigation.state.params
    return {
      title: `Deck: ${title}`
    }
  }
  navigateToAddCard = () => {
    const { navigation, deck } = this.props

    navigation.navigate('AddCardView', { deck: deck })
  }
  navigateToStartQuiz = () => {
    const { navigation, deck } = this.props

    navigation.navigate('QuizView', { deck: deck })
  }

  hasCards = () => {
    return this.props.deck.cards.length > 0
  }

  render() {
    const { deck } = this.props

    return (
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.center}>
            <Text h1>{deck.title}</Text>
            <Text h2>{`${deck.cards.length} cards`}</Text>
          </View>
          <View>
            <SecondaryButton onPress={this.navigateToAddCard} title="Add Card" />
            {this.hasCards() && (
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
    deck: decks[props.navigation.state.params.title]
  }
}

export default connect(mapStateToProps)(DeckView)

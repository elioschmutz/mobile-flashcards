import React, { Component } from 'react'
import { View, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { Text } from 'react-native-elements'
import { PrimaryButton } from './Button'
import { FormInput } from 'react-native-elements'
import { white } from '../utils/colors'
import { connect } from 'react-redux'
import { addCardToDeck } from '../actions/decks'

class AddCardView extends Component {
  static navigationOptions = () => {
    return {
      title: 'Add card'
    }
  }

  state = {
    question: '',
    answer: ''
  }

  validate = () => {
    const { question, answer } = this.state

    if (question == '' || answer == '') {
      return false
    }
    return true
  }

  onSubmit = () => {
    const { navigation, deck, dispatch } = this.props
    const { question, answer } = this.state
    if (!this.validate()) {
      return
    }

    dispatch(addCardToDeck(deck.title, { question, answer }))
    navigation.navigate('DeckView', { deckId: deck.title })
  }
  render() {
    const { question, answer } = this.state
    return (
      <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
        <View style={[styles.container]}>
          <Text h1>Add a new card</Text>
          <FormInput
            inputStyle={{}}
            placeholder="Enter a question"
            onChangeText={question => this.setState({ question })}
            value={question}
          />
          <FormInput
            inputStyle={{}}
            placeholder="Enter an answer"
            onChangeText={answer => this.setState({ answer })}
            value={answer}
          />

          <PrimaryButton disabled={!this.validate()} onPress={this.onSubmit} title="Submit" />
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    justifyContent: 'space-around',
    padding: 20
  }
})

const mapStateToProps = (state, props) => {
  return {
    deck: props.navigation.state.params.deck
  }
}

export default connect(mapStateToProps)(AddCardView)

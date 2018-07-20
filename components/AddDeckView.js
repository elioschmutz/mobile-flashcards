import React, { Component } from 'react'
import { View, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { Text } from 'react-native-elements'
import { PrimaryButton } from './Button'
import { FormInput } from 'react-native-elements'
import { addDeck } from '../actions/decks'
import { connect } from 'react-redux'

class AddDeckView extends Component {
  initState = {
    title: ''
  }

  state = {...this.initState}

  onSubmit = () => {
    const { navigation, dispatch } = this.props
    const { title } = this.state

    if (!this.validate()) {
      return
    }
    this.reset()
    dispatch(addDeck(title))
    navigation.navigate('DeckView', { title })
  }

  reset = () => {
    this.setState(this.initState)
  }

  validate = () => {
    const { title } = this.state

    if (title == '') {
      return false
    }
    return true
  }

  render() {
    const { title } = this.state

    return (
      <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
        <View style={[styles.container]}>
          <Text h1>What is the title of your new deck?</Text>
          <FormInput
            inputStyle={{}}
            placeholder="Please enter a title"
            onChangeText={title => this.setState({ title })}
            value={title}
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
    justifyContent: 'space-around',
    padding: 20
  }
})

export default connect()(AddDeckView)

import React, { Component } from 'react'
import { View, StyleSheet, KeyboardAvoidingView } from 'react-native'
import Header from './Header'
import { Text } from 'react-native-elements'
import { PrimaryButton } from './Button'
import { FormInput } from 'react-native-elements'

class AddCardView extends Component {
  state = {
    text: ''
  }
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
        <Header showBackButton={true}>New Card</Header>
        <View style={[styles.container]}>
          <Text h1>Add a new card</Text>
          <FormInput
            inputStyle={{}}
            placeholder="Enter a question"
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
          />
          <FormInput
            inputStyle={{}}
            placeholder="Enter an answer"
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
          />

          <PrimaryButton title="Submit" />
        </View>
      </KeyboardAvoidingView>
    )
  }
}

export default AddCardView

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    padding: 20
  },
})

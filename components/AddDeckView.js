import React, { Component } from 'react'
import { View, StyleSheet, KeyboardAvoidingView } from 'react-native'
import Header from './Header'
import { Text } from 'react-native-elements'
import { PrimaryButton } from './Button'
import { FormInput } from 'react-native-elements'

class AddDeckView extends Component {
  state = {
    text: ''
  }
  render() {
    const { max, score } = this.props

    return (
      <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
        <View style={[styles.container]}>
          <Text h1>What is the title of your new deck?</Text>
          <FormInput
            inputStyle={{}}
            placeholder="Please enter a title"
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
          />

          <PrimaryButton title="Submit" />
        </View>
      </KeyboardAvoidingView>
    )
  }
}

export default AddDeckView

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    padding: 20
  },
})

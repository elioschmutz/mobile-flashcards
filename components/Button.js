import React from 'react'
import { Button } from 'react-native-elements'
import { StyleSheet } from 'react-native'
import { primary, secondary } from '../utils/colors'

export const PrimaryButton = props => (
  <Button style={styles.button} backgroundColor={primary} {...props} />
)
export const SecondaryButton = props => (
  <Button style={styles.button} backgroundColor={secondary} {...props} />
)

const styles = StyleSheet.create({
  button: {
    marginTop: 20
  }
})

import React, { Component } from 'react'
import { StyleSheet, View, Text, FlatList, AsyncStorage } from 'react-native'
import { ListItem } from 'react-native-elements'
import { connect } from 'react-redux'

const DeckListViewItem = ({ title, questionLength, onPress }) => (
  <ListItem onPress={onPress} title={title} subtitle={`${questionLength} cards`} />
)

class DeckListView extends Component {
  _renderItem = ({ item }) => {
    return (
      <DeckListViewItem
        onPress={() => this.props.navigation.navigate('DeckView', { deck: item })}
        title={item.title}
        questionLength={item.questions.length}
      />
    )
  }

  render() {
    const { decks } = this.props

    return (
      <View style={styles.container}>
        {Object.keys(decks).length ? (
          <FlatList
            data={Object.values(decks)}
            renderItem={this._renderItem}
            extraData={this.state}
            keyExtractor={(item, index) => item.title}
          />
        ) : (
          <Text style={styles.noDecksText}>No decks available.</Text>
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    flex: 1
  },
  noDecksText: {
    alignSelf: 'center'
  }
})

const mapStateToProps = ({ decks }) => {
  return {
    decks
  }
}

export default connect(mapStateToProps)(DeckListView)

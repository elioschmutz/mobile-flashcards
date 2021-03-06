import React, { Component } from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native'
import { ListItem } from 'react-native-elements'
import { connect } from 'react-redux'
import { white } from '../utils/colors'
import PropTypes from 'prop-types'

const DeckListViewItem = ({ title, onPress, ...rest }) => (
  <ListItem onPress={onPress} title={title} {...rest} />
)

class DeckListView extends Component {
  static propTypes = {
    decks: PropTypes.object.isRequired
  }

  _renderItem = ({ item }) => {
    return (
      <DeckListViewItem
        onPress={() => this.props.navigation.navigate('DeckView', { title: item.title })}
        title={item.title}
        subtitle={`${item.cards.length} cards`}
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
    backgroundColor: white,
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

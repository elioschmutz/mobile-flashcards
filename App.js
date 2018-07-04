import React from 'react';
import { Text, View, StatusBar } from 'react-native';
import DeckListView from './components/DeckListView'
import DeckView from './components/DeckView'
import QuizView from './components/QuizView'
import ScoreView from './components/ScoreView'
import AddDeckView from './components/AddDeckView'
import AddCardView from './components/AddCardView'
import { Constants } from 'expo'
import { purple } from './utils/colors'

function UdaciStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
        <UdaciStatusBar backgroundColor={purple} barStyle="light-content" />
        <DeckListView />
      </View>
    );
  }
}

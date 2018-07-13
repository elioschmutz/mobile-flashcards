import React from 'react'
import { Text, View, StatusBar, ActivityIndicator } from 'react-native'
import DeckListView from './components/DeckListView'
import DeckView from './components/DeckView'
import QuizView from './components/QuizView'
import ScoreView from './components/ScoreView'
import AddDeckView from './components/AddDeckView'
import AddCardView from './components/AddCardView'
import { Constants } from 'expo'
import { purple, primary, white } from './utils/colors'
import { setLocalNotification } from './utils/notification'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import persistedReducer from './reducers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import middleware from './middleware'

const decksStack = createStackNavigator({
  Home: {
    screen: DeckListView,
    navigationOptions: {
      header: null,
    }
  },
  DeckView: {
    screen: DeckView,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: primary
      }
    }
  },
  QuizView: {
    screen: QuizView,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: primary
      }
    }
  },
  ScoreView: {
    screen: ScoreView,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: primary
      }
    }
  },
  AddCardView: {
    screen: AddCardView,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: primary
      }
    }
  },
})

const MainNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: decksStack,
      navigationOptions: {
        tabBarLabel: 'Decks',
        tabBarIcon: ({ tintColor }) => <Ionicons name="ios-chatboxes" size={30} color={tintColor} />
      }
    },
    AddDeckView: {
      screen: AddDeckView,
      navigationOptions: {
        tabBarLabel: 'New Deck',
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="plus-square" size={30} color={tintColor} />
        )
      }
    }
  },
  {
    navigationOptions: {
      header: null
    },
    tabBarOptions: {
      activeTintColor: primary,
      style: {
        height: 56,
        backgroundColor: white,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      }
    }
  }
)

function UdaciStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

let store = createStore(persistedReducer, middleware)
let persistor = persistStore(store)

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification()
  }
  render() {
    return (
      <Provider store={store}>
        <PersistGate
          loading={<ActivityIndicator size="large" color={primary} />}
          persistor={persistor}
        >
          <View style={{ flex: 1, backgroundColor: white }}>
            <UdaciStatusBar backgroundColor={primary} barStyle="light-content" />
            <MainNavigator />
          </View>
        </PersistGate>
      </Provider>
    )
  }
}

import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { StyleSheet, Text, View, Platform, FlatList, StatusBar} from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { Constants } from 'expo'
import reducer from './reducers'
import { white, gray, purple } from './utils/colors'
import { Ionicons, FontAwesome } from '@expo/vector-icons'
import OurStatusBar from './components/OurStatusBar'
import DeckList from './components/DeckList'
import NewDeck from './components/NewDeck'
import DeckDetails from './components/DeckDetails'
import Quiz from './components/Quiz'
import NewCard from './components/NewCard'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const Tabs = TabNavigator ({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'My Decks',
      tabBarIcon: ({tintColor}) => <MaterialCommunityIcons name={Platform.OS === 'ios' && 'cards-outline'} size={30} color={tintColor}/>
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck',
      tabBarIcon: ({tintColor}) => <FontAwesome name='plus-square' size={30} color={tintColor}/>
    }
  },
}, {
  navigationOptions: {
    header: null,
  },
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? purple : white,
    style: {
      height: 56,
      backgroundColor: Platform.OS === 'ios' ? white : purple,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
})

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
  },
  DeckDetails: {
    screen: DeckDetails,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      }
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      }
    }  

  },
  NewCard: {
    screen: NewCard,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      }
    }
  } 
})

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={styles.container}>
          <OurStatusBar backgroundColor={purple} barStyle='light-content'/>
          <MainNavigator/>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

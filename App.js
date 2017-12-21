import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { StyleSheet, Text, View, Platform, FlatList, StatusBar} from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { Constants } from 'expo'
import { white, gray, purple } from './utils/colors'
import { Ionicons, FontAwesome } from '@expo/vector-icons'
import OurStatusBar from './components/OurStatusBar'
import DeckList from './components/DeckList'
import NewDeck from './components/NewDeck'

const Tabs = TabNavigator ({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLable: 'Decks',
      tabBarIcon: ({tintColor}) => <Ionicons name='ios-speedometer' size={30} color={tintColor}/>
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLable: 'Decks',
      tabBarIcon: ({tintColor}) => <FontAwesome name='plus-square' size={30} color={tintColor}/>
    }
  }
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

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <OurStatusBar backgroundColor={purple} barStyle='light-content'/>
        <Tabs/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

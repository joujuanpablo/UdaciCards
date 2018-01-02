import React from 'react'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { Platform } from 'react-native'
import DeckList from '../components/DeckList'
import NewDeck from '../components/NewDeck'
import DeckDetails from '../components/DeckDetails'
import Quiz from '../components/Quiz'
import NewCard from '../components/NewCard'
import { white, gray, purple } from '../utils/colors'
import { Ionicons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'

export const Tabs = TabNavigator ({
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
  
  export const MainNavigator = StackNavigator({
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
import React, { Component } from 'react'
import { createStore } from 'redux'
import store from './store'
import { Provider } from 'react-redux'
import { StyleSheet, Text, View, FlatList, StatusBar} from 'react-native'
import { purple } from './utils/colors'
import OurStatusBar from './components/OurStatusBar'
import { MainNavigator } from './navigation/navigators'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
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

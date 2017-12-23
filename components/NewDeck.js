import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import { View, Text, StyleSheet, TextInput, Platform, Keyboard, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import { lightGray, gray, white, purple } from '../utils/colors'
import { createDeck } from '../actions'

class NewDeck extends Component {
    state = {
        deckTitle: '',
    }
   submit = () => {
       const { deckTitle } = this.state
        console.log('the deck', deckTitle)
        this.props.addDeck(deckTitle)
        alert(`${deckTitle} has been created`)
        this.props.navigation.dispatch(NavigationActions.back({
            key: 'NewDeck',
        }))
        //go back to the previous page
    }
    handleInput(text) {
        this.setState({ deckTitle: text })
    }
    
    //disable button until there is text in the state.
    render() {
        return(
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                    <View style={styles.container}>
                        <Text style={styles.heading}>Create new deck</Text> 
                        <TextInput 
                            enablesReturnKeyAutomatically={true} 
                            style={[styles.textInput, Platform.OS === 'ios' ? styles.textInputIos : null ]} 
                            placeholder='title' 
                            value={this.state.deckTitle}
                            onChangeText={text => this.handleInput(text)}
                            maxLength={20}
                            clearButtonMode={'always'}/>
                        <Text style={styles.helperText}>Title must be 1-20 characters</Text>
                        <TouchableOpacity 
                            onPress={this.submit} 
                            style={[Platform.OS === 'ios' ? styles.iosButton : styles.androidButton, this.state.deckTitle.length < 1 && styles.disabled]}
                            disabled={this.state.deckTitle.length < 1}>
                                <Text style={styles.submitBtnText}>Submit</Text>
                        </TouchableOpacity> 
                        <Text>{this.state.deckTitle.length}</Text> 
                        <Text>{JSON.stringify(this.state)}</Text>                
                        <Text>{JSON.stringify(this.props)}</Text>                
                    </View>
            </TouchableWithoutFeedback>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: white,
        flex: 1,
        margin: 20,
        borderRadius: 10,
        padding: 40
    },
    heading: {
        textAlign: 'center',
        fontSize: 20,
    },
    textInput: {
        marginTop: 40,
        marginBottom: 10,
        height: 40,
    },
    textInputIos: {
        borderBottomColor: gray,
        borderBottomWidth: 2,
    },
    helperText: {
        fontSize: 10,
        marginBottom: 30,
        color: gray,
    },
    iosButton: {
        backgroundColor: purple,
        borderRadius: 7,
        padding: 10,
        height: 45,
        marginLeft: 40,
        marginRight: 40,
        marginTop: 20,
   },
   androidButton: {
        backgroundColor: purple,
        borderRadius: 2,
        padding: 10,
        height: 45,
        marginLeft: 5,
        alignSelf: 'flex-end',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
  },
  disabled: {
      backgroundColor: lightGray,
  },
  submitBtnText: {
        color: white,
        fontSize: 22,
        textAlign: 'center',
  },
})

const mapDispatchToProps = (dispatch) => ({
        addDeck: data => dispatch(createDeck(data))
})

export default connect(null, mapDispatchToProps)(NewDeck)
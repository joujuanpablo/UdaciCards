import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, Platform, Keyboard, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import { gray, white, purple } from '../utils/colors'

class NewDeck extends Component {
    render() {
        return(
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                    <View style={styles.container}>
                        <Text style={styles.heading}>Create new deck</Text> 
                        <TextInput enablesReturnKeyAutomatically={true} style={[styles.textInput, Platform.OS === 'ios' ? styles.textInputIos : null ]} placeholder='title'></TextInput>
                        <TouchableOpacity style={Platform.OS === 'ios' ? styles.iosButton : styles.androidButton}>
                           <Text style={styles.submitBtnText}>Submit</Text> 
                        </TouchableOpacity>                    
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
    },
    heading: {
        textAlign: 'center',
        marginTop: 40,
        fontSize: 20,
    },
    textInput: {
        margin: 40,
        height: 40,
    },
    textInputIos: {
        borderBottomColor: gray,
        borderBottomWidth: 2,
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
        marginRight: 40,
        marginLeft: 5,
        alignSelf: 'flex-end',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
  },
  submitBtnText: {
        color: white,
        fontSize: 22,
        textAlign: 'center',
  },
})

export default NewDeck
import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native'
import { white, purple } from '../utils/colors'
import { clearLocalNotification, setLocalNotification } from '../utils/helpers'

class Results extends Component {
    componentDidMount() {
        clearLocalNotification()
        .then(setLocalNotification)
    }
    render() {
        const { deckName, numberOfCards, questions } = this.props.screenProps
        return (
            <View style={styles.container}>
                <Text>You Scored:</Text>
                <Text style={styles.scoreText}>{this.props.navigation.state.params.score}/{numberOfCards}</Text>
                <TouchableOpacity
                style={Platform.OS === 'ios' ? styles.iosButton : styles.androidButton}
                onPress={() => this.props.navigation.navigate("card", {cardIndex: 1, score: 0, questions,})}>
                    <Text style={styles.buttonText}>Retake Quiz</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 40,
        backgroundColor: white,
        borderRadius: Platform.OS === 'ios' ? 15 : 5,
        padding: 20,
    },
    scoreText: {
        color: purple,
        fontSize: 20,
        fontWeight: 'bold'
    },
    iosButton: {
        backgroundColor: purple,
        borderRadius: 7,
        padding: 10,
        height: 45,
        marginLeft: 40,
        marginRight: 40,
        marginTop: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
   },
   androidButton: {
        backgroundColor: purple,
        borderRadius: 2,
        padding: 10,
        height: 45,
        marginRight: 5,
        marginLeft: 5,
        alignSelf: 'flex-end',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
  },
  buttonText: {
    color: white,
    fontSize: 18,
    textAlign: 'center',
  },
})

export default Results
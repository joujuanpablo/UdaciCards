import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'
import { white, purple } from '../utils/colors'

class Results extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>You Scored:</Text>
                <Text style={styles.scoreText}>{this.props.navigation.state.params.score}/{this.props.screenProps.numberOfCards}</Text>
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
    }
})

export default Results
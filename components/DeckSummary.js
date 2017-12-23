import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Platform } from 'react-native'
import { white } from '../utils/colors'


class DeckSummary extends Component {
    render() {
        const { name, questions } = this.props
        const number = questions.length
        return(
            <TouchableOpacity style={styles.item} onPress={() => this.props.navigation.navigate(
                'DeckDetails',
                { 
                    name,
                    number,
                    questions,
                }
            )}>
                <Text>{name}</Text>
                <Text>cards: {number}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: white,
        borderRadius: Platform.OS === 'ios' ? 16 : 2,
        padding: 30,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 17,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        shadowRadius: 3,
        shadowOpacity: 0.8,
        shadowColor: 'rgba(0,0,0,0.24)',
        shadowOffset: {
            width: 0,
            height: 3,
        }
    },
})

export default DeckSummary
import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Platform } from 'react-native'
import { white } from '../utils/colors'


export default function DeckSummary({ name, number }) {
    return(
        <View style={styles.item}>
            <Text>{name}</Text>
            <Text>{number}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: white,
        borderRadius: Platform.OS === 'ios' ? 16 : 2,
        padding: 20,
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
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, TouchableOpacity, Text, StyleSheet, Platform, Button } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { white, purple, red } from '../utils/colors'


class DeckSummary extends Component {
    render() {
        const { name, questions, editMode } = this.props
        const number = questions.length
        return(
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={styles.item} onPress={() => this.props.navigation.navigate(
                    'DeckDetails',
                    { 
                        name
                    }
                )}>
                    <Text style={{color: purple, fontWeight: 'bold'}}>{name}</Text>
                    <Text>cards: {number}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.deleteBtn, this.props.editMode ? {display:'flex'} : {display: 'none'} ]}>
                    <MaterialIcons name='delete' color={red} size={30}/>
                </TouchableOpacity>
            </View>
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
        flex: 1,
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
    deleteBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginTop: 17,
    },
})

function mapStateToProps(decks) {
    return decks
}

export default connect(mapStateToProps, null)(DeckSummary)
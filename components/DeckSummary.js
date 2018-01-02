import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, TouchableOpacity, Text, StyleSheet, Platform, Button } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { white, purple, red } from '../utils/colors'


class DeckSummary extends Component {
    state = {
        name: '',
        questions: [],
        editMode: false,
    }
    componentDidMount() {
        const { name, questions, editMode } = this.props
        this.setState({name, questions, editMode})
    }
    componentWillReceiveProps (nextProps) {
        if (nextProps.questions !== this.props.questions) {
          this.setState({
            questions: nextProps.questions,
          })
        }
      }
    render() {
        const { name, questions, editMode } = this.state
        const numberOfQuestions = questions.length
        return(
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={styles.item} onPress={() => this.props.navigation.navigate(
                        'DeckDetails',
                        { 
                            name
                        }
                    )}>
                    <Text style={{color: purple, fontWeight: 'bold'}}>{name}</Text>
                    <Text>cards: {numberOfQuestions}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.deleteBtn, editMode ? {display:'flex'} : {display: 'none'} ]}>
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

function mapStateToProps({ decks }) {
    return decks
}

export default connect(mapStateToProps, null)(DeckSummary)
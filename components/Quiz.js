import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'
import { View, Text } from 'react-native'
import QuizCard from './QuizCard'
import { white, purple } from '../utils/colors'
import Results from './Results'

const QuizStack = StackNavigator({
    'card': {
        screen: QuizCard,
    },
    'results': {
        screen: Results,
    }
}, 
{
    headerMode: 'none',
  })

class Quiz extends Component {
    render() {
        const { questions} = this.props.navigation.state.params
        return (
            <View style={{flex: 1}}>
                <QuizStack screenProps={{questions, numberOfCards: questions.length, cardIndex: 1}}/>
            </View>

        )
    }
}

export default Quiz
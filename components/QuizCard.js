import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Platform, Animated } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { white, purple, red, green } from '../utils/colors'

class QuizCard extends Component {
    state = {
        answerVisible: false,
        cardIndex: 1,
        score: 0,
        opacity: new Animated.Value(0),
        width: new Animated.Value(0),
        height: new Animated.Value(0)
    }
    componentDidMount() {
        if (this.props.navigation.state.params) {
            const { cardIndex, score} = this.props.navigation.state.params
            this.setState({
                cardIndex,
                score,
            })
        }
    }
    showAnswer = () => {
        const { opacity, width, height } = this.state
        this.setState({answerVisible: true})
        Animated.timing( opacity, { toValue: 1, duration: 1000})
            .start()
        Animated.spring( height, {toValue: 60, speed: 2}).start()
        Animated.spring( width, {toValue: 60, speed: 2}).start()
    }
    markCorrect = () => {
        newScore = this.state.score + 1
        this.navigateToNextCard(newScore)
    }
    markIncorrect = () => {
        this.navigateToNextCard(this.state.score)
    }
    navigateToNextCard = (newScore) => {
        const { cardIndex } = this.state

        if (cardIndex === this.props.screenProps.numberOfCards) {

            this.props.navigation.navigate("results", {score: newScore})

        } else {

            this.props.navigation.navigate("card", {cardIndex: (cardIndex + 1), score: newScore})
        }
    }
    render() {
        const { cardIndex, answerVisible, opacity, width, height } = this.state
        const { questions, numberOfCards } = this.props.screenProps
        const question = questions[cardIndex - 1]
        return(
            <View style={styles.container}>
                <View style={[styles.pagination]}>
                    <Text style={styles.paginationText}>{cardIndex}/{numberOfCards}</Text>
                </View>
                <View style={styles.cardBody}>
                    <View>
                        <Text style={{textAlign: 'center'}}>{question.question}</Text>
                        <TouchableOpacity 
                        style={[Platform.OS === 'ios' ? styles.iosButton : styles.androidButton, answerVisible ? {display: 'none'} : {display: 'flex'}]}
                        onPress={this.showAnswer}
                        >
                            <Text style={styles.buttonText}>Show Answer</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[answerVisible ? styles.show : styles.hide]}>
                        <Animated.Text style={[styles.answerText, {opacity}]}>{question.answer}</Animated.Text>
                        <View style={[styles.buttonContainer]}>
                            <Animated.View style={{height, width, opacity}}>
                                <TouchableOpacity 
                                style={[styles.resultButton, {borderColor: green}]}
                                onPress={this.markCorrect}
                                >
                                    <FontAwesome name='check' color={green} size={30}/>
                                </TouchableOpacity>
                            </Animated.View>
                            <Animated.View style={{height, width, opacity}}>
                                <TouchableOpacity 
                                style={[styles.resultButton, {borderColor: red}]}
                                onPress={this.markIncorrect}
                                >
                                    <FontAwesome name='remove' color={red} size={30}/>
                                </TouchableOpacity>
                            </Animated.View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        margin: 40,
        backgroundColor: white,
        borderRadius: Platform.OS === 'ios' ? 15 : 5,
        padding: 20,
    },
    show: {
        display: 'flex',
    },
    hide: {
        display: 'none'
    },
    pagination: {
        height: 170,
        justifyContent: 'center',
    },
    paginationText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: purple
    },
    cardBody: {
        
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
  answerText: {
      fontStyle: 'italic',
      textAlign: 'center',
      marginTop: 30,
  },
  resultButton: {
      borderWidth: 4,
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10,
      marginTop: 0,
      width: 50,
      height: 50,
  },
  buttonContainer: {
      flexDirection: 'row',
      margin: 40,
      justifyContent: 'space-around'
  },


})
export default QuizCard
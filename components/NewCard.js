import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, Platform, Keyboard, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import { submitNewCard } from '../utils/api'
import { gray, white, purple, lightGray } from '../utils/colors'
import { createCard } from '../actions'

class NewDeck extends Component {
    state= {
        deckName: '',
        question: '',
        answer: '',
    }
    componentDidMount() {
        const { title } = this.props.navigation.state.params
        this.setState({deckName: title})
    }
    
    handleOnPress = () => {
        const card = this.state
        submitNewCard(card)
            .then(
                this.props.createNewCard(card),
                this.props.navigation.dispatch(NavigationActions.back({
                    key: this.props.navigation.state.key,
                }))
            ) 
        
    }

    handleQuestionInput(text) {
        this.setState({question: text})
    }
    handleAnswerInput(text) {
        this.setState({answer: text})
    }
    render() {
        return(
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                    <View style={styles.container}>
                        <Text style={styles.heading}>Create new card</Text> 
                        <TextInput 
                            enablesReturnKeyAutomatically={true} 
                            style={[styles.textInput, Platform.OS === 'ios' ? styles.textInputIos : null ]} 
                            placeholder='question'
                            value={this.state.question}
                            onChangeText={text => this.handleQuestionInput(text)}
                        />
                        <Text style={styles.helperText}>Minimum 1 character</Text>
                        <TextInput 
                        enablesReturnKeyAutomatically={true} 
                        style={[styles.textInput, Platform.OS === 'ios' ? styles.textInputIos : null ]} 
                        placeholder='answer'
                        value={this.state.answer}
                        onChangeText={text => this.handleAnswerInput(text)}
                        />
                        <Text style={styles.helperText}>Minimum 1 character</Text>
                        <TouchableOpacity 
                            onPress={name => this.handleOnPress(name)}
                            style={[Platform.OS === 'ios' ? styles.iosButton : styles.androidButton, (this.state.question.length < 1 || this.state.answer.length < 1) ? styles.disabled : null]}
                            disabled={this.state.question.length < 1 || this.state.answer.length < 1}
                            >
                           <Text style={styles.submitBtnText}>Submit</Text> 
                        </TouchableOpacity> 
                        <Text style={[styles.helperText ,(this.state.question.length < 1 || this.state.answer.length < 1) ? {display:'flex'} : {display: 'none'}]}>you must enter both a question and an answer to submit</Text>                 
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
    },
    heading: {
        textAlign: 'center',
        marginTop: 40,
        fontSize: 20,
    },
    textInput: {
        marginLeft: 40,
        marginRight: 40,
        marginTop: 40,
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
  disabled: {
    backgroundColor: lightGray,
  },
  helperText: {
    fontSize: 10,
    marginBottom: 30,
    color: gray,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 10,
  },
})


function mapDispatchToProps(dispatch) {

    return{ 
        createNewCard: data => dispatch(createCard(data))
    }
}
export default connect(null, mapDispatchToProps)(NewDeck)
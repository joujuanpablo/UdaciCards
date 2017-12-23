import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native'
import { purple, white } from '../utils/colors'

class DeckDetails extends Component {
    state = {
        name: '',
        questions: [],
    }
    static navigationOptions = ({navigation}) => {
        return {
            title: navigation.state.params.name
        }
    }
    componentDidMount() {
        const {name, questions} = this.props.navigation.state.params
        this.setState({
            name,
            questions,
        })
    }
    render() {
        const {name, questions} = this.state
        return (
            <View style={styles.container}>
                <Text>{name}</Text>
                <Text>{questions.length} cards</Text>
                <View style={Platform.OS === 'android' ? styles.btnContainer : null}>
                    <TouchableOpacity 
                    style={Platform.OS === 'ios' ? styles.iosButton : styles.androidButton}
                    onPress={() => this.props.navigation.navigate(
                        'Quiz',
                        {
                            name,
                            questions,
                        }
                    )}>
                        <Text style={styles.submitBtnText}>
                            Start Quiz
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Platform.OS === 'ios' ? styles.iosButton : styles.androidButton}>
                        <Text style={styles.submitBtnText}>
                            Add Card
                        </Text>
                    </TouchableOpacity>
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
       justifyContent: 'center'
   },
   btnContainer: {
       flexDirection: 'row',
       justifyContent: 'center'
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
        marginRight: 5,
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

export default DeckDetails
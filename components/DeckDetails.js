import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native'
import { purple, white } from '../utils/colors'

class DeckDetails extends Component {
    state = {
        title: '',
        questions: [],
    }
    static navigationOptions = ({navigation}) => {
        return {
            title: navigation.state.params.name
        }
    }
    componentDidMount() {
        const {title, questions} = this.props
        this.setState({
            title,
            questions,
        })
    }
    componentWillReceiveProps (nextProps) {
        if (nextProps.questions !== this.props.questions) {
          this.setState({
            questions: nextProps.questions,
          })
        }
      }
    render() {
        const {title, questions} = this.state
        return (
            <View style={styles.container}>
                <Text style={{fontWeight: 'bold'}}>{title}</Text>
                <Text>{questions.length} cards</Text>
                <View style={Platform.OS === 'android' ? styles.btnContainer : null}>
                    <TouchableOpacity 
                    style={Platform.OS === 'ios' ? styles.iosButton : styles.androidButton}
                    onPress={() => this.props.navigation.navigate(
                        'Quiz',
                        {
                            title,
                            questions,
                        }
                    )}>
                        <Text style={styles.submitBtnText}>
                            Start Quiz
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style={Platform.OS === 'ios' ? styles.iosButton : styles.androidButton}
                    onPress={() => this.props.navigation.navigate(
                        'NewCard',
                        {
                            title,
                            questions,
                        }
                    )}>
                        <Text style={styles.submitBtnText}>
                            Add Card
                        </Text>
                    </TouchableOpacity>
                </View>
                <Text>{JSON.stringify(this.props)}</Text>
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

function mapStateToProps(decks, { navigation }) {
    const deckName = navigation.state.params.name
    const ourDeck = decks[deckName]

    return ourDeck
}

export default connect(mapStateToProps, null)(DeckDetails)
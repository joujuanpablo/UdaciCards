import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, FlatList, StyleSheet, Platform} from 'react-native'
import { getSampleDecks } from '../utils/sampleData'
import DeckSummary from './DeckSummary'
import { fetchDecks } from '../utils/api'
import { receiveDecks } from '../actions'
import { white, gray } from '../utils/colors'

class DeckList extends Component {

    state = {}
    renderItem = ({ item }) => {
       return <DeckSummary navigation={this.props.navigation} name={item.title} questions={item.questions} key={item.title}/>
    }

    componentDidMount() {
        fetchDecks()
        .then((resultsObject) => {
            console.log('compo did mount', typeof resultsObject)
            this.props.receiveDecks(resultsObject)
        })
    }
    render() {
        return(
            <View style={{flex:1}}>
                <View style={[styles.headerContainer, Platform.OS === 'ios' ? styles.headerContainerIos : null]}>
                    <Text style={styles.header}>My Decks</Text>
                </View>
                <FlatList data={this.props.decksArray} renderItem={this.renderItem} keyExtractor={(item, index) => index} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: white,
        zIndex: 1,
    },
    headerContainerIos: {
        shadowRadius: 3,
        shadowOpacity: 0.8,
        shadowColor: 'rgba(0,0,0,0.24)',
        shadowOffset: {
            width: 0,
            height: 3,
        }
    },
    header: {
        marginTop: 20,
        marginBottom: 20,
        fontSize: 20,
        textAlign: 'center',
    },
})

function mapStateToProps(decks) {
    const decksArray = Object.keys(decks).map((key) => {
        const { questions, title } = decks[key]
        return {
                title,
                questions
        }
    })
    return {
        decksArray,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        receiveDecks: (decks) => dispatch(receiveDecks(decks))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckList)